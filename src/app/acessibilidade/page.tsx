import type { Metadata } from "next";
import AccessibilityTemplate from "@/components/templates/AccessibilityTemplate";

export const metadata: Metadata = {
  title: "Acessibilidade na Prática | devXperience - Acessibilidade Web para Devs",
  description:
    "Guia prático de Acessibilidade Web para desenvolvedores: foco em teclado, contraste, semântica HTML, leitores de tela e conformidade com WCAG 2.2, ABNT NBR 17225 e LBI.",
  keywords: [
    "Acessibilidade Web",
    "WCAG 2.2",
    "Inclusão Digital",
    "Desenvolvimento Front-end",
    "Lei Brasileira de Inclusão",
    "ABNT NBR 17225",
    "WAI-ARIA",
    "Experiência do Usuário",
    "Usabilidade",
    "Front-end Acessível",
    "Leitores de Tela",
    "Teclado",
    "Contraste de Cores",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/acessibilidade",
    title: "Acessibilidade na Prática | devXperience - Acessibilidade Web para Devs",
    description:
      "Aprenda a desenvolver interfaces realmente inclusivas, com foco em navegação por teclado, contraste, estrutura de headings, texto alternativo e leitores de tela, alinhado a WCAG 2.2 e ABNT NBR 17225.",
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
      "Acessibilidade Web para devs: exemplos de foco visível, contraste, semântica HTML e textos alternativos, com base em WCAG 2.2, ABNT NBR 17225 e Lei Brasileira de Inclusão.",
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


