import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft, MapPin, Phone, Mail, Clock, Check, Star, ArrowRight,
  Quote, X, Instagram, Facebook, Linkedin, MessageCircle, Sparkles,
} from "lucide-react";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
} from "@/components/ui/accordion";

export type DemoConfig = {
  brand: string;
  tagline: string;
  badges?: string[]; // small trust badges below hero CTA, e.g. ["CRM 0000", "10 anos"]
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary?: string;
  };
  about: { title: string; body: string; bullets: string[]; image?: string };
  services: {
    title: string;
    subtitle?: string;
    items: { name: string; desc: string; price?: string }[];
  };
  stats?: { value: string; label: string }[];
  steps?: { title: string; desc: string }[];
  testimonials?: { name: string; role: string; quote: string; avatar?: string }[];
  gallery?: { src: string; alt: string }[];
  faq?: { q: string; a: string }[];
  ctaBanner?: { title: string; subtitle: string; cta: string };
  contact: { phone: string; email: string; address: string; hours: string; whatsapp?: string };
  socials?: { instagram?: string; facebook?: string; linkedin?: string };
  theme: {
    register: "classic" | "premium-light" | "premium-dark";
    bg: string;
    text: string;
    accent: string;
    accentText: string;
    accentSoft?: string; // background tint for hero/sections
    surface: string;
    border: string;
    muted: string;
    titleFont?: string;
    bodyFont?: string;
    heroImg: string;
  };
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "opacity 700ms ease, transform 700ms ease",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(18px)",
      }}
    >
      {children}
    </div>
  );
}

