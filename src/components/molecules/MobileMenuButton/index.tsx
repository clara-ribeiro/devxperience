import React from "react";
import { IconButton } from "@/components/atoms/IconButton";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import CloseIcon from "@/components/icons/CloseIcon";

export type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaControls: string;
  ariaLabel?: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
  ariaControls,
  ariaLabel,
  title,
  style,
  className,
}) => {
  const defaultAriaLabel = isOpen ? "Fechar menu" : "Abrir menu";
  const defaultTitle = isOpen ? "Fechar menu" : "Abrir menu";

  return (
    <IconButton
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      ariaLabel={ariaLabel || defaultAriaLabel}
      title={title || defaultTitle}
      ariaControls={ariaControls}
      ariaExpanded={isOpen}
      onClick={onClick}
      style={style}
      className={className}
    />
  );
};

export default MobileMenuButton;

