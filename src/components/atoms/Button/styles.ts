import { styled } from "@/styles/stitches.config";
import type { VariantProps } from "@stitches/react";

export const StyledButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$heading",
  fontWeight: 700,
  fontSize: "1rem",
  padding: "0.89rem 1.22rem",
  borderRadius: "0.56rem",
  borderWidth: "0.11rem",
  borderStyle: "solid",
  cursor: "pointer",
  transition: "transform 150ms ease, box-shadow 150ms ease",
  backgroundColor: "transparent",
  borderColor: "currentColor",
  color: "inherit",
  "&:focus-visible": {
    outline: "0.11rem solid $focus",
    outlineOffset: "0.11rem",
  },
  "&:hover": {
    transform: "translateY(-0.11rem)",
    boxShadow: "$md",
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "var(--btn-bg, #261D1D)",
        color: "var(--btn-text, #F1DFD2)",
        borderColor: "var(--btn-border, var(--btn-bg, #261D1D))",
      },
      outline: {
        backgroundColor: "var(--btn-bg, transparent)",
        color: "var(--btn-text, #261D1D)",
        borderColor: "var(--btn-border, #261D1D)",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export type StyledButtonVariants = VariantProps<typeof StyledButton>;


