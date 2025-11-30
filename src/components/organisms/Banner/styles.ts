import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import backgroundImage from "./background.webp";

const bannerBackgroundUrl = `url(${backgroundImage.src})`;

export const Section = styled("section", {
  overflow: "hidden",
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#F1DFD2",
  backgroundImage: `${bannerBackgroundUrl}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#261D1D",
    backgroundImage: `${bannerBackgroundUrl}`,
  },
  "&[data-devmode-highlight='true']:hover": {
    outline: devModeHighlightStyles.outline,
    outlineOffset: devModeHighlightStyles.outlineOffset,
    cursor: devModeHighlightStyles.cursor,
  },
});

export const ContentWrapper = styled("div", {
  backgroundColor: "#994B35",
  borderRadius: "0.666rem",
  padding: "2.77rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3xl",
  width: "100%",
  maxWidth: "75rem",
  position: "relative",
  "@md": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "$4xl",
  },
  "@lg": {
    gap: "$5xl",
  },
});

export const BannerTitle = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h2",
  fontWeight: 700,
  lineHeight: 1.2,
  color: "#FFFFFF",
  margin: 0,
  textAlign: "center",
  marginBottom: "$2xl",
  width: "75%",
  "@md": {
    fontSize: "$h1",
    textAlign: "left",
    marginBottom: "$3xl",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const BannerDescription = styled("p", {
  fontFamily: "$heading",
  fontSize: "1.2rem",
  lineHeight: 1.5,
  color: "#F1DFD2",
  margin: 0,
  textAlign: "center",
  width: "auto",
  marginBottom: "$3xl",
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },
  "@md": {
    fontSize: "1.75rem", // 28px
    textAlign: "left",
    width: "67%",
    marginBottom: "$4xl",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const BannerButton = styled("div", {
  display: "flex",
  justifyContent: "center",
  "@md": {
    justifyContent: "flex-start",
  },
});

export const FoxIllustration = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "19.66rem",
  flexShrink: 0,
  position: "absolute",
  bottom: "-0.222rem",
  right: "-3.222rem",
  "@md": {
    maxWidth: "22rem",
  },
  "@lg": {
    maxWidth: "24rem",
  },
  "& img": {
    width: "100%",
    height: "auto",
  },
});

