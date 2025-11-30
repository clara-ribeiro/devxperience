import { styled } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const BulletPointsListContainer = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "2.22rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
  width: "100%",
  "@lg": {
    gap: "3.33rem",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

