import { styled, darkTheme } from "@/styles/stitches.config";

export const IconCircle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3.33rem",
  height: "3.33rem",
  minWidth: "3.33rem",
  minHeight: "3.33rem",
  borderRadius: "50%",
  backgroundColor: "#E7C19A",
  flexShrink: 0,
  "& svg": {
    display: "block",
    flexShrink: 0,
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "#542918",
  },
});

