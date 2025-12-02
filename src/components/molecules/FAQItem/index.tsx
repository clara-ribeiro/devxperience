"use client";

import React from "react";
import { FAQItemContainer, FAQHeader } from "./styles";
import { FAQQuestion } from "@/components/atoms/FAQQuestion";
import { FAQAnswer } from "@/components/atoms/FAQAnswer";
import { FAQIcon } from "@/components/atoms/FAQIcon";

export type FAQItemProps = {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  "data-devmode-highlight"?: string;
  "data-devmode-target"?: string;
  onMouseEnter?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: () => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLDivElement>) => void;
  onBlurCapture?: () => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onIconClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onIconMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onIconMouseLeave?: () => void;
  onIconFocusCapture?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onIconBlurCapture?: () => void;
  iconDataDevModeHighlight?: string;
  iconDataDevModeTarget?: string;
  iconStyle?: React.CSSProperties;
};

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isExpanded,
  onToggle,
  id,
  className,
  style,
  "data-devmode-highlight": dataDevModeHighlight,
  "data-devmode-target": dataDevModeTarget,
  onMouseEnter,
  onMouseLeave,
  onFocusCapture,
  onBlurCapture,
  onClick,
  onIconClick,
  onIconMouseEnter,
  onIconMouseLeave,
  onIconFocusCapture,
  onIconBlurCapture,
  iconDataDevModeHighlight,
  iconDataDevModeTarget,
  iconStyle,
}) => {
  const answerId = id ? `${id}-answer` : undefined;
  const iconId = id ? `${id}-icon` : undefined;
  const questionId = id ? `${id}-question` : undefined;

  const handleHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(event);
    }
    if (!event.defaultPrevented) {
      onToggle();
    }
  };

  const handleIconClick = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.stopPropagation();
      if (onIconClick) {
        onIconClick(event);
      }
      if (!event.defaultPrevented) {
        onToggle();
      }
    } else {
      onToggle();
    }
  };

  return (
    <FAQItemContainer
      id={id}
      className={className}
      style={style}
      data-devmode-highlight={dataDevModeHighlight}
      data-devmode-target={dataDevModeTarget}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocusCapture={onFocusCapture}
      onBlurCapture={onBlurCapture}
    >
      <FAQHeader onClick={handleHeaderClick} role="button" tabIndex={0} aria-expanded={isExpanded} aria-controls={answerId}>
        <FAQQuestion id={questionId}>{question}</FAQQuestion>
        <FAQIcon
          isExpanded={isExpanded}
          onClick={handleIconClick}
          ariaControls={answerId}
          ariaLabel={isExpanded ? "Recolher resposta" : "Expandir resposta"}
          data-devmode-highlight={iconDataDevModeHighlight}
          data-devmode-target={iconDataDevModeTarget}
          onMouseEnter={onIconMouseEnter}
          onMouseLeave={onIconMouseLeave}
          onFocusCapture={onIconFocusCapture}
          onBlurCapture={onIconBlurCapture}
          style={iconStyle}
        />
      </FAQHeader>
      <FAQAnswer id={answerId} isExpanded={isExpanded} ariaLabelledById={questionId}>
        {answer}
      </FAQAnswer>
    </FAQItemContainer>
  );
};

export default FAQItem;

