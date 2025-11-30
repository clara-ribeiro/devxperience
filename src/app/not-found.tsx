"use client";

import { ErrorPageContent } from "@/components/organisms/ErrorPageContent";
import { ErrorAction } from "@/components/molecules/ErrorActions";
import {
  ERROR_404_HEADING_METADATA,
  ERROR_404_ACTIONS_METADATA,
  ERROR_404_FOX_METADATA,
} from "@/components/organisms/ErrorPageContent/metadata";

export default function NotFound() {
  const actions: ErrorAction[] = [
    {
      label: "Voltar para a página anterior",
      type: "button",
      onClick: () => {
        if (typeof window !== "undefined") {
          window.history.back();
        }
      },
    },
    {
      label: "Ir para a página inicial",
      href: "/",
      type: "link",
    },
  ];

  return (
    <ErrorPageContent
      heading="Oops! Não encontramos o que você procurava"
      description="Essa página não está mais disponível. Tente voltar e seguir por outro caminho!"
      actions={actions}
      showIllustration={true}
      headingMetadata={ERROR_404_HEADING_METADATA}
      actionsMetadata={ERROR_404_ACTIONS_METADATA}
      illustrationMetadata={ERROR_404_FOX_METADATA}
    />
  );
}

