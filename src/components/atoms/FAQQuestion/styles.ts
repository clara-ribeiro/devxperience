import { styled, darkTheme } from "@/styles/stitches.config";

export const StyledFAQQuestion = styled("h3", {
  fontFamily: "$heading",
  fontSize: "1.11rem",
  fontWeight: 700,
  lineHeight: 1.5,
  color: "#261D1D",
  margin: 0,
  flex: 1,
  textAlign: "left",
  [`.${darkTheme} &`]: {
    color: "#261D1D",
  },
  "@md": {
    fontSize: "1.22rem",
  },
});

