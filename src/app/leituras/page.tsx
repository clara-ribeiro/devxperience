"use client";

import type { Metadata } from "next";
import { Suspense } from "react";
import { ReadingsTemplate } from "@/components/templates/ReadingsTemplate";
import { FilterOption } from "@/components/organisms/ReadingsHero";
import { ReadingItem } from "@/components/organisms/ReadingsGrid";

export const metadata: Metadata = {
  title: "Leituras Recomendadas | devXperience - UX, Usabilidade e Acessibilidade",
  description:
    "Curadoria de livros, artigos e recursos técnicos sobre Experiência do Usuário, Usabilidade e Acessibilidade Web, selecionados a partir da bibliografia do TCC devXperience.",
  keywords: [
    "Leituras UX",
    "Referências de Usabilidade",
    "Acessibilidade Web",
    "Experiência do Usuário",
    "UX para Desenvolvedores",
    "Usabilidade para Devs",
    "Bibliografia UX",
    "Design Centrado no Usuário",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/leituras",
    title: "Leituras Recomendadas | devXperience",
    description:
      "Uma curadoria de livros, artigos e recursos para quem quer aprofundar UX, Usabilidade e Acessibilidade Web com base em referências acadêmicas e técnicas.",
    siteName: "devXperience",
    images: [
      {
        url: "https://www.devxperience.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Leituras Recomendadas - devXperience",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leituras Recomendadas | devXperience",
    description:
      "Seleção de conteúdos essenciais sobre UX, Usabilidade e Acessibilidade Web para desenvolvedores.",
    images: ["https://www.devxperience.com.br/og-image.png"],
  },
  alternates: {
    canonical: "https://www.devxperience.com.br/leituras",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Dados para a seção de Leituras Recomendadas
// Curadoria feita a partir da bibliografia do TCC
const readingsData = [
  // --- UX DESIGN ---
  {
    id: 1,
    category: "UX Design",
    title: "The Design of Everyday Things",
    author: "Donald A. Norman (2013)",
    description:
      "A bíblia do design. Norman ensina a observar o mundo (de portas a interruptores) para entender como a psicologia humana interage com objetos. Leitura obrigatória para entender o conceito de 'Affordance'.",
    link: "https://mitpress.mit.edu/9780262525671/the-design-of-everyday-things/",
  },
  {
    id: 2,
    category: "UX Design",
    title: "About Face: The Essentials of Interaction Design",
    author: "Cooper, Reimann e Cronin (2014)",
    description:
      "Frequentemente chamado de 'livro definitivo' sobre Design de Interação. Essencial para devs que querem entender como criar personas, cenários e fluxos que fazem sentido lógico, não apenas técnico.",
    link: "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576",
  },
  {
    id: 3,
    category: "UX Design",
    title: "Introdução e Boas Práticas em UX Design",
    author: "Fabricio Teixeira (2014)",
    description:
      "Uma referência brasileira direta e prática. O autor desmistifica o UX, separando o que é arte do que é projeto, e oferece um guia de sobrevivência para quem está começando na área.",
    link: "https://www.casadocodigo.com.br/products/livro-ux-design",
  },
  {
    id: 4,
    category: "UX Design",
    title: "Interação Humano-Computador e Experiência do Usuário",
    author: "Barbosa e Silva (2021)",
    description:
      "Conhecido como o 'Livro Verde' da IHC no Brasil. Uma obra acadêmica robusta que conecta a teoria profunda com a prática de desenvolvimento de interfaces em nosso contexto cultural.",
    link: "https://leanpub.com/ihc-ux",
  },
  // --- USABILIDADE ---
  {
    id: 5,
    category: "Usabilidade",
    title: "Usability Engineering",
    author: "Jakob Nielsen (1993)",
    description:
      "O clássico que definiu a engenharia de usabilidade. Nielsen apresenta métodos para melhorar interfaces que resistem ao teste do tempo, focando em eficiência, facilidade de aprendizado e prevenção de erros.",
    link: "https://www.nngroup.com/books/usability-engineering/",
  },
  {
    id: 6,
    category: "Usabilidade",
    title: "Handbook of Usability Testing",
    author: "Rubin e Chisnell (2008)",
    description:
      "Como saber se sua interface funciona? Este livro é um manual prático sobre como planejar, projetar e conduzir testes de usabilidade eficazes, mesmo sem um laboratório caro.",
    link: "https://www.wiley.com/en-us/Handbook+of+Usability+Testing%3A+How+to+Plan%2C+Design%2C+and+Conduct+Effective+Tests%2C+2nd+Edition-p-9780470185483",
  },
  {
    id: 7,
    category: "Usabilidade",
    title: "Don't Make Me Think, Revisited",
    author: "Steve Krug (2014)",
    description:
      "O livro mais popular sobre usabilidade web. Curto, ilustrado e direto ao ponto: o usuário não deve gastar energia mental tentando entender como sua interface funciona. Ela deve ser óbvia.",
    link: "https://sensible.com/dont-make-me-think/",
  },
  // --- ACESSIBILIDADE ---
  {
    id: 8,
    category: "Acessibilidade",
    title: "Web Accessibility Initiative (WAI)",
    author: "W3C (Documentação Oficial)",
    description:
      "A fonte da verdade. Não é um livro, mas a documentação viva que todo Front-end deve consultar. Contém as diretrizes WCAG e técnicas para tornar a web acessível a todos.",
    link: "https://www.w3.org/WAI/",
  },
  {
    id: 9,
    category: "Acessibilidade",
    title: "Lei Brasileira de Inclusão (LBI)",
    author: "Lei nº 13.146 (2015)",
    description:
      "Essencial para projetos no Brasil. O Artigo 63 torna obrigatória a acessibilidade em sites de empresas com sede no país. Conhecer a lei é um diferencial competitivo para o desenvolvedor.",
    link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  {
    id: 10,
    category: "Acessibilidade",
    title: "Ergonomics of human-system interaction",
    author: "ISO 9241-210 (2019)",
    description:
      "A norma internacional que define o 'Design Centrado no Humano'. Fundamental para quem trabalha em grandes corporações ou projetos que exigem conformidade com padrões globais de qualidade.",
    link: "https://www.iso.org/standard/77520.html",
  },
  // --- NOVOS ITENS DE UX DESIGN ---
  {
    id: 11,
    category: "UX Design",
    title: "Designing for Emotion",
    author: "Aaron Walter (2011)",
    description:
      "A referência teórica por trás do nosso mascote (a Raposa). Walter explica que uma interface funcional não é suficiente; ela precisa ter personalidade para criar uma conexão humana e gerar perdão em momentos de erro.",
    link: "https://abookapart.com/products/designing-for-emotion",
  },
  {
    id: 12,
    category: "UX Design",
    title: "A Project Guide to UX Design",
    author: "Unger e Chandler (2012)",
    description:
      "Excelente para entender o 'mundo real'. Foca menos na teoria acadêmica e mais em como o UX se encaixa no cronograma, nas entregas e na colaboração com desenvolvedores e gerentes de projeto.",
    link: "https://www.peachpit.com/store/project-guide-to-ux-design-for-user-experience-designers-9780321815385",
  },
  // --- NOVOS ITENS DE USABILIDADE ---
  {
    id: 13,
    category: "Usabilidade",
    title: "Design de Interação",
    author: "Rogers, Sharp e Preece (2013)",
    description:
      "Um livro-texto fundamental que vai além da tela. Aborda como as pessoas interagem com a tecnologia em contextos sociais e cognitivos. Ótimo para aprofundar a base teórica sobre modelos mentais.",
    link: "https://www.amazon.com.br/Design-Intera%C3%A7%C3%A3o-Al%C3%A9m-Humano-Computador/dp/8582600185",
  },
  {
    id: 14,
    category: "Usabilidade",
    title: "Design Centrado no Usuário",
    author: "Travis Lowdermilk (2019)",
    description:
      "Publicado pela O'Reilly (famosa entre devs), este livro fala a nossa língua. É um guia prático sobre como incorporar o feedback do usuário durante o ciclo de desenvolvimento de software, não apenas no final.",
    link: "https://novatec.com.br/livros/design-centrado-usuario/",
  },
  // --- NOVOS ITENS DE ACESSIBILIDADE ---
  {
    id: 15,
    category: "Acessibilidade",
    title: "ABNT NBR 17225:2023",
    author: "Associação Brasileira de Normas Técnicas",
    description:
      "A norma técnica oficial de Acessibilidade Digital no Brasil. Define os requisitos e parâmetros nacionais para garantir que interfaces sejam perceptíveis, operáveis e compreensíveis por pessoas com deficiência.",
    link: "https://www.abntcatalogo.com.br/",
  },
  // --- NOVOS EM: UX DESIGN & PROCESSO ---
  {
    id: 16,
    category: "UX Design",
    title: "Agile Development & UCD Integration",
    author: "Salah, Paige e Cairns (2014)",
    description:
      "Crucial para quem trabalha com Scrum ou Kanban. Este estudo analisa como encaixar o processo de Design Centrado no Usuário dentro de sprints ágeis sem causar gargalos no desenvolvimento.",
    link: "https://dl.acm.org/doi/10.1145/2601248.2601276",
  },
  {
    id: 17,
    category: "UX Design",
    title: "Personas in Software Development",
    author: "Billestrup et al. (2014)",
    description:
      "Devs muitas vezes acham que 'Personas' são coisa de marketing. Esta obra mostra como o uso de Personas impacta diretamente a engenharia de requisitos e a qualidade do código final.",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-07881-6_18",
  },
  {
    id: 18,
    category: "UX Design",
    title: "Laws of UX",
    author: "Jon Yablonski (2020)",
    description:
      "A leitura complementar perfeita para este site. O autor compila as principais leis da psicologia (Hick, Fitts, Miller) e explica como elas se aplicam diretamente no design de interfaces modernas.",
    link: "https://lawsofux.com/book/",
  },
  {
    id: 19,
    category: "UX Design",
    title: "Atomic Design",
    author: "Brad Frost (2016)",
    description:
      "A base da componentização moderna (React/Vue). Ensina a criar sistemas de design escaláveis dividindo interfaces em átomos, moléculas e organismos. Essencial para organizar seu código frontend.",
    link: "https://atomicdesign.bradfrost.com/",
  },
  // --- NOVOS EM: USABILIDADE & MÉTRICAS ---
  {
    id: 20,
    category: "Usabilidade",
    title: "Cost-Justifying Usability",
    author: "Bias e Mayhew (2005)",
    description:
      "Como convencer seu chefe a investir em UX? Este livro foca no ROI (Retorno sobre Investimento) da usabilidade, ensinando a calcular o valor financeiro de uma interface bem feita.",
    link: "https://www.sciencedirect.com/book/9780120958115/cost-justifying-usability",
  },
  {
    id: 21,
    category: "Usabilidade",
    title: "AttrakDiff: Hedonic vs Pragmatic Quality",
    author: "Marc Hassenzahl (2003)",
    description:
      "Uma visão científica sobre métricas. Introduz o método AttrakDiff para medir não apenas se o software funciona (pragmático), mas se ele é desejável e atraente (hedônico).",
    link: "http://attrakdiff.de/index-en.html",
  },
  {
    id: 22,
    category: "Usabilidade",
    title: "UX Design: Guia Definitivo",
    author: "Will Grant (2019)",
    description:
      "Direto e sem rodeios. Grant apresenta 101 dicas de usabilidade práticas para o dia a dia, cobrindo desde botões e formulários até navegação mobile. Ótimo para consulta rápida.",
    link: "https://novatec.com.br/livros/ux-design/",
  },
  {
    id: 23,
    category: "Usabilidade",
    title: "Refactoring UI",
    author: "Adam Wathan & Steve Schoger (2018)",
    description:
      "O livro de cabeceira do desenvolvedor que quer melhorar o visual de suas aplicações. Ensina táticas de design visual a partir da perspectiva de um desenvolvedor, sem teoria de cores complexa.",
    link: "https://www.refactoringui.com/",
  },
  // --- NOVOS EM: ACESSIBILIDADE & PADRÕES ---
  {
    id: 24,
    category: "Acessibilidade",
    title: "Inclusive Components",
    author: "Heydon Pickering (2019)",
    description:
      "O guia prático de codificação acessível. O autor disseca componentes comuns (Menus, Tabs, Modais) e mostra como codificá-los de forma robusta e inclusiva, linha por linha.",
    link: "https://inclusive-components.design/",
  },
  {
    id: 25,
    category: "Acessibilidade",
    title: "ISO 9241-11:2018 (Definitions)",
    author: "International Organization for Standardization",
    description:
      "A definição formal de Usabilidade: Eficácia, Eficiência e Satisfação. Conhecer a norma original ajuda a fundamentar qualquer argumento técnico sobre qualidade de software.",
    link: "https://www.iso.org/standard/63500.html",
  },
  {
    id: 26,
    category: "Acessibilidade",
    title: "A Psychology of User Experience",
    author: "Phil Turner (2017)",
    description:
      "Para quem quer ir fundo. Turner explora o lado cognitivo e afetivo da interação, ideal para entender as barreiras invisíveis que impedem a acessibilidade cognitiva.",
    link: "https://link.springer.com/book/10.1007/978-3-319-57763-0",
  },
  {
    id: 27,
    category: "Acessibilidade",
    title: "ACM SIGCHI Curricula",
    author: "ACM (1992)",
    description:
      "Um documento histórico que estabeleceu as bases do currículo de Interação Humano-Computador. Importante para entender como a disciplina evoluiu da ciência da computação pura para o design humano.",
    link: "https://dl.acm.org/doi/10.1145/147754.147755",
  },
];

const filterOptions: FilterOption[] = [
  { label: "Experiência do Usuário", value: "ux-design" },
  { label: "Usabilidade", value: "usabilidade" },
  { label: "Acessibilidade", value: "acessibilidade" },
];

// Converter os dados para o formato esperado pelos componentes
const allReadings: ReadingItem[] = readingsData.map((reading) => ({
  id: reading.id.toString(),
  category: reading.category,
  title: reading.title,
  author: reading.author,
  description: reading.description,
  linkHref: reading.link,
  linkLabel: "Acessar Conteúdo",
}));

export default function LeiturasPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ReadingsTemplate
        hero={{
          title: "Leituras recomendadas",
          description:
            "Uma curadoria de livros, artigos e recursos feita para quem quer criar experiências digitais mais humanas, acessíveis e bem pensadas.",
          filters: filterOptions,
        }}
        readings={allReadings}
      />
    </Suspense>
  );
}


