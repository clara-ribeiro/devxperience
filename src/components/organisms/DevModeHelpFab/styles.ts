import { styled, darkTheme } from "@/styles/stitches.config";
import { devModeHighlightStyles } from "@/styles/dev-mode.styles";

export const FABContainer = styled("button", {
  position: "fixed",
  bottom: "1.5rem",
  right: "1.5rem",
  zIndex: 1000,
  width: "3.56rem",
  height: "3.56rem",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "$primary",
  color: "$hiContrast",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "$lg",
  transition: "transform 200ms ease, box-shadow 200ms ease, opacity 200ms ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 32px rgba(173, 69, 40, 0.4)",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$primary",
    color: "$hiContrast",
    boxShadow: "0 8px 24px rgba(173, 69, 40, 0.5)",
    "&:hover": {
      boxShadow: "0 12px 32px rgba(173, 69, 40, 0.6)",
    },
  },
});

export const FABIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > svg": {
    width: "1.78rem",
    height: "1.78rem",
    color: "#FFFFFF",
  },
});

export const ModalOverlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
  padding: "1.5rem",
  animation: "fadeIn 200ms ease",
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

export const ModalContent = styled("div", {
  width: "min(70rem, 95vw)",
  height: "min(45rem, 85vh)",
  maxHeight: "85vh",
  backgroundColor: "$surface",
  borderRadius: "1rem",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
  color: "$textPrimary",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  animation: "slideUp 250ms ease",
  "@keyframes slideUp": {
    from: {
      opacity: 0,
      transform: "translateY(1rem)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
    color: "$hiContrast",
  },
});

export const ModalHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1.5rem",
  paddingBottom: "1rem",
  borderBottom: "1px solid $border",
  [`.${darkTheme} &`]: {
    borderBottomColor: "$border",
  },
});

export const ModalTitle = styled("h2", {
  margin: 0,
  fontSize: "1.44rem",
  fontWeight: 700,
  fontFamily: "$heading",
  color: "$hiContrast",
});

export const CloseButton = styled("button", {
  width: "2rem",
  height: "2rem",
  borderRadius: "0.44rem",
  border: "none",
  backgroundColor: "transparent",
  color: "$hiContrast",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0,
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "$border",
  },
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  "& > svg": {
    width: "1.33rem",
    height: "1.33rem",
  },
});

export const ModalBody = styled("div", {
  padding: "2rem",
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  minHeight: 0,
});

export const IntroTextContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  width: "100%",
  maxWidth: "60rem",
  alignSelf: "flex-start",
});

export const IntroText = styled("p", {
  margin: 0,
  fontSize: "1.33rem",
  lineHeight: 1.75,
  color: "#542918",
  textAlign: "left",
  "& strong": {
    fontWeight: 700,
    color: "#261D1D",
  },
  "& em": {
    fontStyle: "italic",
  },
  [`.${darkTheme} &`]: {
    color: "#F1DFD2",
    "& strong": {
      color: "#F1DFD2",
    },
  },
});

export const VideoContainerWrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  minHeight: 0,
});

export const VideoContainer = styled("div", {
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  borderRadius: "0.67rem",
  overflow: "hidden",
  backgroundColor: "$bg",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [`.${darkTheme} &`]: {
    backgroundColor: "$surface",
  },
});

export const VideoPlayer = styled("video", {
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
});

export const ModalFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1.5rem",
  paddingTop: "1rem",
  borderTop: "1px solid $border",
  [`.${darkTheme} &`]: {
    borderTopColor: "$border",
  },
});

export const BackButton = styled("button", {
  background: "transparent",
  border: "none",
  color: "$primary",
  cursor: "pointer",
  fontSize: "0.89rem",
  fontWeight: 600,
  padding: "0.44rem 0.67rem",
  borderRadius: "0.44rem",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: "$border",
  },
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  [`.${darkTheme} &`]: {
    color: "$primary",
  },
});





