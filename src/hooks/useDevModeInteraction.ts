import React from "react";
import { useDevMode, DevModeMetadata } from "@/context/dev-mode-context";

/**
 * Hook reutilizável para instrumentar elementos com Dev Mode.
 * Fornece handlers e estilos para tooltips, modals e prevenção de ações padrão.
 */
export const useDevModeInteraction = (metadata: DevModeMetadata | null) => {
  const { isDevMode, showTooltip, openInteraction } = useDevMode();

  const getCursor = React.useCallback(() => {
    if (!isDevMode) return undefined;
    return metadata ? "help" : "default";
  }, [isDevMode, metadata]);

  const showMetadataTooltip = React.useCallback(
    (element: HTMLElement | null) => {
      if (!isDevMode || !element || !metadata) return;
      const rect = element.getBoundingClientRect();
      showTooltip({
        text: metadata.title,
        x: rect.left + rect.width / 2,
        y: rect.bottom,
        elementRect: rect,
      });
    },
    [isDevMode, metadata, showTooltip],
  );

  const hideMetadataTooltip = React.useCallback(() => {
    if (!isDevMode) return;
    showTooltip(null);
  }, [isDevMode, showTooltip]);

  const handleDevInteraction = React.useCallback(
    (event: React.SyntheticEvent): boolean => {
      if (!isDevMode || !metadata) return false;
      event.preventDefault();
      event.stopPropagation();
      openInteraction(metadata);
      return true;
    },
    [isDevMode, metadata, openInteraction],
  );

  const handleNeutralInteraction = React.useCallback(
    (event: React.SyntheticEvent): boolean => {
      if (!isDevMode) return false;
      event.preventDefault();
      event.stopPropagation();
      return true;
    },
    [isDevMode],
  );

  return {
    isDevMode,
    getCursor,
    showMetadataTooltip,
    hideMetadataTooltip,
    handleDevInteraction,
    handleNeutralInteraction,
  };
};

