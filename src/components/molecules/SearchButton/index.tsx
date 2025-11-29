import React from "react";
import { IconButton } from "@/components/atoms/IconButton";
import SearchIcon from "@/components/icons/SearchIcon";

export type SearchButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const SearchButton: React.FC<SearchButtonProps> = ({
  onClick,
  ariaLabel = "Buscar",
  title = "Buscar",
  style,
  className,
}) => {
  return (
    <IconButton
      icon={<SearchIcon />}
      ariaLabel={ariaLabel}
      title={title}
      onClick={onClick}
      style={style}
      className={className}
    />
  );
};

export default SearchButton;

