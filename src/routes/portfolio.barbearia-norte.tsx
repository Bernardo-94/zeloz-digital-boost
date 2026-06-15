import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Barbearia Norte",
  tagline: "Tradição masculina desde 2015",
  hero: {
    eyebrow: "Zona Norte · Rio de Janeiro",
    title: "Corte clássico, atitude moderna.",
    subtitle: "Cortes, barba e tratamentos para o homem que se importa com o visual. Reserve seu horário em segundos.",
    cta: "Agendar agora",
  },
  about: {
    title: "A casa do bom corte",
    body: "Há quase 10 anos cuidando do estilo dos cariocas. Ambiente acolhedor, profissionais especializados e produtos premium para uma experiência completa.",
    bullets: [
      "Barbeiros especialistas",
      "Produtos importados",
      "Ambiente climatizado",
      "Café e cerveja por conta da casa",
    ],
  },
  services: {
    title: "Serviços e preços",
    items: [
      { name: "Corte masculino", desc: "Corte clássico ou moderno na tesoura e máquina.", price: "R$ 60" },
      { name: "Barba completa", desc: "Toalha quente, navalha e finalização com bálsamo.", price: "R$ 50" },
      { name: "Combo Corte + Barba", desc: "O pacote mais pedido da casa.", price: "R$ 95" },
      { name: "Pigmentação", desc: "Disfarce de falhas e contorno desenhado.", price: "R$ 80" },
      { name: "Hidratação capilar", desc: "Tratamento profundo para cabelo e couro cabeludo.", price: "R$ 45" },
      { name: "Sobrancelha na navalha", desc: "Design masculino discreto e bem feito.", price: "R$ 25" },
    ],
  },
  contact: {
    phone: "(21) 99999-0003",
    email: "contato@barbearianorte.com.br",
    address: "Rua Dias da Cruz, 200 — Méier, Rio de Janeiro/RJ",
    hours: "Ter a Sáb · 10h às 21h",
  },
  theme: {
    bg: "bg-[#0f0f0f]",
    text: "text-[#f5f5f5]",
    accent: "#d4a24c",
    accentText: "#0f0f0f",
    surface: "bg-[#171717]",
    border: "border-[#262626]",
    muted: "text-[#a3a3a3]",
    heroImg: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80&auto=format&fit=crop",
  },
};

export const Route = createFileRoute("/portfolio/barbearia-norte")({
  head: () => ({
    meta: [
      { title: "Barbearia Norte — Cortes e Barba | Demo Zeloz Devs" },
      { name: "description", content: "Site institucional demonstrativo da Barbearia Norte, criado pela Zeloz Devs." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <DemoSite c={config} />,
});