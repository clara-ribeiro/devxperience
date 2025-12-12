# DevXperience

DevXperience é um projeto educacional voltado a desenvolvedores, com foco em **UX**, **Usabilidade** e **Acessibilidade**. A proposta é oferecer uma experiência de estudo prática, com conteúdo curado e componentes reutilizáveis, mantendo **rigor técnico** por meio de **referências acadêmicas e normas**.  
O projeto foi desenvolvido por **Clara Ribeiro** como **Trabalho de Conclusão de Curso (TCC)** do curso **Engenharia de Software** da **Universidade de Brasília (UnB)**.

## Links

[![Website](https://img.shields.io/badge/Site-devxperience.com.br-111827?logo=vercel&logoColor=white)](https://www.devxperience.com.br)
[![Storybook](https://img.shields.io/badge/Storybook-Deploy-FF4785?logo=storybook&logoColor=white)](https://storybook.devxperience.com.br/)

## Autoria

[![GitHub](https://img.shields.io/badge/GitHub-clara--ribeiro-181717?logo=github&logoColor=white)](https://github.com/clara-ribeiro)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-clara--marcelino-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/clara-marcelino/)
[![Lattes](https://img.shields.io/badge/Curr%C3%ADculo%20Lattes-4484959965965823-2E7D32)](http://lattes.cnpq.br/4484959965965823)

## Tecnologias

- **App**: Next.js, React, TypeScript
- **Estilos**: Stitches (`@stitches/react`)
- **Componentes e documentação de UI**: Storybook
- **Testes**: Vitest (inclui suíte para Storybook) e Playwright (testes em modo browser)
- **Qualidade**: ESLint

## Como rodar o projeto

### Pré-requisitos

- Node.js **20+**
- npm **9+** (ou compatível)

### Instalação

```bash
npm ci
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

### Build e execução (produção local)

```bash
npm run build
npm run start
```

## Storybook

### Rodar em desenvolvimento

```bash
npm run storybook
```

O Storybook ficará disponível em `http://localhost:6006`.

### Gerar build estático

```bash
npm run build-storybook
```

O output será gerado na pasta `storybook-static/`.

## Testes e qualidade

```bash
npm run lint
npm run test
npm run test:coverage
```

Testes relacionados ao Storybook:

```bash
npm run test:sb
npm run test:browser
```

## Estrutura de conteúdo (visão geral)

Parte do conteúdo do projeto é mantida junto ao código, especialmente em arquivos `metadata.ts`, utilizados para explicar decisões e trazer referências (ex.: campo `academicRef` do tipo `DevModeMetadata`).

## Deploy

- **Aplicação (produção)**: `https://www.devxperience.com.br`
- **Storybook (deploy)**:
  - Se publicado via **Chromatic**, o link de preview geralmente aparece nos checks do Pull Request.
  - Se publicado como **build estático**, hospede o diretório `storybook-static/` (Vercel, Netlify, GitHub Pages, etc.) e atualize este README com a URL final.

## Como contribuir

Contribuições são bem-vindas, especialmente melhorias de conteúdo e qualidade técnica. Para manter o rigor do projeto, **alterações de conteúdo exigem referência acadêmica ou normativa adequada**.

Leia o guia completo em `CONTRIBUTING.md`.
