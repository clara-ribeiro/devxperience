import { styled, darkTheme } from "@/styles/stitches.config";
import Link from "next/link";

export const StyledPillarLink = styled(Link, {
  fontFamily: "$heading",
  fontSize: "$body1",
  fontWeight: 600,
  color: "#261D1D",
  textDecoration: "underline",
  textUnderlineOffset: "0.22rem",
  transition: "color 150ms ease",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.44rem",
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
});

