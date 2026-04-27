# Gemma Boutique - Plataforma Digital Oficial

Repositório da plataforma digital da **Gemma Boutique**, uma SPA (Single Page Application) estática de alta performance desenvolvida para atuar como vitrine de conversão no segmento de locação de acessórios de luxo para noivas. O projeto foca em rigor estético, tempos de renderização reduzidos (LCP/FCP) e otimização para motores de busca (SEO).

---

## Stack Tecnológica Base

Instancie e estenda a plataforma utilizando o ecossistema abaixo:
- **[Astro (v4.x)](https://astro.build/):** Motor de renderização estática. Responsável pela arquitetura de ilhas (Islands Architecture) e entrega de HTML otimizado com zero-JS por padrão.
- **Tailwind CSS (v3.x):** Framework de estilização baseado em utilitários. Utilizado para mapeamento de design tokens (cores, espaçamentos, tipografia) e design responsivo.
- **Lenis JS:** Biblioteca de interpolação matemática para scroll inercial suave.
- **Swiper JS:** Controlador de slider em hardware-accelerated para galerias e apresentações.

## Procedimentos de Setup

Siga as instruções abaixo para executar o ambiente de desenvolvimento local.

### 1. Pré-requisitos
- Node.js `v18.16.1` ou superior.
- Git instalado.

### 2. Instalação
Clone o repositório e instale a árvore de dependências:
```bash
npm install
```

### 3. Servidor de Desenvolvimento
Inicie o processo de build em tempo real (HMR) na porta padrão (localhost:4321):
```bash
npm run dev
```

### 4. Compilação de Produção
Gere o pacote final minificado para distribuição:
```bash
npm run build
```
Os arquivos otimizados serão depositados no diretório `/dist`. Este diretório deve ser servido por plataformas de hospedagem estática (Vercel, Netlify, Nginx, etc).

---

## Documentação e Engenharia

Para diretrizes detalhadas sobre manipulação de ativos, técnicas de estabilidade visual (CLS), estratégias de *preloading* e regras do Design System, consulte a [Documentação Técnica (DOCUMENTATION.md)](./DOCUMENTATION.md).
