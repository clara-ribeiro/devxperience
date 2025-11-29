import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/components/organisms/Header/styles";

export const StyledThemeToggleWrapper = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

