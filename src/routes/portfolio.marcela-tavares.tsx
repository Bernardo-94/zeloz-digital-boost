import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Marcela Tavares Contabilidade",
  tagline: "Contabilidade consultiva para empresas que crescem",
  badges: ["CRC-RJ 000000/O-0", "+8 anos de atuação", "Atendimento próximo"],
  hero: {
    eyebrow: "Contabilidade",
    title: "Sua contabilidade fora do piloto automático.",
    subtitle: "Assessoria contábil e fiscal completa para MEIs, prestadores de serviço e pequenas empresas — com clareza e proximidade.",
    cta: "Solicitar proposta",
    ctaSecondary: "Conhecer serviços",
  },
  stats: [
    { value: "+8", label: "Anos de atuação" },
    { value: "+250", label: "Empresas ativas" },
    { value: "5 dias", label: "Para abrir sua empresa" },
    { value: "100%", label: "Atendimento humano" },
  ],
  about: {
    title: "Quem somos",
    body: "Escritório contábil com atendimento próximo e foco em informação útil para o seu negócio. Nada de relatório que ninguém lê — entregamos dados que ajudam a decidir.",
    bullets: [
      "Abertura de empresa em até 5 dias",
      "Atendimento por WhatsApp",
      "Relatórios gerenciais mensais",
      "Suporte fiscal e trabalhista",
    ],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80&auto=format&fit=crop",
  },
  services: {
    title: "Serviços",
    subtitle: "Tudo o que sua empresa precisa para crescer com segurança jurídica e fiscal.",
    items: [
      { name: "Contabilidade mensal", desc: "Escrituração, balancetes e demonstrações contábeis em dia." },
      { name: "Departamento fiscal", desc: "Apuração de impostos e cumprimento de obrigações acessórias." },
      { name: "Departamento pessoal", desc: "Folha, admissões, rescisões e eSocial sem dor de cabeça." },
      { name: "Abertura de empresa", desc: "Constituição, enquadramento tributário e alvarás." },
      { name: "Planejamento tributário", desc: "Análise do melhor regime fiscal para sua operação." },
      { name: "Consultoria gerencial", desc: "Indicadores e relatórios para apoiar suas decisões." },
    ],
  },
  steps: [
    { title: "Diagnóstico gratuito", desc: "Entendemos seu negócio, regime atual e gargalos contábeis." },
    { title: "Proposta sob medida", desc: "Plano de serviços adequado ao seu porte e setor." },
    { title: "Migração assistida", desc: "Cuidamos da transferência do seu contador atual sem dor de cabeça." },
    { title: "Operação mensal", desc: "Suporte contínuo, relatórios claros e fechamento no prazo." },
  ],
  testimonials: [
    { name: "Camila R.", role: "Sócia · Agência Digital", quote: "Finalmente entendo meus números. A Marcela traduz contabilidade pra gente que não é da área.", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80&auto=format&fit=crop" },
    { name: "Ricardo A.", role: "Dono · Restaurante", quote: "Migrei do contador anterior em uma semana. Atendimento outro nível, sempre disponíveis.", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop" },
    { name: "Larissa P.", role: "MEI · Designer", quote: "Cuidam de tudo pra mim. Posso focar no que faço de melhor sabendo que o fiscal está em ordem.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop" },
  ],
  faq: [
    { q: "Atendem MEI?", a: "Sim. Temos planos específicos para MEIs com declarações anuais e suporte mensal." },
    { q: "Como funciona a migração do meu contador atual?", a: "Cuidamos de toda a transferência de documentos e comunicação. Você não precisa se preocupar." },
    { q: "Qual o prazo para abrir uma empresa?", a: "Em média 5 dias úteis após o envio dos documentos, dependendo do município." },
    { q: "Posso falar com vocês pelo WhatsApp?", a: "Sim, atendimento principal é por WhatsApp em horário comercial, com resposta rápida." },
    { q: "Vocês atendem fora do RJ?", a: "Sim, atendemos empresas em todo o Brasil de forma 100% digital." },
  ],
  ctaBanner: {
    title: "Vamos conversar sobre a sua empresa.",
    subtitle: "Diagnóstico gratuito e proposta personalizada em até 48h.",
    cta: "Falar com a Marcela",
  },
  contact: {
    phone: "(21) 99999-0004",
    email: "contato@marcelatavares.cnt.br",
    address: "Rua Visconde de Pirajá, 300 — Ipanema, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 18h",
    whatsapp: "+5521999990004",
  },
  socials: { instagram: "#", linkedin: "#" },
  theme: {
    register: "classic",
    bg: "bg-white",
    text: "text-[#0f172a]",
    accent: "#0f766e",
    accentText: "#ffffff",
    accentSoft: "radial-gradient(55% 60% at 80% 0%, rgba(15,118,110,0.10), transparent 70%)",
    surface: "bg-[#f8fafc]",
    border: "border-[#e2e8f0]",
    muted: "text-[#64748b]",
    titleFont: "'Merriweather', Georgia, serif",
    heroImg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
  },
};

export const Route = createFileRoute("/portfolio/marcela-tavares")({
  head: () => ({
    meta: [
      { title: "Marcela Tavares Contabilidade | Demo Zeloz Devs" },
      { name: "description", content: "Site institucional demonstrativo da Marcela Tavares Contabilidade, criado pela Zeloz Devs." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <DemoSite c={config} />,
});