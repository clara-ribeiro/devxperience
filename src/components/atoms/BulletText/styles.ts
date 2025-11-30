import { styled, darkTheme } from "@/styles/stitches.config";

export const StyledBulletText = styled("p", {
  fontFamily: "$heading",
  fontSize: "1.11rem",
  lineHeight: 1.5,
  color: "#542918",
  margin: 0,
  paddingTop: "0.44rem",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@md": {
    fontSize: "1.22rem",
  },
});

