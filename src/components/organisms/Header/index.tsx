"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Bar,
  Inner,
  DesktopNav as Nav,
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
import { HeaderProps, HeaderNavLink as HeaderNavLinkType } from "./types";
import { useDevMode } from "@/context/dev-mode-context";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import {
  NAV_DEV_METADATA,
  NAV_TEXT_METADATA,
  ACTION_ICONS_METADATA,
  LOGO_METADATA,
  THEME_TOGGLE_METADATA,
  CONTAINER_METADATA,
} from "./metadata";
import { HeaderNavLink } from "./HeaderNavLink";

const DEV_TARGET_ATTR = "data-devmode-target";

const DEFAULT_NAV_LINKS: HeaderNavLinkType[] = [
  { href: "/ux", label: "UX" },
  { href: "/usabilidade", label: "Usabilidade" },
  { href: "/acessibilidade", label: "Acessibilidade" },
  { href: "/leituras", label: "Leituras" },
];

export const Header: React.FC<HeaderProps> = ({ links = DEFAULT_NAV_LINKS }) => {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useHeaderTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isDevMode, toggleDevMode } = useDevMode();

  // Dev Mode interactions for each element
  const containerInteraction = useDevModeInteraction(CONTAINER_METADATA);
  const logoInteraction = useDevModeInteraction(LOGO_METADATA);
  const navTextInteraction = useDevModeInteraction(NAV_TEXT_METADATA);
  const themeToggleInteraction = useDevModeInteraction(THEME_TOGGLE_METADATA);
  const actionIconsInteraction = useDevModeInteraction(ACTION_ICONS_METADATA);
  const neutralInteraction = useDevModeInteraction(null);

  const devModeIconColors = React.useMemo(() => {
    if (!isDevMode) return null;
    return isDark
      ? { bgColor: "#E7C19A", glyphColor: "#542918" }
      : { bgColor: "#261D1D", glyphColor: "#E7C19A" };
  }, [isDevMode, isDark]);

  const isSelected = (href: string) => pathname === href;
  const toggleMenu = () => setMenuOpen((v) => !v);

  const renderLinks = (onSelect?: () => void) => {
    return links.map(({ href, label, ariaLabel }) => {
      const selected = isSelected(href);
      const metadata = selected ? NAV_DEV_METADATA : NAV_TEXT_METADATA;
      return (
        <HeaderNavLink
          key={href}
          href={href}
          label={label}
          ariaLabel={ariaLabel}
          selected={selected}
          metadata={metadata}
          onClick={onSelect}
        />
      );
    });
  };

  return (
    <Bar
      data-devmode-highlight={isDevMode ? "true" : undefined}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) =>
        containerInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
      }
      onMouseLeave={containerInteraction.hideMetadataTooltip}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (!isDevMode) return;
        const target = event.target as HTMLElement;
        if (target.closest(`[${DEV_TARGET_ATTR}]`)) return;
        containerInteraction.handleDevInteraction(event);
      }}
      style={{ cursor: containerInteraction.getCursor() }}
    >
      <Inner>
        <CenterLogo
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={LOGO_METADATA.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
            logoInteraction.showMetadataTooltip(event.currentTarget)
          }
          onMouseLeave={logoInteraction.hideMetadataTooltip}
          onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
            logoInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
          }
          onBlurCapture={logoInteraction.hideMetadataTooltip}
          style={{ cursor: logoInteraction.getCursor() }}
        >
          <LogoLink
            href="/"
            aria-label="Página inicial"
            onClick={(event: React.SyntheticEvent) => {
              if (logoInteraction.handleDevInteraction(event)) return;
            }}
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={LOGO_METADATA.target}
            style={{ cursor: logoInteraction.getCursor() }}
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
            navTextInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
          }
          onMouseLeave={navTextInteraction.hideMetadataTooltip}
          onFocusCapture={(event: React.FocusEvent<HTMLElement>) =>
            navTextInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
          }
          onBlurCapture={navTextInteraction.hideMetadataTooltip}
          style={{ cursor: navTextInteraction.getCursor() }}
        >
          {renderLinks()}
        </Nav>

        <Actions>
          <ThemeToggleWrapper
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={THEME_TOGGLE_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
              themeToggleInteraction.showMetadataTooltip(event.currentTarget)
            }
            onMouseLeave={themeToggleInteraction.hideMetadataTooltip}
            onFocusCapture={(event: React.FocusEvent<HTMLDivElement>) =>
              themeToggleInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
            }
            onBlurCapture={themeToggleInteraction.hideMetadataTooltip}
            style={{ cursor: isDevMode ? themeToggleInteraction.getCursor() : "pointer" }}
          >
            <ToggleButton
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (themeToggleInteraction.handleDevInteraction(event)) return;
                toggleTheme();
              }}
              aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
              title={isDark ? "Modo claro" : "Modo escuro"}
              data-devmode-highlight={isDevMode ? "true" : undefined}
              style={{ cursor: themeToggleInteraction.getCursor() }}
            >
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </ToggleButton>
          </ThemeToggleWrapper>

          <DesktopOnly
            data-devmode-highlight={isDevMode ? "true" : undefined}
            data-devmode-target={ACTION_ICONS_METADATA.target}
            onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
              actionIconsInteraction.showMetadataTooltip(event.currentTarget)
            }
            onMouseLeave={actionIconsInteraction.hideMetadataTooltip}
            onFocus={(event: React.FocusEvent<HTMLDivElement>) =>
              actionIconsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
            }
            onBlur={actionIconsInteraction.hideMetadataTooltip}
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              actionIconsInteraction.handleDevInteraction(event);
            }}
            style={{ cursor: isDevMode ? actionIconsInteraction.getCursor() : "pointer" }}
          >
            <IconButton
              type="button"
              aria-label="Buscar"
              title="Buscar"
              style={{ cursor: isDevMode ? actionIconsInteraction.getCursor() : "pointer" }}
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
              style={{ cursor: actionIconsInteraction.getCursor() }}
            >
              <DevModeIcon {...(devModeIconColors ?? {})} />
            </IconButton>
          </DesktopOnly>

          <MobileOnly style={{ cursor: neutralInteraction.getCursor() }}>
            <IconButton
              type="button"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (neutralInteraction.handleNeutralInteraction(event)) return;
                toggleMenu();
              }}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-controls="mobile-primary-navigation"
              aria-expanded={menuOpen}
              title={menuOpen ? "Fechar menu" : "Abrir menu"}
              style={{ cursor: neutralInteraction.getCursor() }}
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
