# Contribuindo com o DevXperience

Obrigado por considerar contribuir com este projeto. Este repositório busca combinar uma boa experiência de desenvolvimento com **rigor técnico**: melhorias de UX/Usabilidade/Acessibilidade devem ser sustentadas por **evidências**, como normas, livros clássicos, artigos e publicações acadêmicas.

## Código de conduta

Este projeto espera interações respeitosas e colaborativas. Caso este repositório adote um código de conduta formal no futuro, ele será adicionado na raiz do projeto.

## Como começar

### Pré-requisitos

- Node.js 20+
- npm 9+ (ou compatível)

### Setup local

```bash
npm ci
```

### Rodar o projeto

```bash
npm run dev
```

### Rodar o Storybook

```bash
npm run storybook
```

### Qualidade e testes

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

## Tipos de contribuição

### 1) Correções e melhorias no código

- Abra um Pull Request com uma descrição objetiva do problema e da solução.
- Inclua testes quando fizer sentido.
- Garanta que `npm run lint` e `npm run test` passam localmente.

### 2) Conteúdo: novas trilhas, novos tópicos e ajustes de textos

Este projeto trata conteúdo como parte do produto. Por isso, mudanças de conteúdo precisam ser rastreáveis e bem justificadas.

#### Requisito obrigatório: referência acadêmica ou normativa

Para **criar uma nova trilha de conteúdo** ou **sugerir edição em conteúdo existente**, a contribuição deve incluir **referência acadêmica correta** (ou normativa, quando aplicável) para manter o rigor da aplicação.

Na prática, isso significa:

- **Sempre que você introduzir uma afirmação, recomendação ou regra**, inclua uma referência que a sustente.
- Quando o conteúdo for representado por metadados (ex.: `DevModeMetadata`), preencha o campo **`academicRef`** com uma citação completa (ou o suficiente para identificação inequívoca).
- Quando o conteúdo estiver em listas de leituras, referências ou seções equivalentes, inclua **fonte primária** sempre que possível (ex.: norma oficial, DOI, página do publisher).

#### O que é considerado referência válida

- **Normas e especificações oficiais**: W3C/WAI (ex.: WCAG), ISO, ABNT (quando aplicável), legislação oficial.
- **Livros clássicos e editoras reconhecidas**: por exemplo, Morgan Kaufmann, MIT Press, Wiley, Pearson, O’Reilly, A Book Apart, etc.
- **Artigos e publicações acadêmicas**: preferencialmente com DOI, ACM/IEEE/Springer/Elsevier, periódicos revisados por pares.
- **Pesquisa e relatórios técnicos de instituições reconhecidas**: com autoria identificável e data.

Não são aceitas como justificativa principal:

- Conteúdo sem autoria (posts genéricos, agregadores, material sem fonte).
- “Opinião pessoal” ou “experiência” sem evidência para afirmações normativas.

#### Como escrever a referência

Aceitamos ABNT ou APA, desde que consistente dentro do PR. A referência deve permitir identificar a fonte sem ambiguidade.

Inclua, sempre que possível:

- Autor(es)
- Título
- Ano
- Editora / periódico / conferência
- Identificador (DOI/ISBN) ou link para a fonte oficial

Exemplos (apenas como modelo de estrutura):

- Nielsen, J., & Molich, R. (1990). Heuristic Evaluation of User Interfaces.
- ISO 9241-210:2019. Human-centred design for interactive systems.
- W3C. Web Content Accessibility Guidelines (WCAG) 2.2.

#### Licenças, direitos autorais e plágio

- Não copie trechos de livros/artigos sem permissão.
- Prefira **paráfrase** com referência.
- Caso use citação direta, mantenha-a curta, identifique como citação e informe a fonte com precisão.

## Fluxo de Pull Request

1. Faça um fork do repositório.
2. Crie uma branch descritiva:
   - `feat/...` para novas funcionalidades/conteúdo
   - `fix/...` para correções
   - `docs/...` para documentação
3. Garanta que qualidade e testes passam.
4. Abra um Pull Request com contexto e evidências.

## Checklist de revisão (para autores e reviewers)

- [ ] O PR descreve o problema e a solução de forma objetiva
- [ ] `npm run lint` passou
- [ ] `npm run test` passou (e `test:sb`/`test:browser` quando aplicável)
- [ ] Mudanças de conteúdo incluem **referência acadêmica/normativa** (com `academicRef` quando aplicável)
- [ ] Conteúdo novo/alterado não viola direitos autorais


