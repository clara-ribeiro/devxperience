import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import Link from "next/link";

export const StyledCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$md",
  flex: 1,
});

export const StyledCardTag = styled("div", {
  alignSelf: "center",
  marginTop: "-1.33rem",
  position: "relative",
  zIndex: 1,
  maxWidth: "100%",
});

export const StyledCardTitle = styled("h3", {
  fontFamily: "$heading",
  fontSize: "$h4",
  fontWeight: 700,
  color: "#F1DFD2",
  margin: 0,
  lineHeight: 1.3,
  
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
});

export const StyledCardAuthor = styled("p", {
  fontFamily: "$body",
  fontSize: "$body2",
  color: "#E7C19A",
  margin: 0,
  fontStyle: "italic",
  
  [`.${darkTheme} &`]: {
    color: "#E7C19A",
  },
});

export const StyledCardDescription = styled("p", {
  fontFamily: "$body",
  fontSize: "$body2",
  color: "#F1DFD2",
  margin: 0,
  lineHeight: 1.6,
  flex: 1,
  
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

const baseLinkStyles = {
  fontFamily: "$heading",
  fontSize: "$body2",
  color: "#E7C19A",
  textDecoration: "underline",
  textUnderlineOffset: "0.22rem",
  alignSelf: "flex-start",
  transition: "opacity 150ms ease",
  
  "&:hover": {
    opacity: 0.8,
  },
  
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
    borderRadius: "0.22rem",
  },
  
  [`.${darkTheme} &`]: {
    color: "#E7C19A",
  },
  
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
};

export const StyledCardLink = styled(Link, baseLinkStyles);

export const StyledCardExternalLink = styled("a", baseLinkStyles);

