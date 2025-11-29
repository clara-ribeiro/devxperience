import { styled } from "@/styles/stitches.config";
import Link from "next/link";
import { devModeHighlightStyles } from "@/components/organisms/Header/styles";

export const StyledLogoLink = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "4.5rem",
  height: "auto",
  borderRadius: devModeHighlightStyles.borderRadius,
  "&[data-devmode-highlight='true']:hover, &[data-devmode-highlight='true']:focus-visible": {
    ...devModeHighlightStyles,
  },
});

