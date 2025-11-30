import { styled } from "@/styles/stitches.config";

export const StyledPillarCardsGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$2xl",
  width: "100%",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

