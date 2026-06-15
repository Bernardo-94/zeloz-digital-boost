import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Dra. Camila Souza",
  tagline: "Dermatologia Clínica e Estética",
  hero: {
    eyebrow: "CRM-RJ 00000 · RQE 0000",
    title: "Cuidado dermatológico com ciência e sensibilidade.",
    subtitle: "Tratamentos personalizados para pele saudável, com tecnologia de ponta e atendimento humanizado no Rio de Janeiro.",
    cta: "Agendar consulta",
  },
  about: {
    title: "Sobre a Dra. Camila",
    body: "Especialista em dermatologia clínica, cirúrgica e estética, com mais de 10 anos dedicados ao cuidado integral da pele. Atendimento individualizado, baseado em evidências.",
    bullets: [
      "Membro da Sociedade Brasileira de Dermatologia",
      "Pós-graduação em Dermatologia Estética",
      "Atendimento adulto e infantil",
      "Convênios e particular",
    ],
  },
  services: {
    title: "Tratamentos",
    items: [
      { name: "Acne e cicatrizes", desc: "Protocolos personalizados para controle da acne ativa e remodelação de cicatrizes." },
      { name: "Rejuvenescimento facial", desc: "Toxina botulínica, preenchimentos e bioestimuladores de colágeno." },
      { name: "Câncer de pele", desc: "Mapeamento corporal digital e cirurgias dermatológicas." },
      { name: "Tratamento capilar", desc: "Diagnóstico de queda e tratamentos modernos para couro cabeludo." },
      { name: "Melasma e manchas", desc: "Peelings, lasers e clareadores tópicos prescritos." },
      { name: "Dermatologia infantil", desc: "Cuidado especializado para a pele sensível das crianças." },
    ],
  },
  contact: {
    phone: "(21) 99999-0001",
    email: "contato@dracamilasouza.com.br",
    address: "Av. das Américas, 500 — Barra da Tijuca, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 19h",
  },
  theme: {
    bg: "bg-[#fafafa]",
    text: "text-[#1a1a1a]",
    accent: "#0ea5a4",
    accentText: "#ffffff",
    surface: "bg-white",
    border: "border-[#e5e7eb]",
    muted: "text-[#6b7280]",
    heroImg: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80&auto=format&fit=crop",
  },
};

export const Route = createFileRoute("/portfolio/dra-camila-souza")({
  head: () => ({
    meta: [
      { title: "Dra. Camila Souza — Dermatologia | Demo Zeloz Devs" },
      { name: "description", content: "Site institucional demonstrativo da Dra. Camila Souza, dermatologista, criado pela Zeloz Devs." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <DemoSite c={config} />,
});