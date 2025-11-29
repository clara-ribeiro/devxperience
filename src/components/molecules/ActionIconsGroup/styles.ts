import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/components/organisms/Header/styles";

export const StyledActionIconsGroup = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "2rem",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
    outlineOffset: "4px",
  },
});

