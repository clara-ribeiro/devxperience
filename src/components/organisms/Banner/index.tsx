"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Section, ContentWrapper, BannerTitle, BannerDescription, BannerButton, FoxIllustration } from "./styles";
import Button from "@/components/atoms/Button";
import ExcitedFoxIcon from "@/components/icons/excitedFox.svg";

export type BannerProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
};

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
  className,
  style,
}) => {
  const router = useRouter();

  const buttonColors = React.useMemo(
    () => ({
      background: "#F1DFD2",
      text: "#261D1D",
      border: "#F1DFD2",
    }),
    [],
  );

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      router.push(buttonHref);
    }
  };

  return (
    <Section className={className} style={style} aria-labelledby="banner-heading">
      <ContentWrapper>
        <div>
          <BannerTitle id="banner-heading">{title}</BannerTitle>
          <BannerDescription>{description}</BannerDescription>
          <BannerButton>
            <Button
              type="button"
              label={buttonLabel}
              variant="solid"
              colors={buttonColors}
              onClick={handleButtonClick}
            />
          </BannerButton>
        </div>
        <FoxIllustration>
          <Image
            src={ExcitedFoxIcon}
            alt="Ilustração de uma raposa com óculos"
            width={354}
            height={434}
            priority
          />
        </FoxIllustration>
      </ContentWrapper>
    </Section>
  );
};

export default Banner;

