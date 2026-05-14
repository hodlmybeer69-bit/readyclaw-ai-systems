import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session } from "@supabase/supabase-js";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type Order = {
  id: string;
  tier: string;
  name: string;
  email: string;
  phone: string | null;
  has_mac: string | null;
  mode: string | null;
  notes: string | null;
  status: string;
  created_at: string;
};

type Price = { key: string; value: string };

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return setIsAdmin(null);
    supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  if (loading) return <Shell><p className="font-mono text-xs">Loading…</p></Shell>;
  if (!session) return <Shell><Login /></Shell>;
  if (isAdmin === null) return <Shell><p className="font-mono text-xs">Checking…</p></Shell>;
  if (!isAdmin) return <Shell><NoAccess email={session.user.email ?? ""} /></Shell>;
  return <Shell><Dashboard /></Shell>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 bg-accent dot-pulse inline-block mr-2 align-middle" />
            READYCLAW / ADMIN
          </div>
          <a href="/" className="font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent">← Site</a>
        </div>
        {children}
      </div>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(null);
    const fn = mode === "signin"
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin + "/admin" } });
    const { error } = await fn;
    setBusy(false);
    if (error) setError(error.message);
  }

  return (
    <form onSubmit={submit} className="max-w-sm space-y-4">
      <h1 className="font-display text-3xl">Admin login</h1>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="email" className="w-full bg-secondary border border-border px-3 py-2 text-sm" />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required minLength={8} placeholder="wachtwoord" className="w-full bg-secondary border border-border px-3 py-2 text-sm" />
      {error && <p className="text-destructive font-mono text-xs">{error}</p>}
      <button disabled={busy} className="w-full bg-accent text-primary-foreground py-3 font-mono text-xs uppercase tracking-wider">
        {mode === "signin" ? "Inloggen" : "Account aanmaken"}
      </button>
      <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="w-full font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {mode === "signin" ? "Nog geen account?" : "Al een account?"}
      </button>
    </form>
  );
}

function NoAccess({ email }: { email: string }) {
  return (
    <div className="space-y-4">
      <h1 className="font-display text-3xl">Geen toegang</h1>
      <p className="text-muted-foreground">
        Ingelogd als <span className="font-mono">{email}</span> maar geen admin-rol. Neem contact op om geactiveerd te worden.
      </p>
      <button onClick={() => supabase.auth.signOut()} className="font-mono text-xs uppercase tracking-wider border border-border px-4 py-2">Uitloggen</button>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"orders" | "prices">("orders");
  return (
    <div>
      <div className="flex gap-6 border-b border-border mb-8 font-mono text-xs uppercase tracking-wider">
        {(["orders", "prices"] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`pb-3 -mb-px border-b-2 ${tab===t ? "border-accent text-accent" : "border-transparent text-muted-foreground"}`}>
            {t}
          </button>
        ))}
        <button onClick={() => supabase.auth.signOut()} className="ml-auto pb-3 text-muted-foreground hover:text-accent">Uitloggen</button>
      </div>
      {tab === "orders" ? <OrdersTab /> : <PricesTab />}
    </div>
  );
}

function OrdersTab() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
    setOrders(data ?? []);
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  async function setStatus(id: string, status: string) {
    await supabase.from("orders").update({ status }).eq("id", id);
    load();
  }

  function exportCsv() {
    const headers = ["created_at","tier","name","email","phone","has_mac","mode","status","notes"];
    const rows = orders.map((o) => headers.map((h) => JSON.stringify((o as any)[h] ?? "")).join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "readyclaw-orders.csv"; a.click();
    URL.revokeObjectURL(url);
  }

  if (loading) return <p className="font-mono text-xs">Loading…</p>;
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <p className="font-mono text-xs text-muted-foreground">{orders.length} bestellingen</p>
        <button onClick={exportCsv} className="font-mono text-xs uppercase tracking-wider border border-border px-3 py-2 hover:border-accent">Export CSV</button>
      </div>
      <div className="border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left p-3">Datum</th>
              <th className="text-left p-3">Tier</th>
              <th className="text-left p-3">Naam</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-border">
                <td className="p-3 font-mono text-xs">{new Date(o.created_at).toLocaleDateString("nl-NL")}</td>
                <td className="p-3">{o.tier}</td>
                <td className="p-3">{o.name}</td>
                <td className="p-3">{o.email}</td>
                <td className="p-3">
                  <select value={o.status} onChange={(e)=>setStatus(o.id, e.target.value)} className="bg-secondary border border-border px-2 py-1 text-xs">
                    {["new","contacted","paid","shipped","cancelled"].map((s)=><option key={s}>{s}</option>)}
                  </select>
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr><td colSpan={5} className="p-6 text-center text-muted-foreground text-sm">Nog geen bestellingen.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PricesTab() {
  const [prices, setPrices] = useState<Price[]>([]);
  const [edits, setEdits] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);

  async function load() {
    const { data } = await supabase.from("prices").select("*").order("key");
    setPrices(data ?? []);
  }
  useEffect(() => { load(); }, []);

  async function save(key: string) {
    const value = edits[key];
    if (!value) return;
    setSaving(key);
    await supabase.from("prices").update({ value, updated_at: new Date().toISOString() }).eq("key", key);
    setSaving(null);
    setEdits((e) => { const n = { ...e }; delete n[key]; return n; });
    load();
  }

  return (
    <div className="space-y-2">
      {prices.map((p) => (
        <div key={p.key} className="flex items-center gap-3 border border-border p-3">
          <div className="font-mono text-xs uppercase tracking-wider w-48 text-muted-foreground">{p.key}</div>
          <input
            defaultValue={p.value}
            onChange={(e) => setEdits((s) => ({ ...s, [p.key]: e.target.value }))}
            className="flex-1 bg-secondary border border-border px-3 py-2 text-sm"
          />
          <button
            disabled={!edits[p.key] || saving === p.key}
            onClick={() => save(p.key)}
            className="font-mono text-xs uppercase tracking-wider border border-border px-3 py-2 hover:border-accent disabled:opacity-40"
          >
            {saving === p.key ? "…" : "Opslaan"}
          </button>
        </div>
      ))}
    </div>
  );
}
