# Documentação de Engenharia e Design - Gemma Boutique

Este documento estabelece as diretrizes arquiteturais, técnicas de otimização de performance e decisões de design aplicadas na plataforma **Gemma Boutique**. Mantenha o cumprimento destas regras em todas as iterações futuras para garantir a estabilidade das métricas de Core Web Vitals e a integridade visual da marca.

---

## 1. Arquitetura e Engenharia de Performance

O projeto foi estruturado com foco absoluto em velocidade de renderização (FCP/LCP) e estabilidade visual (CLS).

### 1.1. Otimização de Imagens e Ativos (Core Web Vitals)
- **Formato WebP:** Exija que todas as imagens servidas no ambiente de produção estejam codificadas em formato `.webp`. Isso reduz o payload da rede em até 80% quando comparado aos formatos legados (JPEG/PNG).
- **Dimensões Explícitas:** Declare obrigatoriamente os atributos `width` e `height` nas tags `<img>`. Esta prática reserva o espaço de renderização no DOM, eliminando flutuações de layout (Cumulative Layout Shift - CLS) durante a fase de carregamento assíncrono.
- **Estratégia de Priorização (Preloading):** 
  - A imagem principal (Largest Contentful Paint - LCP) no componente `Hero.astro` deve ser renderizada com os atributos `loading="eager"`, `fetchpriority="high"` e `decoding="sync"`.
  - Mantenha uma tag `<link rel="preload" as="image">` no `Layout.astro` apontando para o ativo de maior relevância visual do topo da página.
  - Subordine o restante do catálogo de imagens no `StorySection.astro` à política de carregamento tardio (`loading="lazy"` e `decoding="async"`).

### 1.2. Otimização de Fontes e Renderização
- Aplique o pré-carregamento (`<link rel="preload" as="style">`) para as requisições de folhas de estilo do Google Fonts. Isto mitiga a ocorrência de *Flash of Unstyled Text* (FOUT) e acelera o tempo do primeiro desenho de conteúdo (FCP).
- Evite o uso de filtros CSS computacionalmente custosos, como `filter: drop-shadow()` ou `brightness()`, diretamente sobre imagens ou blocos textuais extensos. Opte pela injeção de sobreposições visuais (overlays) baseadas em *background-color* com opacidade (ex: `bg-black/15`), garantindo a preservação dos frames por segundo (FPS) no hardware mobile.

### 1.3. Execução de Scripts
- Proíba o bloqueio do *main thread*. Scripts de interação (como o motor de inércia Lenis) devem ser executados através da flag `type="module"` ou declarados via atributo `defer`, liberando o motor do navegador para priorizar a construção do Render Tree.

---

## 2. Padrões de Design e UX

A interface foi projetada sob o paradigma do **Minimalismo Funcional**, operando com uma carga informacional controlada.

### 2.1. Sistema de Cores (Design Tokens)
Assegure o contraste estrito entre o background e a tipografia:
- **Gemma Green (`#1A2F24`):** Matiz de fundo principal, conferindo gravidade e densidade visual ao design.
- **Gemma Sand (`#E5DDC8`):** Matiz de realce, empregado exclusivamente para tipografia, elementos de ação (CTAs) e separadores de seção.

### 2.2. Tipografia Editorial
- **Títulos (Serifa):** Utilize *Cormorant Garamond* em sua variante leve (`font-light`). Esta fonte deve ser configurada com `text-shadow` sutis em vez de drop-shadows para preservar performance.
- **Apoio (Sans-serif):** Utilize *Montserrat* com espaçamento entre caracteres acentuado (`tracking-[0.2em]`) na renderização de botões, selos e navegação, reforçando a identidade estética associada à alta-costura.

### 2.3. Layout Dinâmico e Cartografia
- **Footer "Split Layout":** Mantenha o rodapé estruturado em formato de grade (Grid) dividida no desktop, com dados institucionais à esquerda e ativos gráficos à direita.
- O mapa de localização deve operar de forma estética, utilizando filtros CSS (como `mix-blend-multiply`) ou texturas para se integrar diretamente ao `Gemma Green` do background, sem revelar o formato visual de origem do provedor geográfico, garantindo uma experiência contínua e imersiva.

---

## 3. Gestão de Conteúdo e Roteamento

### 3.1. SEO e Indexação
- A estrutura base no `Layout.astro` injeta dinamicamente as tags de OpenGraph, Twitter Cards e dados estruturados avançados (`application/ld+json`) mapeados sob o esquema genérico de `JewelryStore`.
- O arquivo `astro.config.mjs` utiliza o pacote `@astrojs/sitemap` para emissão autônoma da matriz de links rastreáveis do repositório (`sitemap-index.xml`).

### 3.2. Canais de Conversão
Padronize globalmente as instâncias de contato de WhatsApp (`FloatingWhatsApp.astro`, `HeaderContact.astro`, `Footer.astro`). Utilize a codificação `encodeURIComponent()` para a pré-formatação segura das mensagens (URLs).

---
*Manutenção: Exija revisão deste documento após implementações que modifiquem o ciclo de vida do Astro ou introduzam dependências de terceiros no client-side.*
