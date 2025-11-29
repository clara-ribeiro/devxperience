import { styled } from "@/styles/stitches.config";

export const Container = styled("div", {
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "66.67rem", // ~1200px at 18px/rem
  variants: {
    padding: {
      section: {
        // section paddings
        paddingTop: "3.56rem",
        paddingBottom: "3.56rem",
        paddingLeft: "1.78rem",
        paddingRight: "1.78rem",
        "@lg": {
          paddingLeft: "4.44rem",
          paddingRight: "4.44rem",
        },
      },
      none: {
        padding: 0,
      },
    },
  },
  defaultVariants: {
    padding: "none",
  },
});


