import { styled } from "@/styles/stitches.config";

export const StyledIconButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  minWidth: "2.44rem", // ~44px
  minHeight: "2.44rem",
  cursor: "inherit",
  lineHeight: 0,
  color: "inherit",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  // Ensure SVG scales to button size while keeping viewBox proportions
  "& > svg": {
    width: "2.44rem",
    height: "2.44rem",
  },
});

