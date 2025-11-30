import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const IconButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  minWidth: "2rem",
  minHeight: "2rem",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "transparent",
  color: "#261D1D",
  cursor: "pointer",
  flexShrink: 0,
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  "&[data-devmode-highlight='true']": {
    cursor: "help",
  },
  "&[data-devmode-highlight='true']:hover": {
    cursor: "help",
    outline: "3px dashed rgba(0, 0, 0, 1)",
    outlineOffset: "6px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  "&[data-devmode-highlight='true']:focus-visible": {
    cursor: "help",
    outline: "3px dashed rgba(0, 0, 0, 1)",
    outlineOffset: "6px",
  },
  "&[data-devmode-highlight='true']:focus-within": {
    cursor: "help",
    outline: "3px dashed rgba(0, 0, 0, 1)",
    outlineOffset: "6px",
  },
  // Sobrescreve o estilo do dark mode para manter o pontilhado escuro
  [`.${darkTheme} &[data-devmode-highlight='true']:hover`]: {
    outline: "3px dashed rgba(0, 0, 0, 1)",
  },
  [`.${darkTheme} &[data-devmode-highlight='true']:focus-visible`]: {
    outline: "3px dashed rgba(0, 0, 0, 1)",
  },
  [`.${darkTheme} &[data-devmode-highlight='true']:focus-within`]: {
    outline: "3px dashed rgba(0, 0, 0, 1)",
  },
  "& svg": {
    display: "block",
    width: "100%",
    height: "100%",
    transition: "transform 150ms ease",
  },
  "&[data-expanded='true'] svg": {
    transform: "rotate(0deg)",
  },
  "&[data-expanded='false'] svg": {
    transform: "rotate(180deg)",
  },
  [`.${darkTheme} &`]: {
    color: "#261D1D",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  },
});

