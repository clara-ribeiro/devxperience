import { styled } from "@/styles/stitches.config";

export const StyledActions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.89rem",
  width: "100%",
  maxWidth: "22rem",
  "& > button": {
    width: "100%",
  },
  "@sm": {
    maxWidth: "26rem",
  },
  "@lg": {
    flexDirection: "row",
    maxWidth: "100%",
    "& > button": {
      width: "12.56rem", // ~226px
    },
  },
});

