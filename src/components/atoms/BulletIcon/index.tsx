import React from "react";
import { LucideIcon } from "lucide-react";
import { IconCircle } from "./styles";

export type BulletIconProps = {
  icon: LucideIcon;
  color: string;
  className?: string;
  style?: React.CSSProperties;
};

export const BulletIcon: React.FC<BulletIconProps> = ({
  icon: Icon,
  color,
  className,
  style,
}) => {
  return (
    <IconCircle className={className} style={style} aria-hidden="true">
      <Icon size={24} color={color} strokeWidth={2} />
    </IconCircle>
  );
};

export default BulletIcon;

