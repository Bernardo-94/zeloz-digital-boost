import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Rafael Lima Advocacia",
  tagline: "Direito Tributário Empresarial",
  hero: {
    eyebrow: "OAB/RJ 000.000",
    title: "Estratégia tributária para proteger e impulsionar a sua empresa.",
    subtitle: "Consultoria e contencioso tributário com foco em recuperação de créditos, planejamento fiscal e defesa em autuações.",
    cta: "Falar com o escritório",
  },
  about: {
    title: "Sobre o escritório",
    body: "Atuação dedicada ao Direito Tributário, com mais de 12 anos assessorando empresas de diferentes portes. Análise técnica criteriosa e soluções sob medida.",
    bullets: [
      "Pós-graduação em Direito Tributário (FGV)",
      "Atuação consultiva e contenciosa",
      "Recuperação de créditos fiscais",
      "Atendimento em todo o Brasil",
    ],
  },
  services: {
    title: "Áreas de atuação",
    items: [
      { name: "Planejamento tributário", desc: "Reestruturação fiscal lícita para reduzir a carga tributária da operação." },
      { name: "Contencioso administrativo", desc: "Defesa em processos junto à Receita Federal, estados e municípios." },
      { name: "Contencioso judicial", desc: "Ações tributárias estratégicas em primeira e segunda instância." },
      { name: "Recuperação de créditos", desc: "Identificação e restituição de tributos pagos a maior nos últimos 5 anos." },
      { name: "Consultoria preventiva", desc: "Pareceres e revisão de obrigações acessórias para mitigar riscos." },
      { name: "Due diligence tributária", desc: "Análise fiscal em M&A, reestruturações e processos de investimento." },
    ],
  },
  contact: {
    phone: "(21) 99999-0002",
    email: "contato@rafaellimaadv.com.br",
    address: "Rua da Assembleia, 100 — Centro, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 18h",
  },
  theme: {
    bg: "bg-[#f7f5f1]",
    text: "text-[#1f2937]",
    accent: "#1e3a5f",
    accentText: "#ffffff",
    surface: "bg-white",
    border: "border-[#d6d3d1]",
    muted: "text-[#57534e]",
    font: "Georgia, 'Times New Roman', serif",
    heroImg: "https://images.unsplash.com/photo-1589216532372-1c2a367900d9?w=1200&q=80&auto=format&fit=crop",
  },
};

export const Route = createFileRoute("/portfolio/rafael-lima")({
  head: () => ({
    meta: [
      { title: "Rafael Lima Advocacia — Direito Tributário | Demo Zeloz Devs" },
      { name: "description", content: "Site institucional demonstrativo do escritório Rafael Lima, criado pela Zeloz Devs." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => <DemoSite c={config} />,
});