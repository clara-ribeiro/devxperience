import type { Metadata } from "next";
import { Raleway, Josefin_Slab } from "next/font/google";
import "./globals.css";
import { globalStyles, darkTheme } from "@/styles/stitches.config";
import { ThemeProvider } from "@/context/theme-context";
import { DevModeProvider } from "@/context/dev-mode-context";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import DevModeHelpFab from "@/components/organisms/DevModeHelpFab";
import StitchesRegistry from "./stitches-registry";

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
  title: "devXperience",
  description: "Conteúdo educativo para devs sobre UX, usabilidade e acessibilidade.",
};

// Inline script to set theme before hydration (avoids flash)
const themeScript = `
(function() {
  try {
    const storageKey = 'dx_theme';
    const classNameDark = '${darkTheme}';
    const root = document.documentElement;
    const stored = localStorage.getItem(storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === 'dark' : prefersDark;
    root.classList.toggle(classNameDark, shouldUseDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  globalStyles();
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
