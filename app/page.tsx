import Link from "next/link";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://blogos-mu.vercel.app";

const features = [
  {
    icon: "💡",
    title: "Generador de Ideas",
    desc: "10 ideas validadas por semana basadas en tu nicho, audiencia y tendencias reales del mercado. Nunca más te quedes en blanco.",
    color: "#7c3aed",
  },
  {
    icon: "📝",
    title: "Constructor de Artículos",
    desc: "Metodología de 6 secciones probada: gancho, contexto, cuerpo, ejemplos, reflexión y CTA. Artículos que no se abandonan a los 30 segundos.",
    color: "#06b6d4",
  },
  {
    icon: "🔍",
    title: "Análisis SEO",
    desc: "Score en tiempo real, meta descriptions optimizadas, análisis de keywords y 3 títulos alternativos. Posiciona en Google desde el primer artículo.",
    color: "#10b981",
  },
  {
    icon: "🧠",
    title: "Preguntas Reflexivas",
    desc: "Sesiones de introspección guiada por IA para desbloquear perspectivas únicas. Tu experiencia personal es tu mayor ventaja competitiva.",
    color: "#f59e0b",
  },
  {
    icon: "📅",
    title: "Calendario Editorial",
    desc: "Planificación mensual con vista kanban. De idea a publicado con sistema de estados. 2-3 artículos por semana sin estrés.",
    color: "#7c3aed",
  },
  {
    icon: "💰",
    title: "Guía de Monetización",
    desc: "6 modelos de ingresos con plan de acción paso a paso: afiliados, productos digitales, membresías, consultorías, sponsors y más.",
    color: "#06b6d4",
  },
];

const steps = [
  {
    num: "01",
    title: "Define tu nicho",
    desc: "En 5 minutos configuras tu perfil: nicho, audiencia objetivo, estilo de escritura y meta de ingresos.",
  },
  {
    num: "02",
    title: "Genera ideas con IA",
    desc: "BlogOS analiza tendencias y crea ideas personalizadas con gancho, tipo de contenido y potencial de monetización.",
  },
  {
    num: "03",
    title: "Escribe con estructura",
    desc: "El constructor guía sección por sección. La IA genera el contenido, tú lo perfeccionas con tu voz y experiencia.",
  },
  {
    num: "04",
    title: "Optimiza y publica",
    desc: "Análisis SEO automático, calendario editorial y distribución omnicanal. Cada artículo trabaja 24/7 para ti.",
  },
];

const metrics = [
  { value: "8", label: "ideas por sesión", suffix: "" },
  { value: "6", label: "secciones por artículo", suffix: "" },
  { value: "90", label: "días para primeros ingresos", suffix: "" },
  { value: "5K+", label: "visitas/mes en 6 meses", suffix: "" },
];

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "para siempre",
    highlight: false,
    features: [
      "Generador de ideas (modo demo)",
      "Constructor de artículos básico",
      "Calendario editorial",
      "Guía de monetización",
      "Sin tarjeta de crédito",
    ],
    cta: "Empezar gratis",
    ctaStyle: "border border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mes",
    highlight: true,
    features: [
      "Todo lo del plan Gratis",
      "IA real con Claude Opus (ilimitado)",
      "Análisis SEO con Google Search",
      "Tendencias en tiempo real",
      "Descarga artículos en Markdown",
      "Soporte prioritario",
    ],
    cta: "Empezar prueba de 7 días",
    ctaStyle: "bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white hover:opacity-90",
  },
];