export function DemoSite({ c }: { c: DemoConfig }) {
  const a = c.theme.accent;
  const isDark = c.theme.register === "premium-dark";
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waHref = c.contact.whatsapp
    ? `https://wa.me/${c.contact.whatsapp.replace(/\D/g, "")}`
    : undefined;

  return (
    <div className={`min-h-dvh ${c.theme.bg} ${c.theme.text}`} style={{ fontFamily: c.theme.bodyFont }}>
      {/* Demo banner */}
      <div className="sticky top-0 z-[60] w-full bg-black text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2">
          <span className="truncate">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Site demonstrativo desenvolvido pela <strong>Zeloz Devs</strong>
          </span>
          <Link to="/" className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-white/10 px-3 py-1 font-semibold hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>
        </div>
      </div>

      {/* Sticky header */}
      <header
        className={`sticky top-[33px] z-50 border-b transition-all ${
          scrolled ? "backdrop-blur-md shadow-sm" : ""
        } ${c.theme.border}`}
        style={{
          background: scrolled
            ? (isDark ? "rgba(15,15,15,0.85)" : "rgba(255,255,255,0.85)")
            : "transparent",
        }}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-black tracking-tight" style={{ color: a, fontFamily: c.theme.titleFont }}>{c.brand}</div>
            <div className={`text-[11px] uppercase tracking-widest ${c.theme.muted}`}>{c.tagline}</div>
          </div>
          <ul className={`hidden gap-8 text-sm md:flex ${c.theme.muted}`}>
            <li><a href="#sobre" className="hover:opacity-80">Sobre</a></li>
            <li><a href="#servicos" className="hover:opacity-80">Serviços</a></li>
            {c.gallery && <li><a href="#galeria" className="hover:opacity-80">Galeria</a></li>}
            {c.testimonials && <li><a href="#depoimentos" className="hover:opacity-80">Depoimentos</a></li>}
            {c.faq && <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>}
            <li><a href="#contato" className="hover:opacity-80">Contato</a></li>
          </ul>
          <a href={waHref ?? "#contato"} target={waHref ? "_blank" : undefined} rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-md transition hover:opacity-90"
            style={{ background: a, color: c.theme.accentText }}>
            {c.hero.cta}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {c.theme.accentSoft && (
          <div className="pointer-events-none absolute inset-0" style={{ background: c.theme.accentSoft }} />
        )}
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: a, color: a }}>
              {c.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl" style={{ fontFamily: c.theme.titleFont }}>
              {c.hero.title}
            </h1>
            <p className={`mt-6 max-w-xl text-lg ${c.theme.muted}`}>{c.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={waHref ?? "#contato"} target={waHref ? "_blank" : undefined} rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-bold shadow-lg transition hover:translate-y-[-1px]"
                style={{ background: a, color: c.theme.accentText }}>
                {c.hero.cta} <ArrowRight className="h-4 w-4" />
              </a>
              {c.hero.ctaSecondary && (
                <a href="#servicos" className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-base font-semibold ${c.theme.border}`}>
                  {c.hero.ctaSecondary}
                </a>
              )}
            </div>
            {c.badges && (
              <div className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${c.theme.muted}`}>
                {c.badges.map(b => (
                  <span key={b} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4" style={{ color: a }} /> {b}
                  </span>
                ))}
              </div>
            )}
          </Reveal>
          <Reveal delay={150}>
            <div className="relative">
              <div className={`overflow-hidden rounded-3xl border ${c.theme.border} aspect-[4/5] shadow-2xl`}>
                <img src={c.theme.heroImg} alt={c.brand} className="h-full w-full object-cover" />
              </div>
              <div className={`absolute -bottom-6 -left-6 hidden rounded-2xl border ${c.theme.border} ${c.theme.surface} p-4 shadow-xl sm:block`}>
                <div className="flex items-center gap-3">
                  <div className="flex" style={{ color: a }}>
                    {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">Avaliação 5,0</div>
                    <div className={c.theme.muted}>clientes reais</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      {c.stats && (
        <section className={`border-t ${c.theme.border} ${c.theme.surface}`}>
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {c.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <div className="text-4xl font-black" style={{ color: a, fontFamily: c.theme.titleFont }}>{s.value}</div>
                <div className={`mt-1 text-sm ${c.theme.muted}`}>{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* About */}
      <section id="sobre" className={`border-t ${c.theme.border}`}>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className={`overflow-hidden rounded-3xl border ${c.theme.border} aspect-[4/3]`}>
              <img src={c.about.image ?? c.theme.heroImg} alt={c.about.title} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Sobre nós</span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>{c.about.title}</h2>
            <p className={`mt-5 text-lg ${c.theme.muted}`}>{c.about.body}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {c.about.bullets.map(b => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: a }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className={`border-t ${c.theme.border} ${c.theme.surface}`}>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>O que oferecemos</span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>{c.services.title}</h2>
            {c.services.subtitle && <p className={`mt-4 ${c.theme.muted}`}>{c.services.subtitle}</p>}
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {c.services.items.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className={`group h-full rounded-2xl border ${c.theme.border} ${isDark ? "bg-white/5" : "bg-white"} p-7 transition hover:-translate-y-1 hover:shadow-xl`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${a}1a`, color: a }}>
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="mt-5 text-lg font-bold" style={{ fontFamily: c.theme.titleFont }}>{s.name}</div>
                  <p className={`mt-2 text-sm ${c.theme.muted}`}>{s.desc}</p>
                  {s.price && (
                    <div className="mt-5 flex items-center justify-between border-t pt-4" style={{ borderColor: `${a}22` }}>
                      <span className={`text-xs uppercase tracking-widest ${c.theme.muted}`}>A partir de</span>
                      <span className="text-lg font-black" style={{ color: a }}>{s.price}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      {c.steps && (
        <section className={`border-t ${c.theme.border}`}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Como trabalhamos</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>Processo claro do início ao fim</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {c.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className={`relative h-full rounded-2xl border ${c.theme.border} p-6`}>
                    <div className="text-5xl font-black opacity-15" style={{ color: a, fontFamily: c.theme.titleFont }}>0{i + 1}</div>
                    <div className="mt-2 text-lg font-bold" style={{ fontFamily: c.theme.titleFont }}>{s.title}</div>
                    <p className={`mt-2 text-sm ${c.theme.muted}`}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {c.gallery && (
        <section id="galeria" className={`border-t ${c.theme.border} ${c.theme.surface}`}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Galeria</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>Veja de perto</h2>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 50}>
                  <button
                    type="button"
                    onClick={() => setLightbox(g.src)}
                    className={`group block aspect-square w-full overflow-hidden rounded-2xl border ${c.theme.border}`}
                  >
                    <img src={g.src} alt={g.alt} loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {c.testimonials && (
        <section id="depoimentos" className={`border-t ${c.theme.border}`}>
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Depoimentos</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>Quem confia recomenda</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <div className={`h-full rounded-2xl border ${c.theme.border} ${isDark ? "bg-white/5" : "bg-white"} p-7 shadow-sm`}>
                    <Quote className="h-7 w-7" style={{ color: a }} />
                    <p className="mt-4 text-[15px] leading-relaxed">"{t.quote}"</p>
                    <div className="mt-6 flex items-center gap-3">
                      {t.avatar && <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full object-cover" />}
                      <div>
                        <div className="text-sm font-bold">{t.name}</div>
                        <div className={`text-xs ${c.theme.muted}`}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      {c.ctaBanner && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-14 text-center shadow-xl md:px-16"
            style={{ background: `linear-gradient(135deg, ${a}, ${a}cc)`, color: c.theme.accentText }}>
            <h3 className="text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>{c.ctaBanner.title}</h3>
            <p className="mx-auto mt-3 max-w-xl opacity-90">{c.ctaBanner.subtitle}</p>
            <a href={waHref ?? "#contato"} target={waHref ? "_blank" : undefined} rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-black/90 px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-black">
              {c.ctaBanner.cta} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      )}

      {/* FAQ */}
      {c.faq && (
        <section id="faq" className={`border-t ${c.theme.border} ${c.theme.surface}`}>
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Perguntas frequentes</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>Tire suas dúvidas</h2>
            </div>
            <Accordion type="single" collapsible className="mt-10">
              {c.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className={c.theme.border}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className={`text-[15px] leading-relaxed ${c.theme.muted}`}>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="contato" className={`border-t ${c.theme.border}`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-24">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: a }}>Fale conosco</span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{ fontFamily: c.theme.titleFont }}>Entre em contato</h2>
            <p className={`mt-4 ${c.theme.muted}`}>Atendimento rápido e personalizado. Responda em poucos minutos pelo WhatsApp.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5" style={{ color: a }} />{c.contact.phone}</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5" style={{ color: a }} />{c.contact.email}</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5" style={{ color: a }} />{c.contact.address}</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5" style={{ color: a }} />{c.contact.hours}</li>
            </ul>
            {waHref && (
              <a href={waHref} target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg hover:opacity-90">
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
            )}
          </Reveal>
          <Reveal delay={120}>
            <form onSubmit={(e) => { e.preventDefault(); alert("Demo: formulário não conectado."); }}
              className={`rounded-3xl border ${c.theme.border} ${c.theme.surface} p-7 shadow-lg`}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest">Nome</label>
                  <input className={`mt-2 w-full rounded-lg border ${c.theme.border} bg-transparent px-3 py-2.5`} required />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest">Telefone</label>
                  <input className={`mt-2 w-full rounded-lg border ${c.theme.border} bg-transparent px-3 py-2.5`} required />
                </div>
              </div>
              <label className="mt-4 block text-xs font-semibold uppercase tracking-widest">E-mail</label>
              <input type="email" className={`mt-2 w-full rounded-lg border ${c.theme.border} bg-transparent px-3 py-2.5`} required />
              <label className="mt-4 block text-xs font-semibold uppercase tracking-widest">Mensagem</label>
              <textarea rows={4} className={`mt-2 w-full rounded-lg border ${c.theme.border} bg-transparent px-3 py-2.5`} required />
              <button type="submit" className="mt-6 w-full rounded-full px-4 py-3.5 text-sm font-bold shadow-md transition hover:opacity-90"
                style={{ background: a, color: c.theme.accentText }}>
                Enviar mensagem
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${c.theme.border} ${c.theme.surface}`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="text-lg font-black" style={{ color: a, fontFamily: c.theme.titleFont }}>{c.brand}</div>
            <p className={`mt-3 max-w-sm text-sm ${c.theme.muted}`}>{c.tagline}.</p>
            {c.socials && (
              <div className="mt-5 flex gap-3">
                {c.socials.instagram && <a href={c.socials.instagram} aria-label="Instagram" className={`rounded-full border p-2 ${c.theme.border} hover:opacity-80`}><Instagram className="h-4 w-4" /></a>}
                {c.socials.facebook && <a href={c.socials.facebook} aria-label="Facebook" className={`rounded-full border p-2 ${c.theme.border} hover:opacity-80`}><Facebook className="h-4 w-4" /></a>}
                {c.socials.linkedin && <a href={c.socials.linkedin} aria-label="LinkedIn" className={`rounded-full border p-2 ${c.theme.border} hover:opacity-80`}><Linkedin className="h-4 w-4" /></a>}
              </div>
            )}
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest">Links</div>
            <ul className={`mt-4 space-y-2 text-sm ${c.theme.muted}`}>
              <li><a href="#sobre" className="hover:opacity-80">Sobre</a></li>
              <li><a href="#servicos" className="hover:opacity-80">Serviços</a></li>
              {c.faq && <li><a href="#faq" className="hover:opacity-80">FAQ</a></li>}
              <li><a href="#contato" className="hover:opacity-80">Contato</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest">Contato</div>
            <ul className={`mt-4 space-y-2 text-sm ${c.theme.muted}`}>
              <li>{c.contact.phone}</li>
              <li>{c.contact.email}</li>
              <li>{c.contact.address}</li>
            </ul>
          </div>
        </div>
        <div className={`border-t ${c.theme.border} py-5 text-center text-xs ${c.theme.muted}`}>
          © {new Date().getFullYear()} {c.brand}. Site demonstrativo criado por{" "}
          <Link to="/" className="font-semibold underline" style={{ color: a }}>Zeloz Devs</Link>.
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-6" onClick={() => setLightbox(null)}>
          <button aria-label="Fechar" className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl" />
        </div>
      )}
    </div>
  );
}