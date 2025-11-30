import HomeTemplate from "@/components/templates/HomeTemplate";
import { PillarCardData } from "@/components/molecules/PillarCardsGrid";
import { FAQItemData } from "@/components/organisms/FAQ";

const bannerData = {
  title: "Referências que todo Dev deveria conhecer",
  description:
    "Uma seleção criteriosa de conteúdos sobre Experiência do Usuário (UX), Facilidade de Uso e Acessibilidade Web. O material certo para consultar sempre que tiver dúvidas.",
  buttonLabel: "Acessar materiais →",
  buttonHref: "/leituras",
};

const knowledgePillarsData = {
  title: "Conhecimento para ir além do código",
  description:
    "Uma coleção de conteúdos e referências pensada para facilitar a criação de produtos melhores. Escolha um dos pilares abaixo e inicie sua leitura no seu próprio ritmo.",
  cards: [
    {
      title: "UX DESIGN",
      description:
        "Entenda como criar jornadas lógicas que retêm usuários e transformam a navegação em uma experiência fluida.",
      linkHref: "/ux",
      linkLabel: "Guia de UX",
    },
    {
      title: "USABILIDADE",
      description:
        "Aprenda a reduzir a fricção e o esforço cognitivo, tornando suas aplicações intuitivas e à prova de erros.",
      linkHref: "/usabilidade",
      linkLabel: "Práticas de Usabilidade",
    },
    {
      title: "ACESSIBILIDADE",
      description:
        "Aprenda a eliminar barreiras de acesso via código, tornando suas interfaces utilizáveis por todos.",
      linkHref: "/acessibilidade",
      linkLabel: "Acessibilidade Web",
    },
  ],
};

const faqData: FAQItemData[] = [
  {
    question: "As informações técnicas são confiáveis?",
    answer: "Sim. Todo o conteúdo é curado com base em bibliografia acadêmica (como as heurísticas de Nielsen e princípios de Don Norman) e documentação técnica oficial (W3C, WCAG e MDN). Não é apenas opinião, é ciência aplicada ao design.",
  },
  {
    question: "O que exatamente o \"Modo Dev\" faz na página?",
    answer: "É uma camada de 'metaleitura'. Ao ativá-lo, a interface se torna interativa: você pode clicar nos elementos (como botões, menus e cards) para entender a teoria de UX e as regras de acessibilidade que motivaram aquela escolha de design.",
  },
  {
    question: "Por que não consigo ativar o Modo Dev no celular?",
    answer: "Por limitações de interação. O Modo Dev depende muito do evento de 'hover' (passar o mouse) para exploração, algo que não existe nativamente em telas de toque. Para garantir a integridade da experiência, restringimos o uso ao desktop.",
  },
  {
    question: "Como posso contatar os responsáveis pelo site?",
    answer: "O devXperience é open source! Você pode abrir Issues ou Pull Requests no nosso repositório do GitHub, ou entrar em contato através das redes sociais linkadas no rodapé desta página.",
  },
];

export default function Home() {
  return (
    <HomeTemplate
      knowledgePillars={knowledgePillarsData}
      banner={bannerData}
      faqItems={faqData}
    />
  );
}
