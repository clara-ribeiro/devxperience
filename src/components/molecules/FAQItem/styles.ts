import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const FAQItemContainer = styled("div", {
  backgroundColor: "#FFFFFF",
  borderRadius: "0.67rem",
  border: "1px solid rgba(98, 65, 65, 0.2)",
  padding: "1.33rem",
  display: "flex",
  flexDirection: "column",
  gap: "0",
  transition: "box-shadow 150ms ease, border-color 150ms ease",
  "&:hover": {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#FFFFFF",
    border: "1px solid rgba(98, 65, 65, 0.2)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const FAQHeader = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1.33rem",
  cursor: "pointer",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
    borderRadius: "0.33rem",
  },
});

