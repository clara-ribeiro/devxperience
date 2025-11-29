import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledHeadingGroup = styled("h1", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "0.44rem",
  textTransform: "uppercase",
  margin: 0,
  color: "#542918",
  flex: "1 1 auto",
  height: "100%",
  [`.${darkTheme} &`]: {
    color: "#E7C19A",
  },
  textAlign: "center",
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const StyledHeadingDev = styled("span", {
  fontFamily: "$body",
  fontWeight: 600,
  lineHeight: 1,
  fontSize: "clamp(5rem, 26vw, 14.33rem)",
});

export const StyledHeadingXperience = styled("span", {
  fontFamily: "$body",
  fontWeight: 600,
  lineHeight: 0.1,
  fontSize: "clamp(2.22rem, 8vw, 4.5rem)",
  letterSpacing: "0.1em",
});

