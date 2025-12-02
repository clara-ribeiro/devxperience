import type { Metadata, Viewport } from "next";
import { Raleway, Josefin_Slab } from "next/font/google";
import { globalStyles } from "@/styles/stitches.config";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import StitchesRegistry from "./stitches-registry";
import DevModeHelpFab from "@/components/organisms/DevModeHelpFab";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const josefinSlab = Josefin_Slab({
  variable: "--font-josefin-slab",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "devXperience | Onde o código encontra o design",
  description:
    "Comunidade e guia prático para devs que querem criar interfaces mais humanas. Aprenda UX, usabilidade e acessibilidade diretamente no código com o Modo Dev interativo.",
  keywords: [
    "UX Engineering",
    "Acessibilidade Web",
    "Usabilidade",
    "Front-end",
    "Design System",
    "Modo Dev",
    "TCC Engenharia de Software",
  ],
  authors: [{ name: "Clara Sousa" }],
  openGraph: {
    type: "website",
    url: "https://www.devxperience.com.br/",
    title: "devXperience | Onde o código encontra o design",
    description:
      "Não é apenas sobre código, é sobre experiência. Ative o Modo Dev e descubra a teoria de UX por trás de cada componente da tela.",
    images: [
      {
        url: "https://www.devxperience.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "devXperience - Onde o código encontra o design",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3D2823",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="Comunidade e guia prático para devs que querem criar interfaces mais humanas. Aprenda UX, usabilidade e acessibilidade diretamente no código com o Modo Dev interativo."
        />
      </head>
      <body suppressHydrationWarning className={`${raleway.variable} ${josefinSlab.variable}`}>
        <StitchesRegistry>
          <ThemeProvider>
            <DevModeProvider>
            <Header />
            <main role="main">{children}</main>
            <Footer />
            <DevModeHelpFab />
            </DevModeProvider>
          </ThemeProvider>
        </StitchesRegistry>
      </body>
    </html>
  );
}
