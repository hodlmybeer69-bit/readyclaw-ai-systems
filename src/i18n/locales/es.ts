import type { Dictionary } from "../types";

/** Spanish — natural, neutral-European Spanish translated from the Dutch source. */
export const es: Dictionary = {
  meta: {
    htmlLang: "es",
    ogLocale: "es_ES",
    title: "ReadyClaw — Tu empleado de IA. Listo. Sin complicaciones.",
    description:
      "Sistemas de IA preconfigurados en un Mac mini, en local o en la nube. Enchufa, inicia sesión, listo. Ahórrate meses de líos con APIs. Desde 899 €, pago único, sin suscripción.",
    ogTitle: "ReadyClaw — Tu empleado de IA. Listo. Sin complicaciones.",
    ogDescription:
      "Sistemas de IA preconfigurados en un Mac mini. Enchufa, inicia sesión, listo. Desde 899 €, pago único — sin suscripción, sin curva de aprendizaje.",
  },

  languageNames: { en: "English", es: "Español", nl: "Nederlands", de: "Deutsch" },

  nav: {
    homeAria: "ReadyClaw inicio",
    menuAria: "Menú",
    languageAria: "Idioma",
    order: "Pedir",
    links: [
      { href: "#what", label: "Qué hace" },
      { href: "#how", label: "Cómo funciona" },
      { href: "#packages", label: "Paquetes" },
      { href: "#support", label: "Soporte" },
      { href: "#faq", label: "FAQ" },
    ],
  },

  hero: {
    imgAlt: "Un espacio de trabajo de noche — un Mac que sigue trabajando mientras duermes",
    chip: "Preconfigurado · Mac mini · En local o en la nube",
    headline: { line1: "Tu empleado de IA.", emphasis: "Listo.", rest: " Sin complicaciones." },
    body: "Sin meses descifrándolo todo. Sin experimentar con costes de API. Te entregamos un Mac mini con tu sistema de IA completamente instalado — en local o en la nube. En pocas horas estás listo para trabajar.",
    ctaPackage: "Elige tu paquete",
    ctaHow: "Cómo funciona",
    quote: "«Buenos días. Tres cosas requieren tu atención.»",
    quoteCaption: "— tu informe matinal, automático · Mac mini M4",
    stats: [
      { v: "~4 h", l: "Listo para trabajar" },
      { v: "100%", l: "Instalación remota" },
      { v: "€0/mo", l: "En local — sin costes de API" },
      { v: "3–6 meses", l: "Curva de aprendizaje que te ahorras" },
    ],
  },

  marquee: [
    "Sin suscripción",
    "Devolución en 30 días",
    "Propiedad del hardware de por vida",
    "100% local en Jarvis",
    "Defendible ante el RGPD",
    "Sin dependencia de proveedor",
    "Onboarding de 30 min",
    "Sin curva de aprendizaje",
  ],

  product: {
    kicker: "El dispositivo",
    imgAlt: "El Mac mini con tu sistema ReadyClaw, listo entre tus pantallas",
    headline: { before: "Una cajita silenciosa. Toda tu ", emphasis: "capa de IA", after: ", precargada." },
    body: "Sin armario de servidores, sin suscripción en la nube, sin lucecitas parpadeando. Un Mac mini del tamaño de una libreta que ejecuta tu empleado de IA — totalmente sin conexión sobre tu escritorio si quieres.",
    specs: [
      { k: "Apple silicon", v: "M4 · hasta 48GB" },
      { k: "Tamaño", v: "12,7 × 12,7 cm" },
      { k: "Consumo", v: "~7W en reposo" },
      { k: "Propiedad", v: "100% tuyo" },
    ],
  },

  what: {
    kicker: "Qué hace tu ReadyClaw",
    headline: { before: "Tres skills que eliminan el ", emphasis: "90%", after: " de la fricción diaria." },
    body: "Sin ventana de chat a la que ir. El trabajo ocurre en segundo plano, en tu propio dispositivo — y tú solo ves el resultado.",
    imgAlt: "Mac mini sobre un escritorio ordenado, vista cenital",
    blocks: [
      {
        n: "01",
        label: "Triaje de correo",
        title: "Despierta con la bandeja de entrada ordenada.",
        body: "Por la noche, tu IA lee cada correo, los ordena por prioridad, resume el resto y redacta borradores de respuesta para los mensajes rutinarios. Te despiertas con un informe de 3 minutos en lugar de un caos de 90.",
        bullets: [
          "Las 3 prioridades principales, arriba",
          "Respuestas rutinarias ya redactadas",
          "Ruido archivado automáticamente con registro de auditoría",
        ],
      },
      {
        n: "02",
        label: "Preparación de agenda",
        title: "Llega preparado a cada reunión.",
        body: "15 minutos antes de cada reunión externa, tu IA te entrega un informe: datos de la empresa, correos recientes con los asistentes, notas de preparación y una pregunta de apertura sugerida.",
        bullets: [
          "Investigación automática de asistentes externos",
          "Comunicación reciente incluida",
          "Preparación específica según el tipo de reunión",
        ],
      },
      {
        n: "03",
        label: "Preguntas a documentos",
        title: "Pregúntale lo que sea a tus archivos.",
        body: "Conecta Drive, Dropbox, OneDrive o carpetas locales. Luego pregunta en lenguaje normal: '¿Qué dice el contrato de Acme sobre la cancelación?' Respuesta en 2 segundos, con la fuente.",
        bullets: [
          "Funciona con PDF, Word, Pages, texto plano",
          "Respuestas con fuente y enlace directo",
          "Indexación local en el plan Jarvis",
        ],
      },
    ],
  },

  how: {
    kicker: "Cómo funciona",
    headline: { before: "Del pedido a la ", emphasis: "IA en marcha", after: " en 5 días." },
    note: "Sin equipo de TI",
    steps: [
      { n: "01", t: "Pide", d: "Elige un paquete o haz la entrevista de 5 min. Paga con Stripe." },
      { n: "02", t: "Configuramos", d: "4 horas de configuración por dispositivo. Skills instaladas, cuentas conectadas, probado." },
      { n: "03", t: "Entrega", d: "PostNL/DHL con seguimiento. Recibes un Mac mini, una tarjeta de bienvenida y un enlace de configuración." },
      { n: "04", t: "Enchufa y listo", d: "Zoom de 30 min con Robbie. Hacemos juntos el primer inicio de sesión. Día 1: funciona." },
    ],
  },

  packages: {
    kicker: "Paquetes",
    headline: { before: "Tres planes. ", emphasis: "Una promesa:", after: " funciona nada más sacarlo de la caja." },
    body: "Elige el que encaje. Amplía más adelante cuando se te quede corto.",
    mostChosen: "El más elegido",
    fromPrice: "desde",
    footnote:
      "→ Todos los paquetes incluyen propiedad del hardware de por vida. Sin suscripciones. Garantía de devolución de 30 días. ¿Ya tienes un Mac mini? Lo hacemos todo 100% en remoto — indícalo en tu pedido y descontamos el coste del hardware.",
    tiers: {
      basic: {
        tagline: "Para el 90% de las pequeñas empresas",
        priceNote: "pago único · incl. Mac mini · sin IVA",
        hardware: "Mac mini M4 · 16GB",
        features: [
          "Mac mini preconfigurado",
          "Triaje de correo e informe matinal",
          "Preparación de agenda con contexto",
          "Preguntas a documentos",
          "IA en la nube (tu propia clave de Claude/OpenAI)",
          "Entrega en 5 días · onboarding de 30 min",
        ],
        cta: "Pedir Basic",
      },
      custom: {
        tagline: "Configurado en una charla de 5 min",
        priceNote: "pago único · sin IVA",
        hardware: "Mac mini M4 · 24–48GB",
        features: [
          "Todo lo de Basic, y además:",
          "Entrevista de IA de 5 min para mapear tu flujo de trabajo",
          "2–4 skills adaptadas a tu trabajo",
          "Nube, local o híbrido",
          "Integraciones a medida (CRM, DMS, etc.)",
          "Entrega en 2 semanas",
        ],
        cta: "Empezar entrevista",
      },
      jarvis: {
        tagline: "Plan superior · 100% local · defendible ante el RGPD",
        priceNote: "pago único · incl. Mac mini Pro · sin IVA",
        hardware: "Mac mini M4 Pro · 48GB",
        features: [
          "Todo lo de Custom, y además:",
          "IA 100% local (Qwen 2.5 14B vía MLX)",
          "Ningún dato sale de tu dispositivo",
          "Whisper para voz/audio",
          "Para abogados, médicos, contables",
          "Entrega prioritaria (5–7 días)",
        ],
        cta: "Pedir Jarvis",
      },
    },
  },

  support: {
    kicker: "Soporte",
    headline: { before: "Opcional. ", emphasis: "No obligatorio.", after: "" },
    body: "Eres propietario del hardware. Añade soporte si quieres una red de seguridad. 2 meses gratis con pago anual.",
    monthly: "Mensual",
    yearly: "Anual",
    yearlyBadge: "-17%",
    perYear: " /año",
    perMonth: " /mes",
    tiers: [
      { id: "free", name: "Free", features: ["Soporte por correo 48h", "Documentación online", "Actualizaciones de skills", "Autoservicio"] },
      {
        id: "basic",
        name: "Basic",
        features: ["Soporte por correo 24h en días laborables", "Teléfono 9–17", "Resolución de problemas en remoto", "Ajustes de skills incluidos"],
      },
      {
        id: "premium",
        name: "Premium",
        features: [
          "Soporte humano 24/7",
          "Respuesta en 4h, fines de semana incluidos",
          "Cambio de hardware en 24h",
          "Llamada de revisión mensual",
        ],
      },
    ],
  },

  founder: {
    imgAlt: "El Mac mini de ReadyClaw en la mano — lo bastante pequeño para llevarlo contigo",
    nameTag: "Robbie — ReadyClaw",
    roleTag: "Fundador",
    kicker: "Del fundador",
    quote: "«Creé esto porque estaba cansado de ver a gente inteligente perder frente a la IA.»",
    paragraphs: [
      "Hace tres meses estaba peleándome con claves de API, flujos de n8n e ingeniería de prompts — y soy técnico. Pensé: si esto ya me cuesta a mí, ¿cómo va a conseguir ponerlo en marcha un empresario normal?",
      "La respuesta: no lo hacen. Se quedan atascados en ChatGPT y nunca pasan de ahí. Mientras tanto, la IA sigue avanzando sin ellos.",
      "ReadyClaw es la respuesta que ojalá hubiera existido. Un Mac mini, preconfigurado. Enchufa. Inicia sesión. Listo. Sin suscripciones, sin consultores, sin curva de aprendizaje.",
      "¿Suena a lo que estabas esperando? Hablemos.",
    ],
    signature: "— Robbie, Fundador",
    cta: "Reserva una demo de 15 min",
    waMessage: "¡Hola Robbie! Me gustaría reservar una demo de 15 min.",
  },

  faq: {
    kicker: "FAQ",
    headline: { before: "Preguntas, ", emphasis: "resueltas.", after: "" },
    items: [
      {
        q: "¿Por qué 899 € si ChatGPT cuesta 20 €/mes?",
        a: "ChatGPT es una ventana de chat. ReadyClaw es un sistema en marcha que gestiona el triaje de correo, la preparación de agenda y las preguntas a documentos automáticamente en segundo plano. Compras una configuración que funciona, no una suscripción.",
      },
      {
        q: "¿Y si puedo hacerlo yo mismo?",
        a: "Probablemente puedas. Te costará más de 200 horas de aprendizaje además del mantenimiento continuo. Nosotros ya hemos hecho ese trabajo. Estás recuperando tiempo.",
      },
      {
        q: "¿Están seguros mis datos?",
        a: "En el plan Jarvis nada sale de tu dispositivo — IA totalmente local. En Basic/Custom los datos pasan por tu propia cuenta de Claude/OpenAI, no por nosotros. Nunca vemos tu contenido.",
      },
      {
        q: "¿Y si algo se estropea?",
        a: "Garantía de Apple en el hardware. Con el soporte Premium enviamos un reemplazo en 24h. Tus datos están en una copia de seguridad cifrada.",
      },
      {
        q: "¿Y si cerráis el negocio?",
        a: "El Mac mini es tuyo. Las skills funcionan en local o a través de tus propias cuentas. Sin dependencia de proveedor. En el peor de los casos: tienes un Mac mini que funciona y que puedes mantener tú mismo.",
      },
      {
        q: "¿Necesito conocimientos de informática?",
        a: "Si sabes configurar un iPhone, sabes hacer esto. La llamada de onboarding de 30 min lo hace todo contigo.",
      },
      {
        q: "¿Puedo ampliar o añadir skills más adelante?",
        a: "Sí. Pasar de Basic a Custom es una ampliación en remoto. Añadir skills cuesta entre 150 € y 400 € cada una según la complejidad.",
      },
      {
        q: "¿Devolución en 30 días?",
        a: "Sí. ¿No te funciona? Devuélvelo, reembolso completo. Sin letra pequeña.",
      },
    ],
  },

  finalCta: {
    kicker: "¿Listo para empezar?",
    headline: { before: "Enchufa. Inicia sesión. ", emphasis: "Listo.", after: "" },
    body: "Haz tus preguntas o pide directamente. Sin compromiso — siempre escribimos primero y te ayudamos a pensar qué encaja con tu trabajo.",
    ctaPackage: "Elige tu paquete",
    ctaWhatsApp: "Envía un WhatsApp",
    waMessage:
      "¡Hola ReadyClaw! Me interesa un empleado de IA preconfigurado en un Mac mini. ¿Podéis contarme más?",
  },

  footer: {
    tagline: "Empleado de IA, listo para usar.",
    productHeading: "Producto",
    infoHeading: "Info",
    contactHeading: "Contacto",
    productLinks: [
      { href: "#what", label: "Qué hace" },
      { href: "#packages", label: "Paquetes" },
      { href: "#how", label: "Cómo funciona" },
      { href: "#support", label: "Soporte" },
    ],
    infoLinks: [
      { href: "#faq", label: "FAQ" },
      { href: "#packages", label: "Contacto" },
    ],
    whatsApp: "WhatsApp",
    waMessage: "¡Hola ReadyClaw! Tengo una pregunta.",
    country: "Países Bajos",
    copyright: "© 2026 ReadyClaw",
    closer: "Enchufa. Inicia sesión. Listo.",
  },

  order: {
    tierLabels: {
      basic: "Basic — €899",
      custom: "Custom — desde €1.199",
      jarvis: "Jarvis — €2.499",
    },
    titlePrefix: "Pedir ",
    doneTitle: "Pedido recibido",
    doneDescription: "Te contactamos en menos de 24h.",
    formDescription: "Rellena tus datos. Sin compromiso — escribimos primero.",
    doneHint: "Revisa tu bandeja de entrada para la confirmación",
    fieldName: "Nombre",
    fieldEmail: "Email",
    fieldPhone: "Teléfono (opcional)",
    fieldHasMac: "¿Ya tienes un Mac mini?",
    fieldMode: "¿En local o en la nube?",
    fieldNotes: "Notas",
    hasMacOptions: [
      { v: "No", l: "No" },
      { v: "Sí, solo configuración remota", l: "Sí, solo configuración remota" },
      { v: "No lo sé", l: "No lo sé" },
    ],
    modeOptions: [
      { v: "Local", l: "Local" },
      { v: "Nube", l: "Nube" },
      { v: "Híbrido", l: "Híbrido" },
      { v: "No lo sé", l: "No lo sé" },
    ],
    submit: "Enviar pedido →",
    submitting: "Enviando…",
    whatsAppCta: "Mejor por WhatsApp",
    waMessagePrefix: "¡Hola ReadyClaw! Quiero pedir ",
    waMessageSuffix: ".",
    waMessageFallback: "un paquete",
    errors: {
      nameRequired: "El nombre es obligatorio",
      emailInvalid: "Dirección de email no válida",
      validation: "Error de validación",
      notConfigured:
        "Los pedidos aún no están conectados. Contáctanos por WhatsApp o con el formulario de abajo.",
      generic: "Algo salió mal. Inténtalo de nuevo o envíanos un WhatsApp.",
      unknown: "Error desconocido",
    },
    emailSubjectPrefix: "Nuevo pedido de ReadyClaw — ",
  },
};
