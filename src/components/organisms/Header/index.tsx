"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Bar,
  Inner,
  DesktopNav as Nav,
  NavLink,
  CenterLogo,
  LogoLink,
  Actions,
  IconButton,
  MobileOnly,
  MobileMenuOverlay,
  MobileNavList,
  ToggleButton,
  DesktopOnly,
  ThemeToggleWrapper,
} from "./styles";

import SearchIcon from "@/components/icons/SearchIcon";
import DevModeIcon from "@/components/icons/DevModeIcon";
import LightModeIcon from "@/components/icons/LightModeIcon";
import DarkModeIcon from "@/components/icons/DarkModeIcon";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import IconLogoLightMode from "@/components/icons/IconLogoLightMode.svg";
import IconLogoDarkMode from "@/components/icons/IconLogoDarkMode.svg";
import { useHeaderTheme } from "./hooks";
import { HeaderProps, HeaderNavLink } from "./types";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";

const DEV_TARGET_ATTR = 'data-devmode-target';

const DEFAULT_NAV_LINKS: HeaderNavLink[] = [
  { href: "/ux", label: "UX" },
  { href: "/usabilidade", label: "Usabilidade" },
  { href: "/acessibilidade", label: "Acessibilidade" },
  { href: "/leituras", label: "Leituras" },
];

const NAV_DEV_METADATA: DevModeMetadata = {
  target: "Links de Navegação (Menu)",
  title: "Status do Sistema e Proximidade",
  nielsenHeuristic: "#1: Visibilidade do Status do Sistema",
  explanation:
    "O sublinhado informa onde o usuário está. O espaçamento generoso aplica a Lei da Proximidade da Gestalt, agrupando o menu logicamente e evitando cliques acidentais.",
  academicRef: "Norman, D. A. (2013). The Design of Everyday Things.",
  wcag: null,
};

const NAV_TEXT_METADATA: DevModeMetadata = {
  target: "Itens de Navegação (Fonte 18px)",
  title: "Legibilidade e Navegabilidade",
  nielsenHeuristic: "#7: Flexibilidade e Eficiência de Uso",
  explanation:
    "O uso de fonte 18px (acima do padrão 16px) melhora significativamente a legibilidade e a velocidade de escaneamento. Além disso, cria uma área de clique maior, reduzindo o esforço motor necessário para interagir com o menu.",
  academicRef: "Bulas, M. (2019). 'The optimal font size for web readability'.",
  wcag: "WCAG 1.4.4 (Resize text) e 1.4.1 (Distinguishable Content)",
};



const ACTION_ICONS_METADATA: DevModeMetadata = {
  target: "Ícones de Ação (Busca, Code)",
  title: "Lei de Fitts e Áreas de Toque",
  nielsenHeuristic: null,
  explanation:
    "A área clicável respeita o mínimo de 44x44px (touch target) para acessibilidade motora, mesmo que o ícone visual seja menor.",
  academicRef: "Google Material Design Guidelines (Touch targets).",
  wcag: "WCAG 2.5.5 (Target Size)",
};

const LOGO_METADATA: DevModeMetadata = {
  target: "Logotipo (Raposa)",
  title: "Convenções de Navegação",
  nielsenHeuristic: "#4: Consistência e Padrões",
  explanation:
    "Seguindo a convenção web universal (Jakob's Law), o logo sempre retorna à Home, reduzindo a carga cognitiva de procurar um botão 'Início'.",
  academicRef: "Krug, S. (2014). Don't Make Me Think.",
  wcag: null,
};

const THEME_TOGGLE_METADATA: DevModeMetadata = {
  target: "Theme Toggle (Sol/Lua)",
  title: "Controle do Usuário e Foco",
  nielsenHeuristic: "#3: Controle e Liberdade do Usuário",
  explanation:
    "Permite acomodação visual (ex: fotofobia). O anel de foco visível ao redor do ícone é essencial para navegação via teclado.",
  academicRef: null,
  wcag: "WCAG 2.4.7 (Focus Visible)",
};

const CONTAINER_METADATA: DevModeMetadata = {
  target: "Container Geral/Background",
  title: "Contraste e Safe Margins",
  nielsenHeuristic: "Estética e Design Minimalista",
  explanation:
    "Fundo escuro com fonte clara garante alto contraste. As margens laterais (Safe Margins) evitam que o conteúdo cole nas bordas, facilitando o escaneamento.",
  academicRef: "Mullet, K., & Sano, D. (1995). Designing Visual Interfaces.",
  wcag: "WCAG 1.4.3 (Contrast)",
};

