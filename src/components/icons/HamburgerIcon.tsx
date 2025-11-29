import React from "react";

export const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="8" y="12" width="28" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="8" y="20.75" width="28" height="2.5" rx="1.25" fill="currentColor" />
    <rect x="8" y="29.5" width="28" height="2.5" rx="1.25" fill="currentColor" />
  </svg>
);

export default HamburgerIcon;


