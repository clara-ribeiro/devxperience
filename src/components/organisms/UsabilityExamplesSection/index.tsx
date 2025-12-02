"use client";

import React from "react";
import { TopicExamplesSection } from "@/components/layout/topic-page/TopicExamplesSection";
import { UX_EXAMPLES_CARDS_METADATA } from "@/components/organisms/UXExamplesSection/metadata";
import { USAB_EXAMPLES_CONTAINER_METADATA } from "./metadata";
import usabImage2 from "./usabilidade-02.png";
import usabImage3 from "./usabilidade-03.png";
import usabImage4 from "./usabilidade-04.png";
import usabImage6 from "./usabilidade-06.png";

const UsabilityExamplesSection: React.FC = () => {
  return (
    <TopicExamplesSection
      headingId="usab-examples-heading"
      title="Exemplos práticos de Usabilidade"
      containerMetadata={USAB_EXAMPLES_CONTAINER_METADATA}
      cardsMetadata={UX_EXAMPLES_CARDS_METADATA}
      examples={[
        {
          title: "Ajuda Contextual (Just-in-Time)",
          image: "/usabilidade/usabilidade-1.webm",
          imageAlt: "Animação do botão de ajuda contextual sendo utilizado na interface.",
          description:
            "Em vez de um tutorial intrusivo que bloqueia a tela ('Onboarding Tour'), usamos um botão discreto. Isso aplica o conceito de 'Just-in-Time Learning': a informação é oferecida exatamente no momento da dúvida, respeitando a autonomia do usuário.",
        },
        {
          title: "Divulgação Progressiva (FAQ)",
          image: usabImage2,
          imageAlt: "FAQ em formato de accordion, exibindo apenas as perguntas inicialmente.",
          description: (
            <>
              Para garantir a &quot;Inteligibilidade&quot; e reduzir a carga cognitiva, o FAQ exibe apenas as perguntas
              inicialmente. O usuário decide o que quer ler, tornando a interface mais limpa e eficiente.
            </>
          ),
        },
        {
          title: "Lei de Fitts (Botão Voltar ao Topo)",
          image: usabImage3,
          imageAlt: "Botão flutuante de voltar ao topo posicionado no canto inferior da tela.",
          description: (
            <>
              Focando na &quot;Eficiência&quot; (recursos despendidos), o botão flutuante atua como um acelerador. Ele
              reduz o esforço motor de rolar a página inteira de volta, otimizando o tempo da tarefa.
            </>
          ),
        },
        {
          title: "Consistência (Cards de Leitura)",
          image: usabImage4,
          imageAlt: "Grid de cards de leitura com layout consistente entre os itens.",
          description: (
            <>
              A &quot;Apreensibilidade&quot; (facilidade de aprendizado) é reforçada pela repetição de padrões. Todos os
              cards seguem o mesmo layout, permitindo que o usuário aprenda a interface uma vez e aplique o conhecimento
              sempre.
            </>
          ),
        },
        {
          title: "Feedback de Estado (Hover)",
          image: "/usabilidade/usabilidade-05.webm",
          imageAlt: "Animação do estado hover em um botão, indicando interatividade.",
          description: (
            <>
              A &quot;Operacionalidade&quot; exige que o usuário saiba que o sistema respondeu. Mudanças visuais em
              botões (hover/active) confirmam que o elemento é interativo, prevenindo erros e incertezas.
            </>
          ),
        },
        {
          title: "Saída de Emergência (Erro 404)",
          image: usabImage6,
          imageAlt: "Página de erro 404 com opção clara para voltar para a navegação principal.",
          description: (
            <>
              Para manter a &quot;Satisfação&quot; mesmo em caso de erro, a página 404 oferece rotas de fuga claras
              (&quot;Voltar&quot;). Isso evita que o usuário se sinta preso (Dead End) e reduz a frustração.
            </>
          ),
        },
      ]}
    />
  );
};

export default UsabilityExamplesSection;


