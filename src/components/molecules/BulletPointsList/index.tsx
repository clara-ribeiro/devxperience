import React from "react";
import { LucideIcon } from "lucide-react";
import { BulletPointsListContainer } from "./styles";
import { BulletPoint } from "@/components/molecules/BulletPoint";

export type BulletPointItem = {
  icon: LucideIcon;
  text: string;
};

export type BulletPointsListProps = {
  items: BulletPointItem[];
  iconColor: string;
  className?: string;
  style?: React.CSSProperties;
  "data-devmode-highlight"?: string;
  "data-devmode-target"?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLUListElement>) => void;
  onMouseLeave?: () => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLUListElement>) => void;
  onBlurCapture?: () => void;
  onClick?: (event: React.MouseEvent<HTMLUListElement>) => void;
};

export const BulletPointsList: React.FC<BulletPointsListProps> = ({
  items,
  iconColor,
  className,
  style,
  "data-devmode-highlight": dataDevModeHighlight,
  "data-devmode-target": dataDevModeTarget,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
  onClick,
}) => {
  return (
    <BulletPointsListContainer
      className={className}
      style={style}
      data-devmode-highlight={dataDevModeHighlight}
      data-devmode-target={dataDevModeTarget}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
      onClick={onClick}
    >
      {items.map((item, index) => (
        <BulletPoint
          key={index}
          icon={item.icon}
          text={item.text}
          iconColor={iconColor}
        />
      ))}
    </BulletPointsListContainer>
  );
};

export default BulletPointsList;

