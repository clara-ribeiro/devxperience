import type { Meta, StoryObj } from "@storybook/react";
import { ReadingsTemplate } from "./index";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import { ReadingItem } from "@/components/organisms/ReadingsGrid";
import { FilterOption } from "@/components/organisms/ReadingsHero";

const meta: Meta<typeof ReadingsTemplate> = {
  title: "Templates/ReadingsTemplate",
  component: ReadingsTemplate,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <Story />
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReadingsTemplate>;

const defaultHero = {
  title: "Leituras recomendadas",
  description:
    "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
  filters: [
    { label: "Experiência do Usuário", value: "ux-design" },
    { label: "Usabilidade", value: "usabilidade" },
    { label: "Acessibilidade", value: "acessibilidade" },
  ] as FilterOption[],
};

const sampleReadings: ReadingItem[] = [
  {
    id: "1",
    category: "UX Design",
    title: "The Design of Everyday Things",
    author: "Donald A. Norman (2013)",
    description:
      "A bíblia do design. Norman ensina a observar o mundo (de portas a interruptores) para entender como a psicologia humana interage com objetos. Leitura obrigatória para entender o conceito de 'Affordance'.",
    linkHref: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
    linkLabel: "Acessar Conteúdo",
  },
  {
    id: "2",
    category: "Usabilidade",
    title: "Don't Make Me Think, Revisited",
    author: "Steve Krug (2014)",
    description:
      "O livro mais popular sobre usabilidade web. Curto, ilustrado e direto ao ponto: o usuário não deve gastar energia mental tentando entender como sua interface funciona. Ela deve ser óbvia.",
    linkHref: "https://sensible.com/dont-make-me-think/",
    linkLabel: "Acessar Conteúdo",
  },
  {
    id: "3",
    category: "Acessibilidade",
    title: "Web Accessibility Initiative (WAI)",
    author: "W3C (Documentação Oficial)",
    description:
      "A fonte da verdade. Não é um livro, mas a documentação viva que todo Front-end deve consultar. Contém as diretrizes WCAG e técnicas para tornar a web acessível a todos.",
    linkHref: "https://www.w3.org/WAI/",
    linkLabel: "Acessar Conteúdo",
  },
  {
    id: "4",
    category: "UX Design",
    title: "About Face: The Essentials of Interaction Design",
    author: "Cooper, Reimann e Cronin (2014)",
    description:
      "Frequentemente chamado de 'livro definitivo' sobre Design de Interação. Essencial para devs que querem entender como criar personas, cenários e fluxos que fazem sentido lógico, não apenas técnico.",
    linkHref: "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576",
    linkLabel: "Acessar Conteúdo",
  },
  {
    id: "5",
    category: "Usabilidade",
    title: "Usability Engineering",
    author: "Jakob Nielsen (1993)",
    description:
      "O clássico que definiu a engenharia de usabilidade. Nielsen apresenta métodos para melhorar interfaces que resistem ao teste do tempo, focando em eficiência, facilidade de aprendizado e prevenção de erros.",
    linkHref: "https://www.nngroup.com/books/usability-engineering/",
    linkLabel: "Acessar Conteúdo",
  },
  {
    id: "6",
    category: "Acessibilidade",
    title: "Lei Brasileira de Inclusão (LBI)",
    author: "Lei nº 13.146 (2015)",
    description:
      "Essencial para projetos no Brasil. O Artigo 63 torna obrigatória a acessibilidade em sites de empresas com sede no país. Conhecer a lei é um diferencial competitivo para o desenvolvedor.",
    linkHref: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
    linkLabel: "Acessar Conteúdo",
  },
];

export const Default: Story = {
  name: "Template Leituras - Light Mode",
  args: {
    hero: defaultHero,
    readings: sampleReadings,
  },
};

export const DarkMode: Story = {
  name: "Template Leituras - Dark Mode",
  args: {
    hero: defaultHero,
    readings: sampleReadings,
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <DevModeProvider>
          <div className="dark-theme">
            <Story />
          </div>
        </DevModeProvider>
      </ThemeProvider>
    ),
  ],
};

export const WithManyReadings: Story = {
  name: "Template Leituras - Muitas Leituras",
  args: {
    hero: defaultHero,
    readings: [
      ...sampleReadings,
      {
        id: "7",
        category: "UX Design",
        title: "Designing for Emotion",
        author: "Aaron Walter (2011)",
        description:
          "A referência teórica por trás do nosso mascote (a Raposa). Walter explica que uma interface funcional não é suficiente; ela precisa ter personalidade para criar uma conexão humana e gerar perdão em momentos de erro.",
        linkHref: "https://abookapart.com/products/designing-for-emotion",
        linkLabel: "Acessar Conteúdo",
      },
      {
        id: "8",
        category: "Usabilidade",
        title: "Refactoring UI",
        author: "Adam Wathan & Steve Schoger (2018)",
        description:
          "O livro de cabeceira do desenvolvedor que quer melhorar o visual de suas aplicações. Ensina táticas de design visual a partir da perspectiva de um desenvolvedor, sem teoria de cores complexa.",
        linkHref: "https://www.refactoringui.com/",
        linkLabel: "Acessar Conteúdo",
      },
      {
        id: "9",
        category: "Acessibilidade",
        title: "Inclusive Components",
        author: "Heydon Pickering (2019)",
        description:
          "O guia prático de codificação acessível. O autor disseca componentes comuns (Menus, Tabs, Modais) e mostra como codificá-los de forma robusta e inclusiva, linha por linha.",
        linkHref: "https://inclusive-components.design/",
        linkLabel: "Acessar Conteúdo",
      },
    ],
  },
};

export const WithCustomContent: Story = {
  name: "Template Leituras - Conteúdo Customizado",
  args: {
    hero: {
      title: "Minhas Leituras Favoritas",
      description: "Uma seleção pessoal de livros e artigos que mudaram minha perspectiva sobre design e desenvolvimento.",
      filters: [
        { label: "Design", value: "design" },
        { label: "Desenvolvimento", value: "desenvolvimento" },
      ] as FilterOption[],
    },
    readings: [
      {
        id: "1",
        category: "Design",
        title: "Livro Customizado 1",
        author: "Autor Exemplo (2024)",
        description: "Descrição customizada do primeiro livro de exemplo.",
        linkHref: "https://example.com/book1",
        linkLabel: "Acessar Conteúdo",
      },
      {
        id: "2",
        category: "Desenvolvimento",
        title: "Livro Customizado 2",
        author: "Autor Exemplo (2024)",
        description: "Descrição customizada do segundo livro de exemplo.",
        linkHref: "https://example.com/book2",
        linkLabel: "Acessar Conteúdo",
      },
    ],
  },
};

