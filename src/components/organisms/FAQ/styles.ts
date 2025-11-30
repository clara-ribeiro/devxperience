import { styled, darkTheme } from "@/styles/stitches.config";
import backgroundPattern from "./background.webp";

const backgroundPatternUrl = `url(${backgroundPattern.src})`;

export const Section = styled("section", {
  paddingTop: "4.44rem",
  paddingBottom: "4.44rem",
  paddingLeft: "1.78rem",
  paddingRight: "1.78rem",
  backgroundColor: "#F1DFD2",
  backgroundImage: `linear-gradient(rgba(197, 173, 156, 0.95), rgba(197, 173, 156, 0.95)), ${backgroundPatternUrl}`,
  backgroundRepeat: "repeat",
  backgroundSize: "66.67rem 44.44rem",
  backgroundPosition: "center top",
  backgroundAttachment: "fixed",
  "@md": {
    paddingTop: "6.67rem",
    paddingBottom: "6.67rem",
  },
  "@lg": {
    paddingLeft: "4.44rem",
    paddingRight: "4.44rem",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#581B09",
    backgroundImage: `linear-gradient(rgba(88, 27, 9, 0.97), rgba(88, 27, 9, 0.97)), ${backgroundPatternUrl}`,
    color: "#F1DFD2",
  },
});

export const ContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.22rem",
  width: "100%",
  maxWidth: "75rem",
  margin: "0 auto",
  "@lg": {
    gap: "3.33rem",
  },
});

export const FAQList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.33rem",
  width: "100%",
  "@md": {
    gap: "1.78rem",
  },
});

