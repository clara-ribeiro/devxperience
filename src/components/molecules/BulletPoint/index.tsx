import React from "react";
import { LucideIcon } from "lucide-react";
import { BulletPointContainer } from "./styles";
import { BulletIcon } from "@/components/atoms/BulletIcon";
import { BulletText } from "@/components/atoms/BulletText";

export type BulletPointProps = {
  icon: LucideIcon;
  text: string;
  iconColor: string;
  className?: string;
  style?: React.CSSProperties;
};

export const BulletPoint: React.FC<BulletPointProps> = ({
  icon,
  text,
  iconColor,
  className,
  style,
}) => {
  return (
    <BulletPointContainer className={className} style={style}>
      <BulletIcon icon={icon} color={iconColor} />
      <BulletText>{text}</BulletText>
    </BulletPointContainer>
  );
};

export default BulletPoint;

