import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Marcela Tavares Contabilidade",
  tagline: "Contabilidade consultiva para empresas que crescem",
  hero: {
    eyebrow: "CRC-RJ 000000/O-0",
    title: "Sua contabilidade fora do piloto automático.",
    subtitle: "Assessoria contábil e fiscal completa para MEIs, prestadores de serviço e pequenas empresas — com clareza e proximidade.",
    cta: "Solicitar proposta",
  },
  about: {
    title: "Quem somos",
    body: "Escritório contábil com atendimento próximo e foco em informação útil para o seu negócio. Nada de relatório que ninguém lê — entregamos dados que ajudam a decidir.",
    bullets: [
      "Abertura de empresa em até 5 dias",
      "Atendimento por WhatsApp",
      "Relatórios gerenciais mensais",
      "Suporte fiscal e trabalhista",
    ],
  },
  services: {
    title: "Serviços",
    items: [
      { name: "Contabilidade mensal", desc: "Escrituração, balancetes e demonstrações contábeis em dia." },
      { name: "Departamento fiscal", desc: "Apuração de impostos e cumprimento de obrigações acessórias." },
      { name: "Departamento pessoal", desc: "Folha, admissões, rescisões e eSocial sem dor de cabeça." },
      { name: "Abertura de empresa", desc: "Constituição, enquadramento tributário e alvarás." },
      { name: "Planejamento tributário", desc: "Análise do melhor regime fiscal para sua operação." },
      { name: "Consultoria gerencial", desc: "Indicadores e relatórios para apoiar suas decisões." },
    ],
  },
  contact: {
    phone: "(21) 99999-0004",
    email: "contato@marcelatavares.cnt.br",
    address: "Rua Visconde de Pirajá, 300 — Ipanema, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 18h",
  },
  theme: {
    bg: "bg-white",
    text: "text-[#0f172a]",
    accent: "#0f766e",
    accentText: "#ffffff",
    surface: "bg-[#f8fafc]",
    border: "border-[#e2e8f0]",
    muted: "text-[#64748b]",
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