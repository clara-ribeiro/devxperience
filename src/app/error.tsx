"use client";

import { useEffect } from "react";
import { ErrorPageContent } from "@/components/organisms/ErrorPageContent";
import { ErrorAction } from "@/components/molecules/ErrorActions";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const actions: ErrorAction[] = [
    {
      label: "Atualizar página",
      type: "button",
      onClick: () => {
        reset();
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
      heading="Algo deu errado do nosso lado..."
      description="Nos desculpe pelo transtorno. Que tal tentar novamente?"
      actions={actions}
      showIllustration={true}
    />
  );
}

