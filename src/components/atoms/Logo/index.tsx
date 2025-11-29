import React from "react";
import Image from "next/image";
import IconLogoLightMode from "@/components/icons/IconLogoLightMode.svg";
import IconLogoDarkMode from "@/components/icons/IconLogoDarkMode.svg";
import { useTheme } from "@/context/theme-context";

export type LogoProps = {
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Logo: React.FC<LogoProps> = ({
  width = 44,
  height = 48,
  alt = "devXperience",
  className,
  style,
}) => {
  const { isDark } = useTheme();

  return (
    <>
      {isDark ? (
        <Image
          src={IconLogoDarkMode}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={style}
        />
      ) : (
        <Image
          src={IconLogoLightMode}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={style}
        />
      )}
    </>
  );
};

export default Logo;

