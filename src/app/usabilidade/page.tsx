import type { Metadata } from "next";
import UsabilityTemplate from "@/components/templates/UsabilityTemplate";

export const metadata: Metadata = {
  title: "Usabilidade na Prática | devXperience - Usabilidade Web para Devs",
  description:
    "Não basta funcionar, tem que ser fácil de usar. Guia prático de Usabilidade para desenvolvedores: eficácia, eficiência e satisfação aplicadas ao front-end, com base nas normas ISO 9241-11 e ISO/IEC 9126-1.",
  keywords: [
    "Usabilidade",
    "Usabilidade Web",
    "ISO 9241-11",
    "ISO 9126-1",
    "Eficácia",
    "Eficiência",
    "Satisfação",
    "Experiência do Usuário",
    "Engenharia de Software",
    "Qualidade de Software",
    "Heurísticas de Usabilidade",
    "Heurísticas de Nielsen",
    "Avaliação Heurística",
    "Teste de Usabilidade",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/usabilidade",
    title: "Usabilidade na Prática | devXperience - Usabilidade Web para Devs",
    description:
      "Não basta funcionar, tem que ser fácil de usar. Aprenda a projetar interfaces fáceis de aprender e operar, reduzindo a carga cognitiva e aumentando a eficiência das tarefas do usuário.",
    siteName: "devXperience",
    images: [
      {
        url: "https://www.devxperience.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Usabilidade na Prática - devXperience",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usabilidade na Prática | devXperience",
    description:
      "Usabilidade Web para devs: entenda eficácia, eficiência e satisfação na prática, apoiado em ISO 9241-11 e ISO 9126-1.",
    images: ["https://www.devxperience.com.br/og-image.png"],
  },
  alternates: {
    canonical: "https://www.devxperience.com.br/usabilidade",
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

export default function UsabilidadePage() {
  return <UsabilityTemplate />;
}


