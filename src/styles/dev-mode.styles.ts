import { darkTheme } from "@/styles/stitches.config";

export const devModeHighlightStyles = {
  cursor: "help",
  outline: "3px dashed rgba(0, 0, 0, 1)",
  outlineOffset: "6px",
  [`.${darkTheme} &`]: {
    outline: "3px dashed #FFFFFF",
  },
};


