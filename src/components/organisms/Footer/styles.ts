import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const FooterContainer = styled("footer", {
  backgroundColor: "#D3A592",
  paddingTop: "3.56rem",
  paddingBottom: "2.22rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  borderTop: "1px solid rgba(38, 29, 29, 0.18)",
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#261D1D",
    borderTop: "1px solid rgba(241, 223, 210, 0.18)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-within": {
    ...devModeHighlightStyles,
  },
});

export const FooterInner = styled("div", {
  width: "100%",
  maxWidth: "75rem",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "2.22rem",
});

export const FooterContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.22rem",
  "@md": {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export const FooterLogo = styled("div", {
  display: "flex",
  alignItems: "center",
  "& a": {
    display: "inline-flex",
    alignItems: "center",
    textDecoration: "none",
    "&:focus-visible": {
      outline: "0.11rem solid $focus",
      outlineOffset: "0.11rem",
      borderRadius: "$sm",
    },
  },
  "&[data-devmode-highlight='true']": {
    "& a:hover": {
      cursor: "help !important",
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const FooterLinks = styled("nav", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.33rem",
  fontFamily: "$body",
  fontSize: "1.33rem", // 24px
  "@md": {
    gap: "2rem",
  },
  "& a": {
    color: "#261D1D",
    textDecoration: "none",
    fontWeight: 700,
    transition: "color 150ms ease",
    "&:hover": {
      color: "$primary",
    },
    "&:focus-visible": {
      outline: "0.11rem solid $focus",
      outlineOffset: "0.11rem",
      borderRadius: "$sm",
    },
    [`.${darkTheme} &`]: {
      color: "#F1DFD2",
      "&:hover": {
        color: "$primary",
      },
    },
  },
  "&[data-devmode-highlight='true']": {
    "& a:hover": {
      color: "#261D1D !important",
      cursor: "help !important",
      [`.${darkTheme} &`]: {
        color: "#F1DFD2 !important",
      },
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const FooterSocial = styled("div", {
  display: "flex",
  gap: "1.33rem",
  alignItems: "center",
  "& a": {
    color: "#261D1D",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.44rem",
    height: "2.44rem",
    borderRadius: "$sm",
    transition: "color 150ms ease, background-color 150ms ease",
    "&:hover": {
      color: "$primary",
      backgroundColor: "rgba(173, 69, 40, 0.1)",
    },
    "&:focus-visible": {
      outline: "0.11rem solid $focus",
      outlineOffset: "0.11rem",
    },
    "& svg": {
      width: "1.33rem",
      height: "1.33rem",
    },
    [`.${darkTheme} &`]: {
      color: "#F1DFD2",
      "&:hover": {
        color: "$primary",
        backgroundColor: "rgba(173, 69, 40, 0.2)",
      },
    },
  },
  "&[data-devmode-highlight='true']": {
    "& a:hover": {
      color: "#261D1D !important",
      backgroundColor: "transparent !important",
      cursor: "help !important",
      [`.${darkTheme} &`]: {
        color: "#F1DFD2 !important",
        backgroundColor: "transparent !important",
      },
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const FooterDivider = styled("div", {
  borderTop: "1px solid rgba(38, 29, 29, 0.18)",
  paddingTop: "2.22rem",
  paddingBottom: "0.89rem",
  marginTop: "0.89rem",
  position: "relative",
  cursor: "default",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-0.89rem",
    left: 0,
    right: 0,
    height: "2.22rem",
    cursor: "inherit",
  },
  [`.${darkTheme} &`]: {
    borderTop: "1px solid rgba(241, 223, 210, 0.18)",
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

export const FooterCopyright = styled("div", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "0.89rem",
  "& p": {
    fontFamily: "$body",
    fontSize: "1.11rem", // 20px
    fontWeight: 700,
    color: "#261D1D",
    margin: 0,
    cursor: "inherit",
    [`.${darkTheme} &`]: {
      color: "#F1DFD2",
      opacity: 0.8,
    },
  },
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

