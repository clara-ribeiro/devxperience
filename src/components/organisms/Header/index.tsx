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
  Actions,
  IconButton,
  MobileOnly,
  MobileMenuOverlay,
  MobileNavList,
  ToggleButton,
  DesktopOnly,
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

const DEFAULT_NAV_LINKS: HeaderNavLink[] = [
  { href: "/ux", label: "UX" },
  { href: "/usabilidade", label: "Usabilidade" },
  { href: "/acessibilidade", label: "Acessibilidade" },
  { href: "/leituras", label: "Leituras" },
];

export const Header: React.FC<HeaderProps> = ({ links = DEFAULT_NAV_LINKS }) => {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useHeaderTheme();
  const [menuOpen, setMenuOpen] = React.useState(false);

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
      return (
        <NavLink
          key={href}
          href={href}
          aria-label={ariaLabel}
          data-selected={selected}
          aria-current={selected ? "page" : undefined}
          onClick={handleClick}
        >
          {label}
        </NavLink>
      );
    });
  };

  return (
    <Bar>
      <Inner>
        <CenterLogo>
          <Link href="/" aria-label="Página inicial">
            {isDark ? (
              <Image src={IconLogoDarkMode} alt="devXperience" width={44} height={48} />
            ) : (
              <Image src={IconLogoLightMode} alt="devXperience" width={44} height={48} />
            )}
          </Link>
        </CenterLogo>

        <Nav aria-label="Navegação principal">{renderLinks()}</Nav>

        <Actions>
          <ToggleButton
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
            title={isDark ? "Modo claro" : "Modo escuro"}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </ToggleButton>

          <DesktopOnly>
            <IconButton type="button" aria-label="Buscar" title="Buscar">
              <SearchIcon />
            </IconButton>
            <IconButton type="button" aria-label="Dev mode" title="Dev mode">
              <DevModeIcon />
            </IconButton>
          </DesktopOnly>

          <MobileOnly>
            <IconButton
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-controls="mobile-primary-navigation"
              aria-expanded={menuOpen}
              title={menuOpen ? "Fechar menu" : "Abrir menu"}
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

