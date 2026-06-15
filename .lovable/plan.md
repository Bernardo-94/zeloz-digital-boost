## Objetivo

Transformar os 4 mini-sites de portfólio (`/portfolio/dra-camila-souza`, `/portfolio/rafael-lima`, `/portfolio/barbearia-norte`, `/portfolio/marcela-tavares`) de "modelos simples" em sites institucionais com cara de produção real — mantendo a estrutura de config (`DemoConfig`) já criada para facilitar manutenção.

## Como vou elevar o nível

### 1. Expandir o `DemoConfig` e o `DemoSite`

Hoje cada modelo tem: hero, sobre, serviços, contato. Vou ampliar para incluir **todas as 4 seções extras** pedidas:

- **`stats`** — faixa com 4 indicadores (ex.: "+10 anos", "+2.500 clientes", "98% satisfação", "Nota 5,0").
- **`testimonials`** — 3 depoimentos fictícios por modelo, com nome, papel/empresa e foto (avatares Unsplash/dicebear).
- **`gallery`** — grid de 6 imagens temáticas (clínica, escritório, barbearia, espaço contábil) com lightbox simples (modal).
- **`faq`** — 5-6 perguntas/respostas específicas da profissão, em accordion (usar `@/components/ui/accordion` da shadcn já instalado).

Cada seção será opcional no config (renderiza só se preenchida), e cada modelo virá com **todas as 4 preenchidas**.

### 2. Polimento visual por nicho (dois registros)

**Clássico institucional** — Rafael Lima (advocacia) e Marcela Tavares (contabilidade):
- Hero com imagem lateral, números de destaque no canto, badge de credencial (OAB/CRC).
- Tipografia serifada nos títulos (advocacia mantém Georgia; contabilidade ganha um par serif+sans sóbrio).
- Paleta sóbria, muito espaço em branco, separadores discretos, ícones lineares.
- Seção "Como trabalhamos" em 4 passos numerados.

**Premium / visual** — Dra. Camila Souza (dermato) e Barbearia Norte:
- Hero com gradiente sutil, badge "Atendimento por agendamento", imagem em destaque com cantos arredondados generosos e shadow.
- Camila: tons spa (verde-água + creme), micro-animações suaves (fade/slide com `framer-motion` — já no projeto), galeria de antes/depois estilizada.
- Barbearia: dark mode rico, accent dourado, textura sutil de fundo, hover states marcantes nos cards de serviço (preço em destaque), galeria estilo Instagram.

### 3. Melhorias estruturais aplicadas aos 4

- Header sticky com blur ao rolar, CTA destacado.
- Hero ganha 2-3 trust signals (CRM/OAB/CRC/anos de mercado) abaixo do botão.
- Cards de serviço com ícone (lucide), hover elevado, e quando aplicável, preço/CTA.
- Faixa CTA de "fundo colorido" antes do contato ("Pronto para começar?").
- Footer expandido em 3 colunas (marca + sobre, links rápidos, contato + redes sociais).
- Animação de entrada por seção (intersection observer + framer-motion, suave, sem exagero).
- Banner "Site demonstrativo Zeloz Devs" no topo permanece em todos.

### 4. Conteúdo

- Textos, números, depoimentos e fotos são **fictícios** (você confirmou anteriormente que tudo bem inventar).
- Fotos via Unsplash (URLs diretas, sem download), avatares de depoimento via Unsplash/DiceBear.
- Botões de contato dentro dos demos continuam apontando para telefone/e-mail fictício de cada modelo (não geram lead para Zeloz; o lead vem do banner "← Voltar" no topo).

## Detalhes técnicos

**Arquivos a alterar:**

- `src/components/DemoSite.tsx` — ampliar o tipo `DemoConfig` (adicionar `stats`, `testimonials`, `gallery`, `faq`, `steps`, `socials`, opções de tipografia title/body, e flags de "registro" classic vs premium). Renderizar condicionalmente as novas seções. Adicionar `framer-motion` para fade-up nas seções, header sticky com scroll listener, e modal simples para lightbox da galeria. Importar `Accordion` de `@/components/ui/accordion`.
- `src/routes/portfolio.dra-camila-souza.tsx` — preencher novos campos (stats, 3 testimonials, 6 fotos clínicas, 6 FAQs dermato, paleta premium spa).
- `src/routes/portfolio.rafael-lima.tsx` — idem, com tom jurídico clássico (estatísticas de causas ganhas, depoimentos de empresários, FAQs tributárias).
- `src/routes/portfolio.barbearia-norte.tsx` — idem, dark premium (números do salão, depoimentos de clientes, fotos de cortes, FAQs sobre agendamento).
- `src/routes/portfolio.marcela-tavares.tsx` — idem, contábil clássico (clientes ativos, depoimentos PJ, fotos escritório, FAQs sobre regimes/abertura de empresa).

**Sem alterações em:**

- `src/routes/index.tsx` (links e nomes dos modelos permanecem).
- Backend, banco, dependências (framer-motion e shadcn accordion já estão no projeto).

## Fora de escopo

- Logos próprias para cada cliente fictício (uso só nome em texto estilizado).
- SEO real (mantenho `noindex` — são demos).
- Formulário de contato funcional (continua com `alert` "demo não conectado").
