import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";
import dermatsImg from "@/assets/dermats.jpg";

const config: DemoConfig = {
  brand: "Dra. Camila Souza",
  tagline: "Dermatologia Clínica e Estética",
  badges: ["CRM-RJ 00000 · RQE 0000", "+10 anos de experiência", "Atendimento humanizado"],
  hero: {
    eyebrow: "Dermatologia",
    title: "Cuidado dermatológico com ciência e sensibilidade.",
    subtitle: "Tratamentos personalizados para pele saudável, com tecnologia de ponta e atendimento humanizado na Barra da Tijuca.",
    cta: "Agendar consulta",
    ctaSecondary: "Ver tratamentos",
  },
  stats: [
    { value: "+10", label: "Anos de experiência" },
    { value: "+8 mil", label: "Pacientes atendidos" },
    { value: "30+", label: "Procedimentos" },
    { value: "5,0", label: "Avaliação Google" },
  ],
  about: {
    title: "Sobre a Dra. Camila",
    body: "Dermatologista titulada pela Sociedade Brasileira de Dermatologia, atua há mais de uma década com foco em saúde e bem-estar da pele. Atendimento individualizado, baseado em evidências e em escuta atenta.",
    bullets: [
      "Membro da Sociedade Brasileira de Dermatologia",
      "Pós-graduação em Dermatologia Estética",
      "Atendimento adulto e infantil",
      "Convênios e particular",
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80&auto=format&fit=crop",
  },
  services: {
    title: "Tratamentos",
    subtitle: "Protocolos individuais combinando dermatologia clínica e estética para resultados naturais e duradouros.",
    items: [
      { name: "Acne e cicatrizes", desc: "Protocolos personalizados para controle da acne ativa e remodelação de cicatrizes." },
      { name: "Rejuvenescimento facial", desc: "Toxina botulínica, preenchimentos e bioestimuladores de colágeno." },
      { name: "Câncer de pele", desc: "Mapeamento corporal digital e cirurgias dermatológicas." },
      { name: "Tratamento capilar", desc: "Diagnóstico de queda e tratamentos modernos para couro cabeludo." },
      { name: "Melasma e manchas", desc: "Peelings, lasers e clareadores tópicos prescritos." },
      { name: "Dermatologia infantil", desc: "Cuidado especializado para a pele sensível das crianças." },
    ],
  },
  steps: [
    { title: "Agendamento", desc: "Marque sua consulta pelo WhatsApp em poucos minutos." },
    { title: "Avaliação completa", desc: "Anamnese cuidadosa e exame dermatoscópico." },
    { title: "Plano de tratamento", desc: "Protocolo personalizado para sua pele e seus objetivos." },
    { title: "Acompanhamento", desc: "Retornos programados para garantir os melhores resultados." },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop", alt: "Consultório" },
    { src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=900&q=80&auto=format&fit=crop", alt: "Recepção" },
    { src: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=900&q=80&auto=format&fit=crop", alt: "Procedimento" },
    { src: dermatsImg, alt: "Skincare" },
    { src: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80&auto=format&fit=crop", alt: "Spa" },
    { src: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=900&q=80&auto=format&fit=crop", alt: "Tratamento facial" },
  ],
  testimonials: [
    { name: "Beatriz M.", role: "Paciente · acne adulta", quote: "Em 3 meses minha pele mudou completamente. Atendimento atencioso e protocolo certeiro.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop" },
    { name: "Renata C.", role: "Paciente · rejuvenescimento", quote: "Resultado natural, sem exageros. A Dra. Camila ouve e explica cada passo.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop" },
    { name: "Marina A.", role: "Mãe de paciente infantil", quote: "Levo minha filha desde os 5 anos. Cuidado e paciência fazem toda diferença.", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80&auto=format&fit=crop" },
  ],
  faq: [
    { q: "Atende por convênio?", a: "Atendemos os principais planos de saúde. Consulte a disponibilidade pelo WhatsApp antes do agendamento." },
    { q: "Quanto tempo dura uma consulta?", a: "A primeira consulta dura cerca de 40 minutos. Retornos giram em torno de 25 minutos." },
    { q: "É possível combinar tratamentos no mesmo dia?", a: "Sim, sempre que indicado clinicamente. A combinação é planejada caso a caso." },
    { q: "Atendem crianças e adolescentes?", a: "Sim. Temos protocolo específico para dermatologia infantil e adolescente." },
    { q: "Há estacionamento no local?", a: "Sim, o edifício conta com estacionamento conveniado para pacientes." },
  ],
  ctaBanner: {
    title: "Sua pele merece cuidado especializado.",
    subtitle: "Agende uma avaliação e descubra o protocolo ideal para você.",
    cta: "Agendar pelo WhatsApp",
  },
  contact: {
    phone: "(21) 99999-0001",
    email: "contato@dracamilasouza.com.br",
    address: "Av. das Américas, 500 — Barra da Tijuca, Rio de Janeiro/RJ",
    hours: "Seg a Sex · 09h às 19h",
    whatsapp: "+5521999990001",
  },
  socials: { instagram: "#", facebook: "#" },
  theme: {
    register: "premium-light",
    bg: "bg-[#fafaf7]",
    text: "text-[#1a1a1a]",
    accent: "#0ea5a4",
    accentText: "#ffffff",
    accentSoft: "radial-gradient(60% 60% at 80% 0%, rgba(14,165,164,0.12), transparent 70%)",
    surface: "bg-white",
    border: "border-[#e7e5e0]",
    muted: "text-[#6b7280]",
    titleFont: "'Playfair Display', Georgia, serif",
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