import React from "react";
import { IconButton } from "@/components/atoms/IconButton";
import DevModeIcon from "@/components/icons/DevModeIcon";
import { useDevMode, DevModeTrigger } from "@/context/dev-mode-context";
import { useTheme } from "@/context/theme-context";

export type DevModeToggleButtonProps = {
  trigger?: DevModeTrigger;
  ariaLabel?: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const DevModeToggleButton: React.FC<DevModeToggleButtonProps> = ({
  trigger = "header-cta",
  ariaLabel,
  title,
  style,
  className,
}) => {
  const { isDevMode, toggleDevMode } = useDevMode();
  const { isDark } = useTheme();

  const devModeIconColors = React.useMemo(() => {
    if (!isDevMode) return null;
    return isDark
      ? { bgColor: "#E7C19A", glyphColor: "#542918" }
      : { bgColor: "#261D1D", glyphColor: "#E7C19A" };
  }, [isDevMode, isDark]);

  const defaultAriaLabel = isDevMode ? "Desativar Dev Mode" : "Ativar Dev Mode";
  const defaultTitle = isDevMode ? "Dev Mode ativo" : "Dev Mode inativo";

  return (
    <IconButton
      icon={<DevModeIcon {...(devModeIconColors ?? {})} />}
      ariaLabel={isDevMode ? undefined : (ariaLabel || defaultAriaLabel)}
      title={isDevMode ? undefined : (title || defaultTitle)}
      ariaPressed={isDevMode}
      onClick={() => {
        toggleDevMode(trigger);
      }}
      style={{ ...style, cursor: "pointer" }}
      className={className}
    />
  );
};

export default DevModeToggleButton;

