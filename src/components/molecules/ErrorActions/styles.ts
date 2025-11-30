import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import Link from "next/link";

export const StyledActions = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.67rem",
  flexWrap: "wrap",
});

const baseActionStyles = {
  color: "#E0DEDC",
  textDecoration: "none",
  fontFamily: "$body",
  fontSize: "$body2",
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  transition: "text-decoration 150ms ease, opacity 150ms ease",
  
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "0.22rem",
    opacity: 0.9,
  },
  
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
    borderRadius: "0.22rem",
  },
  
  [`.${darkTheme} &`]: {
    color: "#F6ECE7",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
};

export const StyledActionLink = styled(Link, baseActionStyles);

export const StyledActionButton = styled("button", baseActionStyles);

export const StyledSeparator = styled("span", {
  color: "#E0DEDC",
  fontFamily: "$body",
  fontSize: "$body2",
  userSelect: "none",
  
  [`.${darkTheme} &`]: {
    color: "#F6ECE7",
  },
});

