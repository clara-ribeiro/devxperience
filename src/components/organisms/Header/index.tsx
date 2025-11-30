"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  Bar,
  Inner,
  DesktopNav as Nav,
  CenterLogo,
  Actions,
  MobileMenuOverlay,
  MobileNavList,
} from "./styles";

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

// Atoms
import { ResponsiveWrapper } from "@/components/atoms/ResponsiveWrapper";

// Molecules
import { LogoLink } from "@/components/molecules/LogoLink";
import { NavLink } from "@/components/molecules/NavLink";
import { ThemeToggleButton } from "@/components/molecules/ThemeToggleButton";
import { DevModeToggleButton } from "@/components/molecules/DevModeToggleButton";
import { SearchButton } from "@/components/molecules/SearchButton";
import { MobileMenuButton } from "@/components/molecules/MobileMenuButton";
import { ActionIconsGroup } from "@/components/molecules/ActionIconsGroup";

const DEV_TARGET_ATTR = "data-devmode-target";

const DEFAULT_NAV_LINKS: HeaderNavLinkType[] = [
  { href: "/ux", label: "UX" },
  { href: "/usabilidade", label: "Usabilidade" },
  { href: "/acessibilidade", label: "Acessibilidade" },
  { href: "/leituras", label: "Leituras" },
];

export const Header: React.FC<HeaderProps> = ({ links = DEFAULT_NAV_LINKS }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isDevMode } = useDevMode();

  // Dev Mode interactions for container and nav container
  const containerInteraction = useDevModeInteraction(CONTAINER_METADATA);
  const logoInteraction = useDevModeInteraction(LOGO_METADATA);
  const navTextInteraction = useDevModeInteraction(NAV_TEXT_METADATA);
  const neutralInteraction = useDevModeInteraction(null);

  const isSelected = (href: string) => pathname === href;
  const toggleMenu = () => setMenuOpen((v) => !v);

  const renderLinks = (onSelect?: () => void) => {
    return links.map(({ href, label, ariaLabel }) => {
      const selected = isSelected(href);
      const metadata = selected ? NAV_DEV_METADATA : NAV_TEXT_METADATA;
      return (
        <NavLink
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
      data-devmode-target={CONTAINER_METADATA.target}
      onMouseEnter={(event: React.MouseEvent<HTMLElement>) => {
        if (isDevMode) {
          containerInteraction.showMetadataTooltip(event.currentTarget as HTMLElement);
      }
      }}
      onMouseLeave={() => {
        if (isDevMode) {
          containerInteraction.hideMetadataTooltip();
        }
      }}
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
          <LogoLink metadata={LOGO_METADATA} />
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
          <ThemeToggleButton metadata={THEME_TOGGLE_METADATA} />

          <ActionIconsGroup>
            <SearchButton metadata={ACTION_ICONS_METADATA} />
            <DevModeToggleButton trigger="header-cta" />
          </ActionIconsGroup>

          <ResponsiveWrapper variant="mobileOnly" style={{ cursor: neutralInteraction.getCursor() }}>
            <MobileMenuButton
              isOpen={menuOpen}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                if (neutralInteraction.handleNeutralInteraction(event)) return;
                toggleMenu();
              }}
              ariaControls="mobile-primary-navigation"
            />
          </ResponsiveWrapper>
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
