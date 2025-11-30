import { styled, darkTheme } from "@/styles/stitches.config";
import Link from "next/link";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import { background } from "storybook/theming";

export const Bar = styled("header", {
  backgroundColor: "$headerBgLight",
  borderBottom: "1px solid $border",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  paddingTop: "0.89rem",
  paddingBottom: "0.89rem",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$headerBgDark",
    borderBottom: "1px solid rgba(231,193,154,0.25)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const Inner = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  gridTemplateAreas: "'logo . actions'",
  alignItems: "center",
  columnGap: "1rem",
  "@sm": {
    columnGap: "1.33rem",
  },
  "@lg": {
    gridTemplateColumns: "1fr auto 1fr",
    gridTemplateAreas: "'nav logo actions'",
  },
});

export const Nav = styled("nav", {
  display: "flex",
  alignItems: "center",
  gap: "2rem", // 36px
  fontFamily: "$body", // Josefin Slab
  fontSize: "$body1", // 18px
  lineHeight: 1.2,
  fontWeight: 600, // Semibold
  "@sm": {
    gap: "1.33rem",
  },
  "@media (max-width: 480px)": {
    gap: "1rem",
    overflowX: "auto",
  },
});

export const DesktopNav = styled(Nav, {
  display: "none",
  "@lg": {
    display: "flex",
    gridArea: "nav",
    justifyContent: "flex-start",
  },
});

export const NavLink = styled(Link, {
  color: "$headerItemUnselectedLight",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  minHeight: "2.44rem", // 44px min touch target
  paddingLeft: "0.44rem",
  paddingRight: "0.44rem",
  [`.${darkTheme} &`]: {
    color: "$headerItemUnselectedDark",
  },
  "&[data-selected='true']": {
    color: "$headerItemSelectedLight",
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "0.22rem",
    [`.${darkTheme} &`]: {
      color: "$headerItemSelectedDark",
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const CenterLogo = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gridArea: "logo",
  "@lg": {
    justifyContent: "center",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const LogoLink = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.5rem",
  height: "auto",
  borderRadius: "$md",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const Actions = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "2rem",
  color: "$headerItemUnselectedLight",
  gridArea: "actions",
  [`.${darkTheme} &`]: {
    color: "$headerItemUnselectedDark",
  },
});

export const IconButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  minWidth: "2.44rem", // ~44px
  minHeight: "2.44rem",
  cursor: "inherit",
  lineHeight: 0,
  color: "inherit",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  // Ensure SVG scales to button size while keeping viewBox proportions
  "& > svg": {
    width: "2.44rem",
    height: "2.44rem",
  },
});

export const MobileOnly = styled("div", {
  display: "inline-flex",
  "@lg": {
    display: "none",
  },
});

export const DesktopOnly = styled("div", {
  display: "none",
  "@lg": {
    display: "inline-flex",
    alignItems: "center",
    gap: "2rem",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
    outlineOffset: "4px",
  },
});

export const ThemeToggleWrapper = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const MobileMenuOverlay = styled("div", {
  // Render in-flow to empurrar o conteúdo para baixo e exibir todos os itens sem scroll interno
  position: "static",
  backgroundColor: "$headerBgLight",
  color: "$headerItemUnselectedLight",
  paddingTop: "1.33rem",
  paddingBottom: "1.33rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  width: "100%",
  boxShadow: "none",
  [`.${darkTheme} &`]: {
    backgroundColor: "$headerBgDark",
    color: "$headerItemUnselectedDark",
  },
});

export const MobileMenuHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const MobileNavList = styled("nav", {
  display: "flex",
  flexDirection: "column",
  // Separadores entre itens
  "& > a": {
    paddingTop: "0.67rem",
    paddingBottom: "0.67rem",
  },
  "& > a:not(:last-child)": {
    borderBottom: "1px solid $border",
  },
  fontFamily: "$body",
  fontSize: "$body1",
  fontWeight: 600,
});

export const ToggleButton = styled(IconButton, {
  "& > svg": {
    width: "2rem", // mobile/tablet: ~36px visual
    height: "2rem",
  },
  "@lg": {
    "& > svg": {
      width: "2.44rem", // desktop: 44px para igualar aos demais ícones
      height: "2.44rem",
    },
  },
});




