import MainHero from "@/components/organisms/MainHero";
import KnowledgePillars from "@/components/organisms/KnowledgePillars";
import Banner from "@/components/organisms/Banner";

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

export default function Home() {
  return (
    <>
      <MainHero />
      <Banner
        title={bannerData.title}
        description={bannerData.description}
        buttonLabel={bannerData.buttonLabel}
        buttonHref={bannerData.buttonHref}
      />
      <KnowledgePillars
        title={knowledgePillarsData.title}
        description={knowledgePillarsData.description}
        cards={knowledgePillarsData.cards}
      />
    </>
  );
}
