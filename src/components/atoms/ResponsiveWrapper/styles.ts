import { styled } from "@/styles/stitches.config";

export const StyledResponsiveWrapper = styled("div", {
  variants: {
    variant: {
      mobileOnly: {
        display: "inline-flex",
        "@lg": {
          display: "none",
        },
      },
      desktopOnly: {
        display: "none",
        "@lg": {
          display: "inline-flex",
          alignItems: "center",
        },
      },
      tabletOnly: {
        display: "none",
        "@md": {
          display: "inline-flex",
        },
        "@lg": {
          display: "none",
        },
      },
    },
  },
  defaultVariants: {
    variant: "mobileOnly",
  },
});

