# Documentação de Diretrizes Técnicas - Gemma Boutique

Siga rigorosamente este documento, que estabelece as diretrizes técnicas e operacionais para a manutenção e gestão da plataforma digital **Gemma Boutique**. Mantenha os padrões de alta performance e rigor estético do sistema, visando sempre a estabilidade da marca no segmento de luxo.

---

## 1. Arquitetura e Tecnologias

Utilize e mantenha o ecossistema digital com a seguinte stack moderna, sempre focando na otimização de ativos e na redução do tempo de carregamento:

- **Framework:** Utilize o Astro (Arquitetura de ilhas para performance estática).
- **Estilização:** Aplique o Tailwind CSS (Sistema de utilitários escalável).
- **Interação:** Mantenha o Lenis (Motor de scroll inercial para navegação fluida).
- **Mídia:** Utilize o Swiper (Componente de exibição de portfólio de alta fidelidade).

---

## 2. Identidade Visual e Ativos

Siga rigorosamente o manual de marca da Gemma Boutique para garantir a consistência visual em todas as páginas.

### Especificações de Cores
- **Gemma Green (`#1A2F24`):** Aplique como base institucional para elementos de contraste e fundos densos.
- **Gemma Sand (`#E5DDC8`):** Utilize como tom de realce suave para tipografia e call-to-actions.

### Padrão Tipográfico
- **Títulos (Serif):** Aplique a fonte *Cormorant Garamond* (Peso leve) nos cabeçalhos.
- **Corpo de Texto (Sans):** Utilize a fonte *Montserrat* (Alta legibilidade) para descrições.

---

## 3. Estrutura de Diretórios e Componentes

Mantenha e respeite a organização modular do projeto dentro do diretório `src/`:

- `Layout.astro`: Edite para alterar a configuração global de SEO, Meta Tags e injeção de scripts estruturados.
- `Hero.astro`: Mantenha como a seção de impacto principal e o primeiro ponto de conversão.
- `StorySection.astro`: Edite este arquivo para atualizar a seção "Sobre a Gemma" e gerenciar os itens do catálogo de locação.
- `Header.astro` / `HeaderContact.astro`: Altere para modificar o menu superior, ícones sociais e contatos.
- `Footer.astro`: Gerencie as informações institucionais, endereço e links de rodapé.

---

## 4. Procedimentos de Manutenção

### Gestão de Canais de Contato
Atualize os terminais de atendimento (links de WhatsApp e Redes Sociais) diretamente nos seguintes arquivos para garantir a integridade da comunicação:
- `src/Header.astro`
- `src/HeaderContact.astro`
- `src/Hero.astro`
- `src/StorySection.astro`
- `src/Footer.astro`

### Atualização do Portfólio (Catálogo)
Siga o protocolo abaixo estritamente para adicionar ou alterar peças do catálogo:
1. Armazene os novos arquivos de imagem otimizados no diretório `/public/`.
2. Referencie os novos caminhos de imagem no array correspondente dentro de `src/StorySection.astro`.
3. Atualize os metadados, títulos (`title`), descrições (`description`) e links (`whatsappMsg`) no mesmo arquivo.

---

## 5. Protocolo de Implantação (Deployment)

Siga o fluxo de compilação oficial para executar o deploy do site no ambiente de produção:

1. Execute o comando de build para gerar os arquivos estáticos otimizados:
   ```bash
   npm run build
   ```
2. Valide o conteúdo gerado dentro do diretório `dist/`, pois ele representa a versão final e limpa da aplicação.
3. Transfira exclusivamente o conteúdo do diretório `dist/` para a pasta raiz (como `public_html` ou gerenciadores na nuvem) do servidor de hospedagem.

---

*Gemma Boutique • Documentação Técnica*
