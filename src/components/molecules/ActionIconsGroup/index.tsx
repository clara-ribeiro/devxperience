import React from "react";
import { ResponsiveWrapper } from "@/components/atoms/ResponsiveWrapper";
import { useDevModeInteraction } from "@/hooks/useDevModeInteraction";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";
import { StyledActionIconsGroup } from "./styles";

export type ActionIconsGroupProps = {
  children: React.ReactNode;
  metadata?: DevModeMetadata;
  className?: string;
  style?: React.CSSProperties;
};

export const ActionIconsGroup: React.FC<ActionIconsGroupProps> = ({
  children,
  metadata,
  className,
  style,
}) => {
  const { isDevMode } = useDevMode();
  const actionIconsInteraction = useDevModeInteraction(metadata || null);

  const groupStyle = React.useMemo(() => {
    if (!metadata) return style;
    return {
      ...style,
      cursor: isDevMode ? actionIconsInteraction.getCursor() : "pointer",
    };
  }, [metadata, isDevMode, actionIconsInteraction, style]);

  const cursor = metadata ? (isDevMode ? actionIconsInteraction.getCursor() : "pointer") : undefined;

  if (metadata) {
    return (
      <ResponsiveWrapper variant="desktopOnly">
        <StyledActionIconsGroup
          data-devmode-highlight={isDevMode ? "true" : undefined}
          data-devmode-target={metadata.target}
          onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) =>
            actionIconsInteraction.showMetadataTooltip(event.currentTarget)
          }
          onMouseLeave={actionIconsInteraction.hideMetadataTooltip}
          onFocus={(event: React.FocusEvent<HTMLDivElement>) =>
            actionIconsInteraction.showMetadataTooltip(event.currentTarget as HTMLElement)
          }
          onBlur={actionIconsInteraction.hideMetadataTooltip}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            actionIconsInteraction.handleDevInteraction(event);
          }}
          style={groupStyle}
          className={className}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                style: { ...((child.props as { style?: React.CSSProperties }).style || {}), cursor },
              } as React.HTMLAttributes<HTMLElement>);
            }
            return child;
          })}
        </StyledActionIconsGroup>
      </ResponsiveWrapper>
    );
  }

  return (
    <ResponsiveWrapper variant="desktopOnly">
      <StyledActionIconsGroup style={style} className={className}>
        {children}
      </StyledActionIconsGroup>
    </ResponsiveWrapper>
  );
};

export default ActionIconsGroup;

