import { styled } from "@/styles/stitches.config";

export const StyledFilterButtons = styled("div", {
  display: "flex",
  gap: "$md",
  flexWrap: "wrap",
  justifyContent: "center",

  "@lg": {
    justifyContent: "flex-start",
  },
});

