import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const StyledContainer = styled("div", {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#2B2424",
  padding: "2.22rem 1.78rem",
  
  [`.${darkTheme} &`]: {
    backgroundColor: "#1B1412",
  },
});

export const StyledContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "2.22rem",
  width: "100%",
});

export const StyledHeading = styled("h1", {
  fontFamily: "$heading",
  fontSize: "$h3",
  fontWeight: 700,
  color: "#E0DEDC",
  margin: 0,
  lineHeight: 1.2,
  
  "@md": {
    fontSize: "$h2",
  },
  
  [`.${darkTheme} &`]: {
    color: "#F6ECE7",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const StyledDescription = styled("p", {
  fontFamily: "$body",
  fontSize: "$h4",
  color: "#E0DEDC",
  margin: 0,
  lineHeight: 1.5,
  
  "@md": {
    fontSize: "$h3",
  },
  
  [`.${darkTheme} &`]: {
    color: "rgba(246, 236, 231, 0.9)",
  },
});

export const StyledSeparator = styled("hr", {
  width: "100%",
  maxWidth: "400px",
  height: "1px",
  border: "none",
  backgroundColor: "#E0DEDC",
  margin: 0,
  
  [`.${darkTheme} &`]: {
    backgroundColor: "rgba(246, 236, 231, 0.5)",
  },
});

