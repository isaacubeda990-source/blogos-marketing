export default function LandingPage() {
  const APP_URL = "https://blogos-mu.vercel.app";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', -apple-system, sans-serif;
          background: #07070f;
          color: #f1f5f9;
          overflow-x: hidden;
        }

        .grad { background: linear-gradient(135deg, #7c3aed, #06b6d4); }
        .grad-text {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:.9} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }

        .anim-pulse { animation: pulse 4s ease-in-out infinite; }
        .anim-up { animation: fadeUp .7s ease-out both; }
        .anim-up-1 { animation: fadeUp .7s .15s ease-out both; }
        .anim-up-2 { animation: fadeUp .7s .3s ease-out both; }
        .anim-up-3 { animation: fadeUp .7s .45s ease-out both; }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          backdrop-filter: blur(12px); background: rgba(7,7,15,.85);
          border-bottom: 1px solid #1a1a2e;
        }
        .nav-inner {
          max-width: 1100px; margin: 0 auto; padding: 0 24px;
          height: 64px; display: flex; align-items: center; justify-content: space-between;
        }
        .logo { font-size: 1.25rem; font-weight: 800; }
        .nav-links { display: flex; gap: 32px; }
        .nav-links a {
          color: #94a3b8; text-decoration: none; font-size: .9rem;
          transition: color .2s;
        }
        .nav-links a:hover { color: #fff; }
        .btn-primary {
          display: inline-block; padding: 10px 20px; border-radius: 10px;
          font-weight: 700; font-size: .9rem; cursor: pointer; text-decoration: none;
          color: #fff; transition: opacity .2s;
        }
        .btn-primary:hover { opacity: .88; }
        .btn-outline {
          display: inline-block; padding: 14px 32px; border-radius: 12px;
          font-weight: 600; font-size: 1rem; cursor: pointer; text-decoration: none;
          border: 1px solid #252540; color: #94a3b8; transition: all .2s;
        }
        .btn-outline:hover { border-color: rgba(124,58,237,.5); color: #fff; }
        .btn-big {
          display: inline-block; padding: 18px 42px; border-radius: 16px;
          font-weight: 800; font-size: 1.1rem; cursor: pointer; text-decoration: none;
          color: #fff; transition: opacity .2s;
          box-shadow: 0 0 40px rgba(124,58,237,.3);
        }
        .btn-big:hover { opacity: .88; }

        section { padding: 80px 24px; }
        .container { max-width: 1100px; margin: 0 auto; }
        .container-sm { max-width: 820px; margin: 0 auto; }
        .container-xs { max-width: 680px; margin: 0 auto; }

        .hero { padding: 140px 24px 96px; text-align: center; position: relative; }
        .hero-glow {
          position: absolute; border-radius: 50%; pointer-events: none;
        }
        .hero-glow-1 {
          width: 600px; height: 600px; top: 0; left: 50%; transform: translateX(-50%);
          background: rgba(124,58,237,.08); filter: blur(100px);
        }
        .hero-glow-2 {
          width: 300px; height: 300px; top: 120px; left: 20%;
          background: rgba(6,182,212,.07); filter: blur(80px);
        }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 16px; border-radius: 100px;
          border: 1px solid rgba(124,58,237,.4);
          background: rgba(124,58,237,.1);
          font-size: .85rem; color: #a78bfa; margin-bottom: 32px;
        }
        .badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #7c3aed;
        }

        h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; line-height: 1.1; margin-bottom: 24px; }
        h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.2; }
        .hero-sub {
          font-size: 1.15rem; color: #94a3b8; max-width: 600px;
          margin: 0 auto 40px; line-height: 1.7;
        }
        .hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 24px; }
        .hero-note { font-size: .85rem; color: #475569; }

        .metrics {
          background: #0f0f1a;
          border-top: 1px solid #1a1a2e;
          border-bottom: 1px solid #1a1a2e;
          padding: 56px 24px;
        }
        .metrics-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 32px; text-align: center; max-width: 900px; margin: 0 auto;
        }
        .metric-val { font-size: 2.5rem; font-weight: 900; margin-bottom: 6px; }
        .metric-label { font-size: .85rem; color: #64748b; }

        .section-header { text-align: center; margin-bottom: 56px; }
        .section-sub { color: #64748b; font-size: 1.05rem; margin-top: 12px; }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .card {
          padding: 24px; border-radius: 20px;
          border: 1px solid #1a1a2e; background: #0f0f1a;
          transition: border-color .2s, transform .2s;
        }
        .card:hover { border-color: rgba(124,58,237,.4); transform: translateY(-4px); }
        .card-icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin-bottom: 16px;
        }
        .card h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
        .card p { font-size: .875rem; color: #64748b; line-height: 1.65; }

        .steps-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .step-card {
          display: flex; gap: 20px; padding: 24px;
          border-radius: 20px; border: 1px solid #1a1a2e;
          background: #07070f; transition: border-color .2s;
        }
        .step-card:hover { border-color: rgba(124,58,237,.3); }
        .step-num { font-size: 2.5rem; font-weight: 900; flex-shrink: 0; width: 48px; }
        .step-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 6px; }
        .step-card p { font-size: .875rem; color: #64748b; line-height: 1.6; }

        .timeline { position: relative; }
        .tl-line {
          position: absolute; left: 20px; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, #7c3aed, #06b6d4);
          opacity: .25;
        }
        .tl-item {
          display: flex; align-items: center; gap: 32px;
          margin-bottom: 48px; padding-left: 52px; position: relative;
        }
        .tl-dot {
          position: absolute; left: 12px;
          width: 16px; height: 16px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          flex-shrink: 0;
        }
        .tl-card {
          padding: 20px 24px; border-radius: 16px;
          border: 1px solid #1a1a2e; background: #0f0f1a;
          max-width: 440px;
        }
        .tl-month { font-size: .75rem; font-weight: 700; color: #7c3aed; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 6px; }
        .tl-title { font-weight: 700; margin-bottom: 4px; }
        .tl-detail { font-size: .875rem; color: #64748b; }

        .pricing-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px; max-width: 780px; margin: 0 auto;
        }
        .plan {
          padding: 36px; border-radius: 24px;
          border: 1px solid #1a1a2e; background: #07070f;
          position: relative;
        }
        .plan-pro {
          border-color: rgba(124,58,237,.55);
          background: linear-gradient(160deg, rgba(124,58,237,.1), rgba(6,182,212,.04));
          box-shadow: 0 0 50px rgba(124,58,237,.18);
        }
        .plan-badge {
          position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
          padding: 4px 16px; border-radius: 100px;
          font-size: .75rem; font-weight: 700; color: #fff;
        }
        .plan-name { font-size: .85rem; font-weight: 600; color: #94a3b8; margin-bottom: 4px; }
        .plan-price { font-size: 3.5rem; font-weight: 900; line-height: 1; }
        .plan-period { color: #64748b; font-size: .9rem; }
        .plan-features { list-style: none; margin: 28px 0; display: flex; flex-direction: column; gap: 12px; }
        .plan-features li { display: flex; align-items: center; gap: 10px; font-size: .9rem; }
        .check { color: #10b981; font-weight: 700; flex-shrink: 0; }
        .feat-text { color: #94a3b8; }
        .plan-cta {
          display: block; width: 100%; padding: 14px;
          border-radius: 12px; font-weight: 700; font-size: 1rem;
          text-align: center; text-decoration: none; transition: all .2s;
          cursor: pointer;
        }
        .cta-outline {
          border: 1px solid #7c3aed; color: #7c3aed; background: transparent;
        }
        .cta-outline:hover { background: #7c3aed; color: #fff; }
        .cta-grad { color: #fff; }
        .cta-grad:hover { opacity: .88; }

        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          padding: 24px; border-radius: 16px;
          border: 1px solid #1a1a2e; background: #0f0f1a;
          transition: border-color .2s;
        }
        .faq-item:hover { border-color: rgba(124,58,237,.3); }
        .faq-q { font-weight: 600; margin-bottom: 10px; }
        .faq-a { font-size: .875rem; color: #64748b; line-height: 1.65; }

        .cta-section {
          text-align: center; padding: 100px 24px;
          background: radial-gradient(ellipse at center, rgba(124,58,237,.06) 0%, transparent 70%);
        }
        .cta-title { font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900; margin-bottom: 20px; }
        .cta-sub { color: #64748b; font-size: 1.05rem; max-width: 520px; margin: 0 auto 40px; line-height: 1.7; }
        .cta-note { font-size: .85rem; color: #475569; margin-top: 16px; }

        footer {
          border-top: 1px solid #1a1a2e; padding: 40px 24px;
        }
        .footer-inner {
          max-width: 1100px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; font-size: .875rem; color: #475569;
        }
        footer a { color: #7c3aed; text-decoration: none; }
        footer a:hover { color: #a78bfa; }

        @media (max-width: 640px) {
          .nav-links { display: none; }
          .tl-item { padding-left: 44px; }
          .hero-cta { flex-direction: column; align-items: center; }
          .btn-outline { width: 100%; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <span className="logo grad-text">BlogOS</span>
          <div className="nav-links">
            <a href="#features">Funciones</a>
            <a href="#how">Cómo funciona</a>
            <a href="#pricing">Precios</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
             className="btn-primary grad">
            Abrir app →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-glow hero-glow-1 anim-pulse" />
        <div className="hero-glow hero-glow-2 anim-pulse" />
        <div style={{position:'relative'}}>
          <div className="badge anim-up">
            <span className="badge-dot anim-pulse" />
            Agente de IA para creadores de contenido en LATAM
          </div>
          <h1 className="anim-up-1">
            Construye un blog que<br />
            <span className="grad-text">genera ingresos</span>
          </h1>
          <p className="hero-sub anim-up-2">
            BlogOS convierte tu conocimiento en un negocio digital.
            Ideas, artículos, SEO, calendario y monetización —
            todo con IA, todo en español, todo en un lugar.
          </p>
          <div className="hero-cta anim-up-3">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
               className="btn-big grad">
              Empezar gratis — sin tarjeta
            </a>
            <a href="#how" className="btn-outline">Ver cómo funciona ↓</a>
          </div>
          <p className="hero-note">12 módulos · IA con Claude Opus · 100% en español</p>
        </div>
      </div>

      {/* METRICS */}
      <div className="metrics">
        <div className="metrics-grid">
          {[
            {val:"8", label:"ideas por sesión"},
            {val:"6", label:"secciones por artículo"},
            {val:"90", label:"días a primeros ingresos"},
            {val:"5K+", label:"visitas/mes en 6 meses"},
          ].map(m => (
            <div key={m.label}>
              <div className="metric-val grad-text">{m.val}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <div className="section-header">
            <h2>Todo lo que necesitas para <span className="grad-text">dominar tu nicho</span></h2>
            <p className="section-sub">No es un editor de texto. Es un sistema completo para construir autoridad, audiencia e ingresos.</p>
          </div>
          <div className="features-grid">
            {[
              {icon:"💡", color:"#7c3aed", title:"Generador de Ideas", desc:"8 ideas por sesión basadas en tu nicho, audiencia y tendencias. Nunca más te quedes sin qué escribir."},
              {icon:"📝", color:"#06b6d4", title:"Constructor de Artículos", desc:"Metodología de 6 secciones: gancho, contexto, cuerpo, ejemplos, reflexión y CTA. Artículos que retienen lectores."},
              {icon:"🔍", color:"#10b981", title:"Análisis SEO", desc:"Score en tiempo real, meta descriptions, keywords y títulos alternativos. Posiciona en Google desde el primer artículo."},
              {icon:"🧠", color:"#f59e0b", title:"Preguntas Reflexivas", desc:"Sesiones guiadas por IA para desbloquear perspectivas únicas. Tu experiencia personal es tu mayor diferenciador."},
              {icon:"📅", color:"#7c3aed", title:"Calendario Editorial", desc:"Planificación mensual con vista kanban. 2-3 artículos por semana con sistema de estados: idea → publicado."},
              {icon:"💰", color:"#06b6d4", title:"Guía de Monetización", desc:"6 modelos de ingresos con plan de acción: afiliados, productos digitales, membresías, sponsors y más."},
            ].map(f => (
              <div key={f.title} className="card">
                <div className="card-icon" style={{background:`${f.color}20`, border:`1px solid ${f.color}40`}}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{background:'#0f0f1a', borderTop:'1px solid #1a1a2e', borderBottom:'1px solid #1a1a2e'}}>
        <div className="container">
          <div className="section-header">
            <h2>De cero a ingresos en <span className="grad-text">4 pasos</span></h2>
            <p className="section-sub">Sistema probado. Resultados predecibles.</p>
          </div>
          <div className="steps-grid">
            {[
              {n:"01", title:"Define tu nicho", desc:"En 5 minutos configuras tu perfil: nicho, audiencia, estilo de escritura y meta de ingresos."},
              {n:"02", title:"Genera ideas con IA", desc:"BlogOS crea ideas personalizadas con gancho, tipo de contenido y potencial de monetización."},
              {n:"03", title:"Escribe con estructura", desc:"El constructor guía sección por sección. La IA genera el borrador, tú lo perfeccionas."},
              {n:"04", title:"Optimiza y publica", desc:"SEO automático, calendario editorial y distribución omnicanal. Cada artículo trabaja 24/7."},
            ].map(s => (
              <div key={s.n} className="step-card">
                <div className="step-num grad-text">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section>
        <div className="container-sm">
          <div className="section-header">
            <h2>Tu blog en <span className="grad-text">12 meses</span></h2>
            <p className="section-sub">Metas realistas con sistema. No con suerte.</p>
          </div>
          <div className="timeline">
            <div className="tl-line" />
            {[
              {month:"Mes 1–2", title:"Base sólida", detail:"10 artículos fundacionales · 100 suscriptores de email"},
              {month:"Mes 3", title:"1,500 visitas/mes", detail:"300 suscriptores · Primeros ingresos por afiliados"},
              {month:"Mes 6", title:"5,000 visitas/mes", detail:"1,000 suscriptores · $500+/mes recurrentes"},
              {month:"Mes 12", title:"15,000 visitas/mes", detail:"3,000 suscriptores · $2,000+/mes · autoridad en tu nicho"},
            ].map(t => (
              <div key={t.month} className="tl-item">
                <div className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-month">{t.month}</div>
                  <div className="tl-title">{t.title}</div>
                  <div className="tl-detail">{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{background:'#0f0f1a', borderTop:'1px solid #1a1a2e', borderBottom:'1px solid #1a1a2e'}}>
        <div className="container">
          <div className="section-header">
            <h2>Precio <span className="grad-text">justo y directo</span></h2>
            <p className="section-sub">Empieza gratis. Escala cuando tengas resultados.</p>
          </div>
          <div className="pricing-grid">
            {/* FREE */}
            <div className="plan">
              <div className="plan-name">Gratis</div>
              <div style={{display:'flex', alignItems:'baseline', gap:6, marginBottom:24}}>
                <span className="plan-price">$0</span>
                <span className="plan-period">para siempre</span>
              </div>
              <ul className="plan-features">
                {["Generador de ideas (modo demo)", "Constructor de artículos", "Calendario editorial", "Guía de monetización", "Sin tarjeta de crédito"].map(f => (
                  <li key={f}><span className="check">✓</span><span className="feat-text">{f}</span></li>
                ))}
              </ul>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="plan-cta cta-outline">
                Empezar gratis
              </a>
            </div>

            {/* PRO */}
            <div className="plan plan-pro">
              <div className="plan-badge grad">MÁS POPULAR</div>
              <div className="plan-name">Pro</div>
              <div style={{display:'flex', alignItems:'baseline', gap:6, marginBottom:24}}>
                <span className="plan-price">$19</span>
                <span className="plan-period">/ mes</span>
              </div>
              <ul className="plan-features">
                {["Todo lo del plan Gratis", "IA real con Claude Opus (sin límite)", "Análisis SEO con Google Search", "Tendencias en tiempo real", "Exportar artículos en Markdown", "Soporte prioritario"].map(f => (
                  <li key={f}><span className="check">✓</span><span className="feat-text">{f}</span></li>
                ))}
              </ul>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="plan-cta cta-grad grad">
                Probar 7 días gratis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container-xs">
          <div className="section-header">
            <h2>Preguntas <span className="grad-text">frecuentes</span></h2>
          </div>
          <div className="faq-list">
            {[
              {q:"¿Necesito experiencia previa en blogs?", a:"No. BlogOS está diseñado para creadores que empiezan desde cero. La IA te guía paso a paso en cada módulo."},
              {q:"¿Funciona para cualquier nicho?", a:"Sí. Finanzas, salud, tecnología, viajes, gastronomía, emprendimiento — BlogOS se adapta a tu contexto específico."},
              {q:"¿Cuándo veré mis primeros ingresos?", a:"Con 2-3 artículos por semana, los primeros ingresos por afiliados o publicidad llegan entre los meses 3-6."},
              {q:"¿Los artículos suenan genéricos?", a:"No. BlogOS genera estructura y borrador; tú agregas tu voz y experiencia real. El resultado suena humano porque lo es."},
              {q:"¿Qué pasa si no tengo API key de Anthropic?", a:"La app funciona en modo demo con datos ricos y contextuales. Puedes agregar tu key en cualquier momento desde Configuración."},
            ].map(f => (
              <div key={f.q} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="cta-section">
        <h2 className="cta-title">Tu blog empieza <span className="grad-text">hoy</span></h2>
        <p className="cta-sub">
          Cada día que esperas es un artículo que no posiciona,
          un lector que no encuentra tu contenido,
          un ingreso que no llega.
        </p>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer"
           className="btn-big grad">
          Empezar gratis ahora →
        </a>
        <p className="cta-note">Sin tarjeta · 5 minutos de setup · Primer artículo hoy</p>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <span className="logo grad-text">BlogOS</span>
          <span>© 2026 BlogOS · Hecho para creadores en LATAM</span>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer">Abrir la app →</a>
        </div>
      </footer>
    </>
  );
}
