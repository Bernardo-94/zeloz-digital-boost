import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, Check, X, Star, Globe, Rocket, Search, Smartphone,
  ShieldCheck, Zap, MessageCircle, Mail, Instagram, Clock, MapPin,
  ChevronLeft, ChevronRight, Quote, Sparkles,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeloz Devs — Sites Institucionais que Geram Agendamentos" },
      { name: "description", content: "Desenvolvimento de sites institucionais de alta performance para profissionais liberais. Transformamos invisibilidade digital em autoridade e novos clientes." },
      { property: "og:title", content: "Zeloz Devs — Autoridade Digital para Profissionais" },
      { property: "og:description", content: "Sites focados em conversão e autoridade. Atendimento consultivo, sem complicação." },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUM = "5521979285677";
const WHATSAPP_DISPLAY = "(21) 97928-5677";
const waLink = (msg = "Olá! Vim pelo site e gostaria de falar com um especialista.") =>
  `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`;

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Process />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Sobre", "#sobre"], ["Serviços", "#servicos"],
    ["Diferenciais", "#diferenciais"], ["Processo", "#processo"],
    ["Depoimentos", "#depoimentos"],
  ] as const;
  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-blue)] font-black text-white">Z</div>
          <span className="text-lg font-bold tracking-tight">Zeloz Devs</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{l}</a></li>
          ))}
        </ul>
        <a href={waLink("Olá! Gostaria de solicitar um orçamento.")} target="_blank" rel="noopener noreferrer"
           className="hidden rounded-lg bg-[var(--brand-blue)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 lg:inline-flex">
          Solicitar Orçamento
        </a>
        <button onClick={() => setOpen(v => !v)} aria-label="Abrir menu" className="lg:hidden">
          <div className="flex h-9 w-9 flex-col items-center justify-center gap-1.5">
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`}/>
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "opacity-0" : ""}`}/>
            <span className={`h-0.5 w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`}/>
          </div>
        </button>
      </nav>
      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {links.map(([l, h]) => (
              <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">{l}</a></li>
            ))}
            <li>
              <a href={waLink("Olá! Gostaria de solicitar um orçamento.")} target="_blank" rel="noopener noreferrer"
                 className="mt-2 block rounded-lg bg-[var(--brand-blue)] px-4 py-2.5 text-center text-sm font-semibold text-white">
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
const slides = [
  {
    img: hero1,
    eyebrow: "Sites institucionais de alta performance",
    title: "Transformamos sua invisibilidade digital em autoridade e novos agendamentos reais.",
    sub: "Para profissionais liberais e pequenos empreendedores que buscam profissionalismo sem perder tempo com complexidade técnica.",
  },
  {
    img: hero2,
    eyebrow: "Design focado em conversão",
    title: "Um site que vende por você, 24 horas por dia.",
    sub: "Médicos, advogados, contadores e barbearias: chega de depender só do boca a boca. Construímos sua autoridade online.",
  },
  {
    img: hero3,
    eyebrow: "Atendimento consultivo",
    title: "Sem agência cara, sem complicação técnica.",
    sub: "Acompanhamos cada etapa com você. Você decide, nós entregamos um site pronto para gerar resultados.",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  const go = (d: number) => setI(v => (v + d + slides.length) % slides.length);
  const s = slides[i];
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden pt-24" style={{ background: "var(--gradient-hero)" }}>
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand-blue)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--brand-blue)] opacity-10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:py-20">
        <div key={i} className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">
            <Sparkles className="h-3.5 w-3.5" /> {s.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{s.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-glow)] ring-1 ring-white/10 transition hover:scale-[1.02]">
              Falar com Especialista
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a href="#servicos"
               className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-7 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card">
              Ver Projetos
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand-blue)]" /> Entrega em até 2 dias</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand-blue)]" /> Suporte pós-entrega</div>
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--brand-blue)]" /> Otimizado para Google</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--brand-blue)] opacity-20 blur-2xl" />
          <img key={s.img} src={s.img} alt={s.eyebrow}
               width={1536} height={1024}
               className="relative rounded-3xl border border-border shadow-2xl animate-fade-in-up" />
        </div>
      </div>

      {/* Controls */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 pb-10">
        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${i === idx ? "w-10 bg-[var(--brand-blue)]" : "w-5 bg-muted"}`}/>
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={() => go(-1)} aria-label="Slide anterior"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 backdrop-blur transition hover:bg-card">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => go(1)} aria-label="Próximo slide"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 backdrop-blur transition hover:bg-card">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About (timeline) ---------------- */
const timeline = [
  { year: "Origem", title: "A Zeloz nasce", text: "Identificamos a dor de profissionais talentosos que perdiam clientes por não terem presença online digna do seu trabalho." },
  { year: "Foco", title: "Especialização local", text: "Decidimos atuar exclusivamente com profissionais liberais e pequenos negócios. Conhecemos a fundo o que converte para esse público." },
  { year: "Método", title: "Performance + Autoridade", text: "Desenvolvemos um processo enxuto: design de alta conversão, entrega rápida e suporte humano. Nada de complicação." },
  { year: "Hoje", title: "Referência regional", text: "Profissionais que aumentaram agendamentos, fortaleceram marca e finalmente passaram a ser encontrados no Google." },
];

function About() {
  return (
    <section id="sobre" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Sobre a Zeloz Devs</span>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Tecnologia simplificada para quem entende do seu negócio.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Acreditamos que <strong className="text-foreground">todo negócio local merece um posicionamento de elite</strong>. Por isso unimos design de alta performance com foco em conversão e autoridade — sem o custo e a complexidade das grandes agências.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Nossa missão é transformar a presença digital de especialistas através de tecnologia simplificada e estratégica. Você foca no que faz de melhor; nós cuidamos da sua vitrine online.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["+3", "Anos de mercado"],
                ["+50", "Clientes atendidos"],
                ["100%", "Foco em resultado"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-border bg-card p-5 text-center">
                  <div className="text-3xl font-black text-[var(--brand-blue)]">{n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>

            <img src={teamImg} alt="Equipe Zeloz Devs" loading="lazy" width={1280} height={960}
                 className="mt-10 rounded-2xl border border-border" />
          </div>

          <ol className="relative space-y-8 border-l border-border pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[37px] grid h-4 w-4 place-items-center rounded-full bg-[var(--brand-blue)] ring-4 ring-background" />
                <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-[var(--brand-blue)]/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-[var(--brand-blue)]">{t.year}</div>
                  <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-muted-foreground">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const services = [
  { icon: Globe, title: "Site Institucional", desc: "Presença profissional que transmite autoridade desde o primeiro clique. Ideal para conquistar a confiança do paciente, cliente ou consumidor." },
  { icon: Rocket, title: "Landing Page de Conversão", desc: "Página única e estratégica, focada em transformar visitantes em agendamentos diretos via WhatsApp." },
  { icon: Search, title: "SEO Local", desc: "Apareça quando alguém procurar pelos seus serviços na sua cidade. Otimização técnica e de conteúdo para o Google." },
  { icon: Smartphone, title: "Mobile First", desc: "Mais de 70% do seu cliente acessa pelo celular. Garantimos uma experiência impecável em qualquer tela." },
  { icon: Zap, title: "Performance Extrema", desc: "Sites que carregam em milissegundos. Velocidade gera confiança e melhora seu posicionamento no Google." },
  { icon: ShieldCheck, title: "Suporte Pós-Entrega", desc: "Você não fica sozinho depois do lançamento. Manutenção, atualizações e ajustes com atendimento humano." },
];

function Services() {
  return (
    <section id="servicos" className="relative border-t border-border bg-[var(--brand-dark)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Serviços</span>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Soluções pensadas para o profissional liberal.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada serviço resolve uma dor real: invisibilidade no Google, dificuldade em atrair clientes qualificados e a complexidade técnica das ferramentas tradicionais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-[var(--brand-blue)]/60 hover:shadow-[var(--shadow-glow)]">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand-blue)]/15 text-[var(--brand-blue)] transition group-hover:bg-[var(--brand-blue)] group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a href={waLink(`Olá! Quero saber mais sobre: ${title}`)} target="_blank" rel="noopener noreferrer"
                 className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-blue)] hover:gap-2.5 transition-all">
                Ver Projetos <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentials (comparison) ---------------- */
const rows = [
  ["Atendimento direto com o desenvolvedor", true, false],
  ["Entrega em até 2 dias úteis", true, false],
  ["Foco em conversão e autoridade", true, false],
  ["Investimento acessível, sem mensalidade obrigatória", true, false],
  ["Suporte humano após a entrega", true, false],
  ["Otimização para Google (SEO) inclusa", true, false],
] as const;

function Differentials() {
  return (
    <section id="diferenciais" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Por que a Zeloz?</span>
          <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            A diferença entre um site e um site que <span className="text-[var(--brand-blue)]">gera agendamentos</span>.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja como nosso método se compara ao modelo tradicional das agências e dos sites genéricos.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-border bg-muted/40 px-6 py-4 text-xs font-bold uppercase tracking-wider sm:grid-cols-[2fr_1fr_1fr]">
            <div>O que importa</div>
            <div className="text-center text-[var(--brand-blue)]">Zeloz Devs</div>
            <div className="text-center text-muted-foreground">Outras opções</div>
          </div>
          {rows.map(([label, us, them]) => (
            <div key={label} className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-border px-6 py-4 last:border-b-0 sm:grid-cols-[2fr_1fr_1fr]">
              <div className="text-sm font-medium sm:text-base">{label}</div>
              <div className="flex justify-center">
                {us
                  ? <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--brand-blue)] text-white"><Check className="h-4 w-4" /></span>
                  : <X className="h-5 w-5 text-muted-foreground" />}
              </div>
              <div className="flex justify-center">
                {them
                  ? <Check className="h-5 w-5 text-muted-foreground" />
                  : <span className="grid h-8 w-8 place-items-center rounded-full bg-muted text-muted-foreground"><X className="h-4 w-4" /></span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
const steps = [
  ["01", "Conversa no WhatsApp", "Sem compromisso. Entendemos seu negócio, seus objetivos e tiramos suas dúvidas."],
  ["02", "Orçamento personalizado", "Enviamos uma proposta clara, com escopo e prazo. Você decide com tranquilidade."],
  ["03", "Sinal e produção", "Após o sinal, em até 2 dias entregamos o primeiro modelo do seu site para revisão."],
  ["04", "Ajustes e lançamento", "Aplicamos suas observações, lançamos o site no ar e você conclui o pagamento."],
] as const;

function Process() {
  return (
    <section id="processo" className="border-t border-border bg-[var(--brand-dark)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Como Trabalhamos</span>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">Um processo simples, do primeiro contato ao lançamento.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={n} className="relative rounded-2xl border border-border bg-card p-7">
              <div className="text-5xl font-black text-[var(--brand-blue)]/30">{n}</div>
              <h3 className="mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  { name: "Dra. Camila Souza", role: "Dermatologista", text: "Em duas semanas após o lançamento meus agendamentos online dobraram. Recebi diversos elogios pela apresentação profissional do site." },
  { name: "Rafael Lima", role: "Advogado Tributarista", text: "O atendimento foi consultivo do início ao fim. Sentia que estavam realmente preocupados com meu posicionamento — não só em entregar um site genérico." },
  { name: "Pedro Almeida", role: "Proprietário, Barbearia Norte", text: "Investimento justo e retorno imediato. Hoje meus clientes me encontram pelo Google e marcam direto pelo WhatsApp." },
  { name: "Marcela Tavares", role: "Contadora", text: "Eu tinha receio da complexidade. A Zeloz cuidou de tudo, eu só precisei aprovar. Resultado: autoridade na cidade e novos contatos toda semana." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const go = (d: number) => setI(v => (v + d + testimonials.length) % testimonials.length);
  const t = testimonials[i];
  return (
    <section id="depoimentos" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Prova Social</span>
        <h2 className="mt-3 text-4xl font-black sm:text-5xl">Profissionais que escolheram crescer com a gente.</h2>

        <div className="relative mt-12 rounded-3xl border border-border bg-card p-8 sm:p-12">
          <Quote className="mx-auto h-10 w-10 text-[var(--brand-blue)]/40" />
          <p key={i} className="animate-fade-in-up mt-6 text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
            "{t.text}"
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-blue)] text-lg font-bold text-white">
              {t.name.split(" ").map(w => w[0]).slice(0, 2).join("")}
            </div>
            <div>
              <div className="font-bold">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
            <div className="flex gap-0.5 text-[var(--brand-blue)]">
              {[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Depoimento anterior"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)} aria-label={`Depoimento ${idx + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--brand-blue)]" : "w-4 bg-muted"}`} />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Próximo depoimento"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-muted">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-[#0F172A] py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-[var(--brand-blue)] opacity-20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Pronto para começar?</span>
        <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
          Transforme sua invisibilidade digital em <span className="text-[var(--brand-blue)]">autoridade e novos agendamentos</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Conversa inicial gratuita e sem compromisso. Em poucos minutos você entende como podemos posicionar seu negócio na frente dos seus concorrentes.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="group inline-flex items-center gap-3 rounded-xl bg-[var(--brand-blue)] px-8 py-5 text-base font-bold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.03]">
            <MessageCircle className="h-5 w-5" />
            Falar com Especialista
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a href={`tel:+55${WHATSAPP_NUM}`}
             className="text-sm font-semibold text-white/80 hover:text-white">
            ou ligue: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">
          Sem custo de manutenção obrigatório • Suporte pós-entrega incluso • Retorno real do seu investimento
        </p>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--brand-blue)] font-black text-white">Z</div>
            <span className="text-lg font-bold">Zeloz Devs</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Sites institucionais de alta performance para profissionais liberais e pequenos negócios.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[var(--brand-blue)]" /> {WHATSAPP_DISPLAY}</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[var(--brand-blue)]" /> contato@zeloz.online</li>
            <li className="flex items-center gap-2"><Instagram className="h-4 w-4 text-[var(--brand-blue)]" /> @ZelozDevs</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--brand-blue)]" /> CEP 25911-279</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Funcionamento</h4>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-[var(--brand-blue)]" />
            Segunda a Sexta, das 9h às 19h
          </p>
          <a href={waLink("Olá! Gostaria de solicitar um orçamento.")} target="_blank" rel="noopener noreferrer"
             className="mt-6 inline-flex rounded-lg bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white">
            Solicitar Orçamento
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Zeloz Devs. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function WhatsAppFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
       className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 animate-float hover:scale-110 transition-transform">
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.519 5.276l-.999 3.648 3.969-1.623zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
      </svg>
    </a>
  );
}
