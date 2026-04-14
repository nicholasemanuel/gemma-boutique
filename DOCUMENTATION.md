# Documentação de Diretrizes Técnicas - Gemma Boutique

Este documento estabelece as diretrizes técnicas e operacionais para a manutenção e gestão da plataforma digital **Gemma Boutique**. O sistema foi projetado sob padrões de alta performance e rigor estético, visando a estabilidade da marca no segmento de luxo.

---

## 1. Arquitetura e Tecnologias

O ecossistema digital utiliza uma stack moderna focada em otimização de ativos e tempo de carregamento:

- **Framework:** Astro (Arquitetura de ilhas para performance estática).
- **Estilização:** Tailwind CSS (Sistema de utilitários escalável).
- **Interação:** Lenis (Motor de scroll inercial para navegação fluida).
- **Mídia:** Swiper (Componente de exibição de portfólio de alta fidelidade).

---

## 2. Identidade Visual e Ativos

A aplicação segue rigorosamente o manual de marca da Gemma Boutique para garantir consistência visual.

### Especificações de Cores
- **Gemma Green (`#1A2F24`):** Base institucional para elementos de contraste e fundo.
- **Gemma Sand (`#E5DDC8`):** Tom de realce para tipografia e call-to-actions.

### Padrão Tipográfico
- **Títulos (Serif):** *Cormorant Garamond* (Peso leve).
- **Corpo de Texto (Sans):** *Montserrat* (Alta legibilidade).

---

## 3. Estrutura de Diretórios e Componentes

A organização modular do projeto está localizada no diretório `src/`:

- `Layout.astro`: Configuração global de SEO, Meta Tags e Injeção de Fontes.
- `Hero.astro`: Seção de impacto principal e ponto de entrada de conversão.
- `Gallery.astro`: Módulo de exibição da curadoria e portfólio de peças.
- `FloatingWhatsApp.astro`: Utilitário de conversão direta em tempo real.
- `Footer.astro`: Encanamento institucional e informações de rodapé.

---

## 4. Procedimentos de Manutenção

### Gestão de Canais de Contato
A atualização dos terminais de atendimento (WhatsApp) deve ser realizada nos seguintes arquivos para garantir a integridade da comunicação:
- `src/Hero.astro`
- `src/FloatingWhatsApp.astro`

### Atualização do Portfólio (Galeria)
1. Armazenar novos arquivos de imagem no diretório `/public/`.
2. Referenciar os novos caminhos no arquivo `src/Gallery.astro`.
3. Atualizar os metadados e descrições textuais nos containers correspondentes.

---

## 5. Protocolo de Implantação (Deployment)

O processo de deploy para ambientes de produção (Hostinger) deve seguir o fluxo de compilação oficial:

1. Executar o comando de build para geração de arquivos otimizados:
   ```bash
   npm run build
   ```
2. O conteúdo gerado no diretório `dist/` representa a versão final estável da aplicação.
3. Transferir exclusivamente o conteúdo do diretório `dist/` para a pasta raiz (`public_html`) do servidor de destino.

---

*Gemma Boutique • Documentação Técnica v1.0*
