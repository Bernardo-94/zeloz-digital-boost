import { Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Check, Star } from "lucide-react";

export type DemoConfig = {
  brand: string;
  tagline: string;
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  about: { title: string; body: string; bullets: string[] };
  services: { title: string; items: { name: string; desc: string; price?: string }[] };
  contact: { phone: string; email: string; address: string; hours: string };
  theme: {
    bg: string;            // tailwind bg class for body
    text: string;          // tailwind text class
    accent: string;        // hex used in inline styles
    accentText: string;    // text color over accent
    surface: string;       // card bg
    border: string;        // border class
    muted: string;         // muted text
    font?: string;         // optional font-family inline
    heroImg: string;       // image url
  };
};

export function DemoSite({ c }: { c: DemoConfig }) {
  const a = c.theme.accent;
  return (
    <div className={`min-h-dvh ${c.theme.bg} ${c.theme.text}`} style={{ fontFamily: c.theme.font }}>
      {/* Demo banner */}
      <div className="sticky top-0 z-50 w-full bg-black text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <span className="truncate">
            Site demonstrativo desenvolvido pela <strong>Zeloz Devs</strong>
          </span>
          <Link to="/" className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 font-semibold hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </div>

      {/* Nav */}
      <header className={`border-b ${c.theme.border}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-lg font-black tracking-tight" style={{ color: a }}>{c.brand}</div>
            <div className={`text-xs ${c.theme.muted}`}>{c.tagline}</div>
          </div>
          <ul className={`hidden gap-7 text-sm md:flex ${c.theme.muted}`}>
            <li><a href="#sobre" className="hover:opacity-80">Sobre</a></li>
            <li><a href="#servicos" className="hover:opacity-80">Serviços</a></li>
            <li><a href="#contato" className="hover:opacity-80">Contato</a></li>
          </ul>
          <a href="#contato" className="rounded-md px-4 py-2 text-sm font-semibold" style={{ background: a, color: c.theme.accentText }}>
            {c.hero.cta}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>
            {c.hero.eyebrow}
          </span>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{c.hero.title}</h1>
          <p className={`mt-5 text-lg ${c.theme.muted}`}>{c.hero.subtitle}</p>
          <a href="#contato" className="mt-7 inline-flex rounded-md px-6 py-3 text-base font-bold shadow-md" style={{ background: a, color: c.theme.accentText }}>
            {c.hero.cta}
          </a>
          <div className={`mt-6 flex items-center gap-2 text-sm ${c.theme.muted}`}>
            <div className="flex" style={{ color: a }}>{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
            <span>Avaliação 5,0 · clientes reais</span>
          </div>
        </div>
        <div className={`overflow-hidden rounded-2xl border ${c.theme.border} aspect-[4/3]`}>
          <img src={c.theme.heroImg} alt={c.brand} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* About */}
      <section id="sobre" className={`border-t ${c.theme.border}`}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">{c.about.title}</h2>
          <p className={`mx-auto mt-5 max-w-2xl text-lg ${c.theme.muted}`}>{c.about.body}</p>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {c.about.bullets.map(b => (
              <li key={b} className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: a }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className={`border-t ${c.theme.border} ${c.theme.surface}`}>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-black sm:text-4xl">{c.services.title}</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map(s => (
              <div key={s.name} className={`rounded-xl border ${c.theme.border} p-6`}>
                <div className="text-lg font-bold">{s.name}</div>
                <p className={`mt-2 text-sm ${c.theme.muted}`}>{s.desc}</p>
                {s.price && <div className="mt-4 text-sm font-bold" style={{ color: a }}>{s.price}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className={`border-t ${c.theme.border}`}>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black sm:text-4xl">Entre em contato</h2>
            <p className={`mt-4 ${c.theme.muted}`}>Fale agora pelo WhatsApp ou e-mail. Atendimento rápido e personalizado.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: a }} />{c.contact.phone}</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5" style={{ color: a }} />{c.contact.email}</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: a }} />{c.contact.address}</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: a }} />{c.contact.hours}</li>
            </ul>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); alert("Demo: formulário não conectado."); }} className={`rounded-2xl border ${c.theme.border} ${c.theme.surface} p-6`}>
            <label className="block text-sm font-semibold">Nome</label>
            <input className={`mt-1 w-full rounded-md border ${c.theme.border} bg-transparent px-3 py-2`} required />
            <label className="mt-4 block text-sm font-semibold">E-mail</label>
            <input type="email" className={`mt-1 w-full rounded-md border ${c.theme.border} bg-transparent px-3 py-2`} required />
            <label className="mt-4 block text-sm font-semibold">Mensagem</label>
            <textarea rows={4} className={`mt-1 w-full rounded-md border ${c.theme.border} bg-transparent px-3 py-2`} required />
            <button type="submit" className="mt-5 w-full rounded-md px-4 py-3 text-sm font-bold" style={{ background: a, color: c.theme.accentText }}>
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className={`border-t ${c.theme.border} py-8 text-center text-xs ${c.theme.muted}`}>
        © {new Date().getFullYear()} {c.brand}. Site demonstrativo criado por{" "}
        <Link to="/" className="font-semibold underline" style={{ color: a }}>Zeloz Devs</Link>.
      </footer>
    </div>
  );
}