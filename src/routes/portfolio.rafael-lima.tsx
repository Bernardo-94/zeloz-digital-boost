import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Rafael Lima Advocacia",
  tagline: "Direito Tributário Empresarial",
  badges: ["OAB/RJ 000.000", "+12 anos de atuação", "Atendimento em todo Brasil"],
  hero: {
    eyebrow: "Direito Tributário",
    title: "Estratégia tributária para proteger e impulsionar a sua empresa.",
    subtitle: "Consultoria e contencioso tributário com foco em recuperação de créditos, planejamento fiscal e defesa em autuações.",
    cta: "Falar com o escritório",
    ctaSecondary: "Áreas de atuação",
  },
  stats: [
    { value: "+12", label: "Anos de atuação" },
    { value: "+300", label: "Empresas assessoradas" },
    { value: "R$ 80M", label: "Em créditos recuperados" },
    { value: "95%", label: "Êxito em recuperação" },
  ],
  about: {
    title: "Sobre o escritório",
    body: "Boutique jurídica dedicada ao Direito Tributário, com mais de uma década assessorando empresas de diferentes portes. Análise técnica criteriosa, soluções sob medida e relação próxima com o cliente.",
    bullets: [
      "Pós-graduação em Direito Tributário (FGV)",
      "Atuação consultiva e contenciosa",
      "Recuperação de créditos fiscais",
      "Atendimento em todo o Brasil",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
  },
  services: {
    title: "Áreas de atuação",
    subtitle: "Trabalho técnico e estratégico em todas as frentes do Direito Tributário.",
    items: [
      { name: "Planejamento tributário", desc: "Reestruturação fiscal lícita para reduzir a carga tributária da operação." },
      { name: "Contencioso administrativo", desc: "Defesa em processos junto à Receita Federal, estados e municípios." },
      { name: "Contencioso judicial", desc: "Ações tributárias estratégicas em primeira e segunda instância." },
      { name: "Recuperação de créditos", desc: "Identificação e restituição de tributos pagos a maior nos últimos 5 anos." },
      { name: "Consultoria preventiva", desc: "Pareceres e revisão de obrigações acessórias para mitigar riscos." },
      { name: "Due diligence tributária", desc: "Análise fiscal em M&A, reestruturações e processos de investimento." },
    ],
  },
  steps: [
    { title: "Diagnóstico", desc: "Análise da operação fiscal e mapeamento de riscos e oportunidades." },
    { title: "Plano de ação", desc: "Estratégia personalizada com prazos, custos e resultados esperados." },
    { title: "Execução", desc: "Atuação técnica em todas as instâncias administrativas e judiciais." },
    { title: "Acompanhamento", desc: "Reuniões periódicas e relatórios claros sobre o andamento." },
  ],
  testimonials: [
    { name: "Fernando Castro", role: "CEO · Indústria Metalúrgica", quote: "Recuperamos mais de R$ 4 milhões em créditos de PIS/COFINS. Trabalho extremamente técnico.", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80&auto=format&fit=crop" },
    { name: "Patrícia Mendes", role: "Diretora Financeira", quote: "Assessoria estratégica que mudou nossa visão sobre planejamento fiscal. Recomendo sem hesitar.", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop" },
    { name: "Eduardo Ramos", role: "Sócio · Holding Familiar", quote: "Comunicação clara e resultados consistentes. Escritório se tornou referência para nosso grupo.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop" },
  ],
  faq: [
    { q: "O escritório atende empresas fora do Rio de Janeiro?", a: "Sim, atendemos clientes em todo o Brasil com reuniões presenciais ou por videoconferência." },
    { q: "Qual o porte mínimo de empresa para iniciar uma assessoria?", a: "Atendemos desde Simples Nacional bem estruturadas até grandes grupos econômicos." },
    { q: "Como funciona a recuperação de créditos?", a: "Fazemos diagnóstico gratuito. Os honorários são calculados sobre o valor efetivamente recuperado (êxito)." },
    { q: "Quanto tempo leva uma ação tributária?", a: "Depende da matéria e instância. Em média, processos administrativos levam 12 a 24 meses." },
    { q: "Posso contratar apenas para um caso específico?", a: "Sim. Atuamos por caso ou em assessoria mensal continuada, conforme sua necessidade." },
  ],
  ctaBanner: {
    title: "Vamos analisar a sua operação fiscal.",
    subtitle: "Diagnóstico inicial sem compromisso. Identificamos oportunidades em poucos dias.",
    cta: "Agendar reunião",
  },
  contact: {
    phone: "(21) 99999-0002",
    email: "contato@rafaellimaadv.com.br",
    address: "Rua da Assembleia, 100 — Centro, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 18h",
    whatsapp: "+5521999990002",
  },
  socials: { linkedin: "#", instagram: "#" },
  theme: {
    register: "classic",
    bg: "bg-[#f7f5f1]",
    text: "text-[#1f2937]",
    accent: "#1e3a5f",
    accentText: "#ffffff",
    accentSoft: "radial-gradient(50% 60% at 85% 0%, rgba(30,58,95,0.10), transparent 70%)",
    surface: "bg-white",
    border: "border-[#d6d3d1]",
    muted: "text-[#57534e]",
    titleFont: "Georgia, 'Times New Roman', serif",
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