export const Header: React.FC<HeaderProps> = ({ links = DEFAULT_NAV_LINKS }) => {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useHeaderTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isDevMode, toggleDevMode, showTooltip, openInteraction } = useDevMode();
  const getCursor = React.useCallback(
    (metadata?: DevModeMetadata | null) => {
      if (!isDevMode) return undefined;
      return metadata ? "help" : "default";
    },
    [isDevMode],
  );

  const showMetadataTooltip = React.useCallback(
    (element: HTMLElement | null, metadata: DevModeMetadata) => {
      if (!isDevMode || !element) return;
      const rect = element.getBoundingClientRect();
      showTooltip({
        text: metadata.title,
        x: rect.left + rect.width / 2,
        y: rect.bottom,
      });
    },
    [isDevMode, showTooltip],
  );

  const hideMetadataTooltip = React.useCallback(() => {
    if (!isDevMode) return;
    showTooltip(null);
  }, [isDevMode, showTooltip]);

  const handleDevInteraction = React.useCallback(
    (event: React.SyntheticEvent, metadata: DevModeMetadata) => {
      if (!isDevMode) return false;
      event.preventDefault();
      event.stopPropagation();
      openInteraction(metadata);
      return true;
    },
    [isDevMode, openInteraction],
  );

  const isSelected = (href: string) => pathname === href;
  const toggleMenu = () => setMenuOpen((v) => !v);
  const renderLinks = (onSelect?: () => void) => {
    const handleClick = onSelect
      ? () => {
          onSelect();
        }
      : undefined;

    return links.map(({ href, label, ariaLabel }) => {
      const selected = isSelected(href);
      const metadata = selected ? NAV_DEV_METADATA : NAV_TEXT_METADATA;

      const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (!isDevMode) return;
        showMetadataTooltip(event.currentTarget, metadata);
      };

      const handleFocus = (event: React.FocusEvent<HTMLAnchorElement>) => {
        if (!isDevMode) return;
        showMetadataTooltip(event.currentTarget, metadata);
      };

      const hideTooltip = () => {
        if (!isDevMode) return;
        hideMetadataTooltip();
      };

      const interceptInteraction = (event: React.SyntheticEvent) => {
        return handleDevInteraction(event, metadata);
      };

      const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (isDevMode) {
          interceptInteraction(event);
          return;
        }
        const intercepted = interceptInteraction(event);
        if (!handleClick) return;
        if (!intercepted) {
          handleClick();
        }
      };

      const handleKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (!isDevMode) return;
        if (event.key === "Enter" || event.key === " ") {
          interceptInteraction(event);
        }
      };

      const cursor = getCursor(metadata);
      return (
        <NavLink
          key={href}
          href={href}
          aria-label={ariaLabel}
          data-selected={selected}
          aria-current={selected ? "page" : undefined}
          data-devmode-target={metadata.target}
          onClick={handleLinkClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={hideTooltip}
          onFocus={handleFocus}
          onBlur={hideTooltip}
          onKeyDown={handleKeyDown}
          data-devmode-highlight={isDevMode ? "true" : undefined}
          style={cursor ? { cursor } : undefined}
        >
          {label}
        </NavLink>
      );
    });
  };

  const devModeIconColors = React.useMemo(() => {
    if (!isDevMode) return null;
    return isDark
      ? { bgColor: "#E7C19A", glyphColor: "#542918" }
      : { bgColor: "#261D1D", glyphColor: "#E7C19A" };
  }, [isDevMode, isDark]);

  const handleActionIconsClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (handleDevInteraction(event, ACTION_ICONS_METADATA)) return;
    },
    [handleDevInteraction],
  );

  const handleNeutralInteraction = React.useCallback(
    (event: React.SyntheticEvent) => {
      if (!isDevMode) return false;
      event.preventDefault();
      event.stopPropagation();
      return true;
    },
    [isDevMode],
  );

  return (
    <Bar
      data-devmode-highlight={isDevMode ? "true" : undefined}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) =>
        showMetadataTooltip(event.currentTarget as HTMLElement, CONTAINER_METADATA)
      }
      onMouseLeave={hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (!isDevMode) return;
        const target = event.target as HTMLElement;
        if (target.closest(`[${DEV_TARGET_ATTR}]`)) return;
        handleDevInteraction(event, CONTAINER_METADATA);
      }}
      style={{ cursor: getCursor(CONTAINER_METADATA) }}
    >
      <Inner>
        <CenterLogo
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={LOGO_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => showMetadataTooltip(event.currentTarget, LOGO_METADATA)}
          onMouseLeave={hideMetadataTooltip}
          onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
            showMetadataTooltip(event.currentTarget as HTMLElement, LOGO_METADATA)
          }
          onBlurCapture={hideMetadataTooltip}
          style={{ cursor: getCursor(LOGO_METADATA) }}
        >
          <LogoLink
            href="/"
            aria-label="Página inicial"
            onClick={(event: React.SyntheticEvent) => {
              if (handleDevInteraction(event, LOGO_METADATA)) return;
            }}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={LOGO_METADATA.target}
            style={{ cursor: getCursor(LOGO_METADATA) }}
          >
            {isDark ? (
              <Image src={IconLogoDarkMode} alt="devXperience" width={44} height={48} />
            ) : (
              <Image src={IconLogoLightMode} alt="devXperience" width={44} height={48} />
            )}
          </LogoLink>
        </CenterLogo>

        <Nav
          aria-label="Navegação principal"
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={NAV_TEXT_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLElement>) =>
            showMetadataTooltip(event.currentTarget as HTMLElement, NAV_TEXT_METADATA)
          }
          onMouseLeave={hideMetadataTooltip}
          onFocusCapture={(event: React.FocusEvent<HTMLElement>) =>
            showMetadataTooltip(event.currentTarget as HTMLElement, NAV_TEXT_METADATA)
          }
          onBlurCapture={hideMetadataTooltip}
          style={{ cursor: getCursor(NAV_TEXT_METADATA) }}
        >
          {renderLinks()}
        </Nav>

        <Actions>
          <ThemeToggleWrapper
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={THEME_TOGGLE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
              showMetadataTooltip(event.currentTarget, THEME_TOGGLE_METADATA)
            }
            onMouseLeave={hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
              showMetadataTooltip(event.currentTarget as HTMLElement, THEME_TOGGLE_METADATA)
            }
            onBlurCapture={hideMetadataTooltip}
            style={{ cursor: isDevMode ? getCursor(THEME_TOGGLE_METADATA) : "pointer" }}
          >
            <ToggleButton
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (handleDevInteraction(event, THEME_TOGGLE_METADATA)) return;
                toggleTheme();
              }}
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              title={isDark ? "Modo claro" : "Modo escuro"}
              data-devmode-highlight={isDevMode ? "true" : undefined}
              style={{ cursor: getCursor(THEME_TOGGLE_METADATA) }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </ToggleButton>
          </ThemeToggleWrapper>

          <DesktopOnly
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={ACTION_ICONS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
              showMetadataTooltip(event.currentTarget, ACTION_ICONS_METADATA)
            }
            onMouseLeave={hideMetadataTooltip}
            onFocus={(event: React.FocusEvent<HTMLDivElement>) =>
              showMetadataTooltip(event.currentTarget as HTMLElement, ACTION_ICONS_METADATA)
            }
            onBlur={hideMetadataTooltip}
            onClick={handleActionIconsClick}
            style={{ cursor: isDevMode ? getCursor(ACTION_ICONS_METADATA) : "pointer" }}
          >
            <IconButton
              type="button"
              aria-label="Buscar"
              title="Buscar"
              style={{ cursor: isDevMode ? getCursor(ACTION_ICONS_METADATA) : "pointer" }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              type="button"
              onClick={() => {
                toggleDevMode("header-cta");
              }}
              aria-label={isDevMode ? "Desativar Dev Mode" : "Ativar Dev Mode"}
              title={isDevMode ? "Dev Mode ativo" : "Dev Mode inativo"}
              aria-pressed={isDevMode}
              style={{ cursor: getCursor(ACTION_ICONS_METADATA) }}
            >
              <DevModeIcon {...(devModeIconColors ?? {})} />
            </IconButton>
          </DesktopOnly>

          <MobileOnly style={{ cursor: getCursor(null) }}>
            <IconButton
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (handleNeutralInteraction(event)) return;
                toggleMenu();
              }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-controls="mobile-primary-navigation"
              aria-expanded={menuOpen}
              title={menuOpen ? "Fechar menu" : "Abrir menu"}
              style={{ cursor: getCursor(null) }}
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </IconButton>
          </MobileOnly>
        </Actions>
      </Inner>

      {menuOpen ? (
        <MobileMenuOverlay aria-label="Menu de navegação" id="mobile-primary-navigation">
          <MobileNavList>{renderLinks(() => setMenuOpen(false))}</MobileNavList>
        </MobileMenuOverlay>
      ) : null}
    </Bar>
  );
};

export default Header;

