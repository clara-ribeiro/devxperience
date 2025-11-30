import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import FoxBackgroundIcon from "@/components/icons/foxBackground.svg";
import FoxBackgroundLightIcon from "@/components/icons/foxBackgroundLight.svg";

const foxBackgroundUrl = `url(${FoxBackgroundIcon.src || FoxBackgroundIcon})`;
const foxBackgroundLightUrl = `url(${FoxBackgroundLightIcon.src || FoxBackgroundLightIcon})`;

export const StyledSection = styled("section", {
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  backgroundColor: "#C28166",
  // Em mobile, não mostra o background da raposa
  backgroundImage: "none",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top left",
  backgroundSize: "auto 83%",

  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
    // A partir de @md, mostra o background light no modo claro
    backgroundImage: foxBackgroundLightUrl,
  },

  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },

  [`.${darkTheme} &`]: {
    backgroundColor: "#1B1412",
    // Em mobile dark, não mostra background
    backgroundImage: "none",
    
    "@md": {
      // A partir de @md dark, mostra o background original
      backgroundImage: foxBackgroundUrl,
    },
  },
});

export const StyledContentWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2.22rem",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",

  "@lg": {
    gridTemplateColumns: "auto 1fr",
    gap: "4.44rem",
  },
});

export const StyledFoxWrapper = styled("div", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "240px", // Menor em mobile
  margin: "0 auto",

  "@md": {
    maxWidth: "300px", // Aumenta um pouco em tablets
  },

  "@lg": {
    maxWidth: "354px", // Tamanho original em desktop
    margin: 0,
  },

  "& > img": {
    position: "relative",
    zIndex: 2,
    width: "100%",
    height: "auto",
  },
});

export const StyledTextContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$xl",
  textAlign: "center",

  "@lg": {
    textAlign: "left",
  },
});

export const StyledTitle = styled("h1", {
  fontFamily: "$heading",
  fontSize: "$h1",
  fontWeight: 700,
  color: "#261D1D",
  margin: 0,
  lineHeight: 1.2,

  "@md": {
    fontSize: "3.8rem",
  },

  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
  },

  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const StyledDescription = styled("p", {
  fontFamily: "$body",
  fontSize: "$h4",
  fontWeight: 700,
  color: "#624141",
  margin: 0,
  lineHeight: 1.6,

  "@md": {
    fontSize: "$h3",
  },

  [`.${darkTheme} &`]: {
    color: "rgba(246, 236, 231, 0.9)",
  },

  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const StyledScrollHint = styled("button", {
  marginTop: "$lg",
  alignSelf: "center",
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: "9999px",
  backgroundColor: "rgba(0, 0, 0, 0.06)",

  "@lg": {
    alignSelf: "flex-start",
  },

  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
    borderRadius: "9999px",
  },
  [`.${darkTheme} &`]: {
    // No dark mode, removemos o círculo para não competir com o fundo
    backgroundColor: "transparent",
  },
});

export const StyledScrollArrow = styled("span", {
  display: "inline-block",
  width: "1.2rem",
  height: "1.2rem",
  borderLeft: "0.18rem solid #261D1D",
  borderBottom: "0.18rem solid #261D1D",
  transform: "rotate(-45deg) translateY(-2px)",

  [`.${darkTheme} &`]: {
    borderLeftColor: "#F6ECE7",
    borderBottomColor: "#F6ECE7",
  },
});


