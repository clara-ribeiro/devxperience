import { styled, darkTheme } from "@/styles/stitches.config";

export const StyledFAQAnswer = styled("p", {
  fontFamily: "$heading",
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "#261D1D",
  margin: 0,
  paddingTop: "1.11rem",
  overflow: "hidden",
  transition: "max-height 300ms ease, opacity 300ms ease, padding-top 300ms ease",
  "&[data-expanded='false']": {
    maxHeight: 0,
    paddingTop: 0,
    opacity: 0,
  },
  "&[data-expanded='true']": {
    maxHeight: "500px",
    opacity: 1,
  },
  [`.${darkTheme} &`]: {
    color: "#261D1D",
  },
});

