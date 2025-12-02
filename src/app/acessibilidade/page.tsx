import type { Metadata } from "next";
import AccessibilityTemplate from "@/components/templates/AccessibilityTemplate";

export const metadata: Metadata = {
  title: "Acessibilidade na Prática | devXperience - Interfaces Inclusivas para Todos",
  description:
    "A web é para todos. Entenda como aplicar acessibilidade na prática em projetos front-end, indo além da conformidade e eliminando barreiras invisíveis no código.",
  keywords: [
    "Acessibilidade Web",
    "WCAG",
    "Inclusão Digital",
    "Desenvolvimento Front-end",
    "Lei Brasileira de Inclusão",
    "ABNT NBR 17225",
    "WAI-ARIA",
    "Experiência do Usuário",
    "Usabilidade",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/acessibilidade",
    title: "Acessibilidade na Prática | devXperience - Interfaces Inclusivas para Todos",
    description:
      "Guia prático para desenvolver interfaces acessíveis, com foco em teclado, contraste, semântica HTML e leitores de tela.",
    siteName: "devXperience",
    images: [
      {
        url: "https://www.devxperience.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acessibilidade na Prática - devXperience",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acessibilidade na Prática | devXperience",
    description:
      "Aprenda a implementar acessibilidade digital de forma objetiva no front-end, apoiada em normas como WCAG e ABNT NBR 17225.",
    images: ["https://www.devxperience.com.br/og-image.png"],
  },
  alternates: {
    canonical: "https://www.devxperience.com.br/acessibilidade",
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

export default function AcessibilidadePage() {
  return (
    <AccessibilityTemplate />
  );
}


