import type { Metadata } from "next";
import UXTemplate from "@/components/templates/UXTemplate";

export const metadata: Metadata = {
  title: "UX na Prática | devXperience - Experiência do Usuário para Desenvolvedores",
  description:
    "Aprenda UX na prática: engenharia de requisitos, decisões de design que impactam código e como criar produtos que resolvem problemas reais. Guia completo com exemplos práticos, boas práticas e referências acadêmicas baseadas em ISO 9241-210.",
  keywords: [
    "UX Design",
    "Experiência do Usuário",
    "UX Engineering",
    "Design de Interação",
    "ISO 9241-210",
    "Arquitetura de Informação",
    "Design Emocional",
    "Design Centrado no Usuário",
    "Front-end Development",
    "Engenharia de Software",
    "Interface Design",
    "User Experience",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/ux",
    title: "UX na Prática | devXperience - Experiência do Usuário para Desenvolvedores",
    description:
      "UX não é apenas sobre deixar a tela bonita; é sobre engenharia de requisitos e eficiência. Descubra como decisões de design impactam a estrutura do seu código.",
    siteName: "devXperience",
    images: [
      {
        url: "https://www.devxperience.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "UX na Prática - devXperience",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "UX na Prática | devXperience",
    description:
      "Aprenda UX na prática: engenharia de requisitos e como criar produtos que resolvem problemas reais.",
    images: ["https://www.devxperience.com.br/og-image.png"],
  },
  alternates: {
    canonical: "https://www.devxperience.com.br/ux",
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

export default function UXPage() {
  return (
    <UXTemplate />
  );
}


