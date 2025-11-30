import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";
import Link from "next/link";

export const StyledPillarCard = styled(Link, {
  display: "flex",
  flexDirection: "column",
  gap: "$lg",
  padding: "$2xl",
  backgroundColor: "#99B69E",
  border: "0.11rem solid #261D1D",
  borderRadius: "$md",
  minHeight: "16rem",
  position: "relative",
  transition: "transform 150ms ease, box-shadow 150ms ease",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-0.22rem)",
    boxShadow: "$md",
  },
  "&:focus-visible": {
    outline: "0.11rem solid $focus",
    outlineOffset: "0.11rem",
    borderRadius: "$md",
  },
  "& h3": {
    fontFamily: "$body",
    fontSize: "2.11rem", // 38px
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#261D1D",
    margin: 0,
    lineHeight: 1.2,
    [`.${darkTheme} &`]: {
      color: "#F1DFD2",
    },
    "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
      ...devModeHighlightStyles,
    },
  },
  "& p": {
    fontFamily: "$heading",
    fontSize: "1.22rem", // 22px
    lineHeight: 1.5,
    color: "#261D1D",
    margin: 0,
    flex: 1,
  },
  "& span": {
    fontFamily: "$heading",
    fontSize: "1.22rem", // 22px - mesmo tamanho da descrição
    lineHeight: 1.5,
    color: "#261D1D",
    alignSelf: "center",
    textAlign: "center",
    textDecoration: "underline",
    textUnderlineOffset: "0.22rem",
    "@md": {
      alignSelf: "flex-start",
      textAlign: "left",
    },
    "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
      ...devModeHighlightStyles,
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "0.11rem solid transparent",
    borderRadius: "$md",
    pointerEvents: "none",
  },
  "&[data-devmode-highlight='true']::before": {
    borderColor: "transparent",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#3A1F1A",
    borderColor: "#F1DFD2",
    "& p": {
      color: "#F1DFD2",
    },
    "& span": {
      color: "#F1DFD2",
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

