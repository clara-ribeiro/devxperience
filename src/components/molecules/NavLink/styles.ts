import { styled, darkTheme } from "@/styles/stitches.config";
import Link from "next/link";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledNavLink = styled(Link, {
  color: "$headerItemUnselectedLight",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  minHeight: "2.44rem",
  paddingLeft: "0.44rem",
  paddingRight: "0.44rem",
  transition: "text-decoration 150ms ease",
  "&:hover": {
    textDecoration: "underline",
    textUnderlineOffset: "0.22rem",
  },
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