const faqs = [
  {
    q: "¿Necesito experiencia previa en blogs?",
    a: "No. BlogOS está diseñado para creadores que empiezan desde cero. La IA te guía en cada paso del proceso.",
  },
  {
    q: "¿Funciona para cualquier nicho?",
    a: "Sí. Finanzas, salud, tecnología, viajes, gastronomía, emprendimiento... BlogOS se adapta a tu contexto específico.",
  },
  {
    q: "¿Cuándo veré mis primeros ingresos?",
    a: "Con 2-3 artículos por semana, los primeros ingresos por afiliados o publicidad llegan entre los meses 3-6.",
  },
  {
    q: "¿Los artículos generados suenan genéricos?",
    a: "No. BlogOS genera estructura y borrador, pero tú agregas tu experiencia y voz. El resultado suena humano porque lo es.",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#07070f] text-[#f1f5f9] overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[#1a1a2e] bg-[#07070f]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold gradient-text">BlogOS</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#94a3b8]">
            <a href="#features" className="hover:text-white transition-colors">Funciones</a>
            <a href="#how" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Abrir app →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[120px] pulse-slow pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[300px] h-[300px] bg-[#06b6d4]/10 rounded-full blur-[80px] pulse-slow pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-sm text-[#a78bfa] mb-8 fade-up">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] pulse-slow" />
            Agente de IA para creadores de contenido en LATAM
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 fade-up-delay-1">
            Construye un blog que<br />
            <span className="gradient-text">genera ingresos</span>
          </h1>

          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 fade-up-delay-2">
            BlogOS convierte tu conocimiento en un negocio digital.
            Ideas, artículos, SEO, calendario y monetización — todo con IA,
            todo en español, todo en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up-delay-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-bold text-lg hover:opacity-90 transition-opacity glow-purple"
            >
              Empezar gratis — sin tarjeta
            </a>
            <a
              href="#how"
              className="px-8 py-4 rounded-xl border border-[#1a1a2e] text-[#94a3b8] hover:border-[#7c3aed]/50 hover:text-white transition-all"
            >
              Ver cómo funciona ↓
            </a>
          </div>

          <p className="text-sm text-[#475569] mt-6">
            Más de 12 módulos · IA real con Claude Opus · 100% en español
          </p>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="py-16 border-y border-[#1a1a2e] bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-4xl font-extrabold gradient-text mb-1">
                {m.value}{m.suffix}
              </div>
              <div className="text-sm text-[#64748b]">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Todo lo que necesitas para{" "}
              <span className="gradient-text">dominar tu nicho</span>
            </h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto">
              No es un editor de texto. Es un sistema completo para construir
              autoridad, audiencia e ingresos con tu blog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl border border-[#1a1a2e] bg-[#0f0f1a] hover:border-[#7c3aed]/40 transition-all hover:-translate-y-1 duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${f.color}22`, border: `1px solid ${f.color}44` }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-24 px-6 bg-[#0f0f1a] border-y border-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              De cero a ingresos en{" "}
              <span className="gradient-text">4 pasos</span>
            </h2>
            <p className="text-[#64748b] text-lg">
              Sistema probado. Resultados predecibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="flex gap-5 p-6 rounded-2xl border border-[#1a1a2e] bg-[#07070f] hover:border-[#7c3aed]/30 transition-all"
              >
                <div className="text-4xl font-extrabold gradient-text shrink-0 w-12">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-[#64748b] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP / KPIs ── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tu blog en{" "}
              <span className="gradient-text">12 meses</span>
            </h2>
            <p className="text-[#64748b] text-lg">
              Metas realistas con sistema. No con suerte.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] to-[#06b6d4] ml-5 md:ml-0 opacity-30" />

            {[
              { month: "Mes 1-2", visits: "Base sólida", subs: "100 suscriptores", rev: "Primeras relaciones", side: "left" },
              { month: "Mes 3", visits: "1,500 visitas/mes", subs: "300 suscriptores", rev: "Primeros ingresos", side: "right" },
              { month: "Mes 6", visits: "5,000 visitas/mes", subs: "1,000 suscriptores", rev: "$500+/mes", side: "left" },
              { month: "Mes 12", visits: "15,000 visitas/mes", subs: "3,000 suscriptores", rev: "$2,000+/mes", side: "right" },
            ].map((item) => (
              <div
                key={item.month}
                className={`relative flex items-center mb-10 md:mb-16 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] -translate-x-1/2 z-10" />
                <div
                  className={`ml-14 md:ml-0 md:w-5/12 p-5 rounded-2xl border border-[#1a1a2e] bg-[#0f0f1a] ${
                    item.side === "right" ? "md:mr-auto md:ml-auto" : "md:ml-auto md:mr-auto"
                  }`}
                >
                  <div className="text-xs font-bold text-[#7c3aed] uppercase tracking-wider mb-2">
                    {item.month}
                  </div>
                  <div className="font-semibold mb-1">{item.visits}</div>
                  <div className="text-sm text-[#64748b]">{item.subs} · {item.rev}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-[#0f0f1a] border-y border-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Precio <span className="gradient-text">justo y directo</span>
            </h2>
            <p className="text-[#64748b] text-lg">
              Empieza gratis. Escala cuando tengas resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl border ${
                  plan.highlight
                    ? "border-[#7c3aed]/60 bg-gradient-to-b from-[#7c3aed]/10 to-[#06b6d4]/5 glow-purple"
                    : "border-[#1a1a2e] bg-[#07070f]"
                } relative`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-xs font-bold text-white">
                    MÁS POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-[#94a3b8] mb-1">{plan.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-[#64748b]">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="text-[#10b981] shrink-0">✓</span>
                      <span className="text-[#94a3b8]">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Preguntas <span className="gradient-text">frecuentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl border border-[#1a1a2e] bg-[#0f0f1a] hover:border-[#7c3aed]/30 transition-all"
              >
                <h3 className="font-semibold mb-3">{faq.q}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Tu blog empieza{" "}
            <span className="gradient-text">hoy</span>
          </h2>
          <p className="text-[#64748b] text-lg mb-10">
            Cada día que esperas es un artículo que no posiciona,
            un lector que no encuentra tu contenido,
            un ingreso que no llega.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] text-white font-bold text-xl hover:opacity-90 transition-opacity glow-purple"
          >
            Empezar gratis ahora →
          </a>
          <p className="text-sm text-[#475569] mt-4">
            Sin tarjeta de crédito · Configuración en 5 minutos · Primer artículo hoy
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1a1a2e] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#475569]">
          <span className="font-bold gradient-text text-base">BlogOS</span>
          <span>© 2026 BlogOS · Hecho para creadores en LATAM</span>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7c3aed] hover:text-[#a78bfa] transition-colors"
          >
            Abrir la app →
          </a>
        </div>
      </footer>

    </main>
  );
}
