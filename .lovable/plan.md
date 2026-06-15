## Objetivo

Hoje o botão "Visitar site" de cada depoimento aponta para `#`, então o navegador rola para o topo (parecendo redirecionar para o próprio site). Vou criar **4 mini-sites institucionais demonstrativos** — um para cada cliente do depoimento — e ligar cada botão "Visitar site" ao seu respectivo modelo.

## O que será entregue

4 novas rotas (páginas) dentro do próprio projeto, cada uma com um modelo de site institucional adequado à profissão do cliente:

| Cliente | Profissão | Rota | Estilo do modelo |
|---|---|---|---|
| Dra. Camila Souza | Dermatologista | `/portfolio/dra-camila-souza` | Clínica/saúde — clean, tons claros, agendamento em destaque |
| Rafael Lima | Advogado Tributarista | `/portfolio/rafael-lima` | Jurídico — sóbrio, serifa, áreas de atuação |
| Pedro Almeida | Barbearia Norte | `/portfolio/barbearia-norte` | Barbearia — escuro, masculino, serviços + preços |
| Marcela Tavares | Contadora | `/portfolio/marcela-tavares` | Contábil — corporativo, serviços + confiança |

Cada modelo terá: hero, sobre, serviços, contato/WhatsApp e rodapé — fictício, claramente apresentado como **case/demonstração da Zeloz Devs** (com uma faixa no topo "Site demonstrativo desenvolvido pela Zeloz Devs ← voltar").

## Mudanças técnicas

1. **`src/routes/index.tsx`** — trocar `url: "#"` de cada depoimento pela rota correspondente (`/portfolio/dra-camila-souza`, etc.). Trocar o `<a href>` por `<Link to>` do TanStack Router para navegação client-side.
2. **Novas rotas** em `src/routes/portfolio.*.tsx` (4 arquivos), cada uma com `createFileRoute` próprio, `head()` com title/description únicos e componente da página.
3. **Componente compartilhado** `src/components/PortfolioDemoBanner.tsx` — faixa no topo dos 4 modelos com link de volta para `/`.
4. Sem alterações de backend, banco ou dependências.

## Perguntas antes de implementar

- Conteúdo dos 4 modelos pode ser **fictício/placeholder** (eu invento serviços, endereços, fotos via Unsplash/placeholders)? Ou você quer fornecer textos reais?
- Os botões de contato dentro dos modelos demo devem apontar para o **WhatsApp da Zeloz** (gera lead) ou para um número fictício (mais realista como demo)?
