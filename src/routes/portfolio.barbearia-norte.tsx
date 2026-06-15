import { createFileRoute } from "@tanstack/react-router";
import { DemoSite, type DemoConfig } from "@/components/DemoSite";

const config: DemoConfig = {
  brand: "Barbearia Norte",
  tagline: "Tradição masculina desde 2015",
  badges: ["Zona Norte · Rio de Janeiro", "Barbeiros premiados", "Produtos importados"],
  hero: {
    eyebrow: "Barbearia",
    title: "Corte clássico, atitude moderna.",
    subtitle: "Cortes, barba e tratamentos para o homem que se importa com o visual. Reserve seu horário em segundos.",
    cta: "Agendar agora",
    ctaSecondary: "Ver serviços",
  },
  stats: [
    { value: "+9", label: "Anos de história" },
    { value: "+15 mil", label: "Cortes realizados" },
    { value: "5,0", label: "Nota no Google" },
    { value: "6", label: "Barbeiros especialistas" },
  ],
  about: {
    title: "A casa do bom corte",
    body: "Há quase 10 anos cuidando do estilo dos cariocas. Ambiente acolhedor, profissionais especializados e produtos premium para uma experiência completa — do corte ao café.",
    bullets: [
      "Barbeiros especialistas",
      "Produtos importados",
      "Ambiente climatizado",
      "Café e cerveja por conta da casa",
    ],
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80&auto=format&fit=crop",
  },
  services: {
    title: "Serviços e preços",
    subtitle: "Tudo o que você precisa para sair daqui pronto para o que vier.",
    items: [
      { name: "Corte masculino", desc: "Corte clássico ou moderno na tesoura e máquina.", price: "R$ 60" },
      { name: "Barba completa", desc: "Toalha quente, navalha e finalização com bálsamo.", price: "R$ 50" },
      { name: "Combo Corte + Barba", desc: "O pacote mais pedido da casa.", price: "R$ 95" },
      { name: "Pigmentação", desc: "Disfarce de falhas e contorno desenhado.", price: "R$ 80" },
      { name: "Hidratação capilar", desc: "Tratamento profundo para cabelo e couro cabeludo.", price: "R$ 45" },
      { name: "Sobrancelha na navalha", desc: "Design masculino discreto e bem feito.", price: "R$ 25" },
    ],
  },
  gallery: [
    { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80&auto=format&fit=crop", alt: "Barbearia" },
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80&auto=format&fit=crop", alt: "Corte" },
    { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80&auto=format&fit=crop", alt: "Barba" },
    { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80&auto=format&fit=crop", alt: "Ambiente" },
    { src: "https://images.unsplash.com/photo-1622288432450-277d0fef5ed6?w=900&q=80&auto=format&fit=crop", alt: "Cadeira" },
    { src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=900&q=80&auto=format&fit=crop", alt: "Detalhe" },
  ],
  testimonials: [
    { name: "Lucas P.", role: "Cliente há 4 anos", quote: "Melhor barbearia do Méier. Atendimento impecável e o corte fica perfeito toda vez.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop" },
    { name: "Diego M.", role: "Cliente fidelizado", quote: "Ambiente top, profissionais que entendem do assunto. Saio sempre satisfeito.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80&auto=format&fit=crop" },
    { name: "Henrique S.", role: "Recomendado por amigo", quote: "Cheguei pra cortar e virei cliente fixo. O combo barba e cabelo é imbatível.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80&auto=format&fit=crop" },
  ],
  faq: [
    { q: "Precisa agendar ou aceita walk-in?", a: "Atendemos os dois. Para garantir horário e barbeiro de preferência, recomendamos agendar pelo WhatsApp." },
    { q: "Quais formas de pagamento aceitam?", a: "Dinheiro, Pix e todas as bandeiras de cartão de crédito e débito." },
    { q: "Tem barbeiro especialista em barba?", a: "Sim. Nossa equipe é treinada especificamente para barboterapia e desenho." },
    { q: "Atendem crianças?", a: "Sim, temos cadeira lúdica e barbeiros pacientes para o público infantil." },
    { q: "Vendem produtos para uso em casa?", a: "Sim, trabalhamos com pomadas, óleos e produtos importados que usamos no salão." },
  ],
  ctaBanner: {
    title: "Reserve seu horário agora.",
    subtitle: "Atendimento rápido pelo WhatsApp. Sem espera, sem complicação.",
    cta: "Agendar pelo WhatsApp",
  },
  contact: {
    phone: "(21) 99999-0003",
    email: "contato@barbearianorte.com.br",
    address: "Rua Dias da Cruz, 200 — Méier, Rio de Janeiro/RJ",
    hours: "Ter a Sáb · 10h às 21h",
    whatsapp: "+5521999990003",
  },
  socials: { instagram: "#", facebook: "#" },
  theme: {
    register: "premium-dark",
    bg: "bg-[#0d0d0d]",
    text: "text-[#f5f5f5]",
    accent: "#d4a24c",
    accentText: "#0d0d0d",
    accentSoft: "radial-gradient(60% 60% at 75% 0%, rgba(212,162,76,0.18), transparent 70%)",
    surface: "bg-[#141414]",
    border: "border-[#262626]",
    muted: "text-[#a3a3a3]",
    titleFont: "'Oswald', 'Bebas Neue', Impact, sans-serif",
    heroImg: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80&auto=format&fit=crop",
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