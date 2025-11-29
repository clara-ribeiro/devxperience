"use client";

import React from "react";
import { createPortal } from "react-dom";
import { styled, darkTheme } from "@/styles/stitches.config";

export type DevModeTrigger = "header-cta" | "hero-cta";

export type DevModeMetadata = {
  target: string;
  title: string;
  nielsenHeuristic: string | null;
  explanation: string;
  academicRef: string | null;
  wcag: string | null;
};

type TooltipPayload = {
  text: string;
  x: number;
  y: number;
};

type DevModeContextValue = {
  isDevMode: boolean;
  lastTrigger: DevModeTrigger | null;
  enableDevMode: (trigger?: DevModeTrigger) => void;
  disableDevMode: () => void;
  toggleDevMode: (trigger?: DevModeTrigger) => void;
  showTooltip: (payload: TooltipPayload | null) => void;
  openInteraction: (metadata: DevModeMetadata) => void;
  closeInteraction: () => void;
};

const DevModeContext = React.createContext<DevModeContextValue | null>(null);

const STORAGE_ENABLED_KEY = "dx_dev_mode_enabled";
const STORAGE_TRIGGER_KEY = "dx_dev_mode_trigger";

const readStoredState = (): { enabled: boolean; trigger: DevModeTrigger | null } => {
  if (typeof window === "undefined") {
    return { enabled: false, trigger: null };
  }

  const enabledRaw = window.localStorage.getItem(STORAGE_ENABLED_KEY);
  const triggerRaw = window.localStorage.getItem(STORAGE_TRIGGER_KEY) as DevModeTrigger | null;

  return {
    enabled: enabledRaw === "true",
    trigger: triggerRaw ?? null,
  };
};

export const DevModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [{ enabled, trigger }, setState] = React.useState(() => readStoredState());
  const [tooltip, setTooltip] = React.useState<TooltipPayload | null>(null);
  const [activeMetadata, setActiveMetadata] = React.useState<DevModeMetadata | null>(null);
  const [isHydrated, setIsHydrated] = React.useState(false);

  React.useEffect(() => {
    setState(readStoredState());
    setIsHydrated(true);
  }, []);

  const persist = React.useCallback((nextEnabled: boolean, nextTrigger: DevModeTrigger | null) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_ENABLED_KEY, nextEnabled ? "true" : "false");
    if (nextTrigger) {
      window.localStorage.setItem(STORAGE_TRIGGER_KEY, nextTrigger);
    } else {
      window.localStorage.removeItem(STORAGE_TRIGGER_KEY);
    }
  }, []);

  const enableDevMode = React.useCallback(
    (source: DevModeTrigger = "header-cta") => {
      setState({ enabled: true, trigger: source });
      persist(true, source);
    },
    [persist],
  );

  const disableDevMode = React.useCallback(() => {
    setState({ enabled: false, trigger: null });
    persist(false, null);
  }, [persist]);

  const toggleDevMode = React.useCallback(
    (source: DevModeTrigger = "header-cta") => {
      setState((prev) => {
        const nextEnabled = !prev.enabled;
        const nextTrigger = nextEnabled ? source : null;
        persist(nextEnabled, nextTrigger);
        return { enabled: nextEnabled, trigger: nextTrigger };
      });
    },
    [persist],
  );

  const showTooltip = React.useCallback(
    (payload: TooltipPayload | null) => {
      if (!enabled) {
        setTooltip(null);
        return;
      }
      setTooltip(payload);
    },
    [enabled],
  );

  const openInteraction = React.useCallback(
    (metadata: DevModeMetadata) => {
      if (!enabled) return;
      setActiveMetadata(metadata);
    },
    [enabled],
  );

  const closeInteraction = React.useCallback(() => {
    setActiveMetadata(null);
  }, []);

  React.useEffect(() => {
    if (!enabled) {
      setTooltip(null);
      setActiveMetadata(null);
    }
  }, [enabled]);

  React.useEffect(() => {
    if (!activeMetadata) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeInteraction();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMetadata, closeInteraction]);

  React.useEffect(() => {
    if (!enabled) return;
    const handleEscapeToDisable = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (activeMetadata) return; // modal aberta, apenas closeInteraction lida
      disableDevMode();
    };
    window.addEventListener("keydown", handleEscapeToDisable);
    return () => window.removeEventListener("keydown", handleEscapeToDisable);
  }, [enabled, activeMetadata, disableDevMode]);

  const value = React.useMemo<DevModeContextValue>(
    () => ({
      isDevMode: enabled,
      lastTrigger: trigger,
      enableDevMode,
      disableDevMode,
      toggleDevMode,
      showTooltip,
      openInteraction,
      closeInteraction,
    }),
    [enabled, trigger, enableDevMode, disableDevMode, toggleDevMode, showTooltip, openInteraction, closeInteraction],
  );

  React.useEffect(() => {
    if (enabled) {
      console.log("[DevMode] Ativado", { trigger });
    } else {
      console.log("[DevMode] Desativado");
    }
  }, [enabled, trigger]);

  const renderTooltip = () => {
    if (!isHydrated || !enabled || !tooltip || typeof document === "undefined") {
      return null;
    }
    return createPortal(
      <TooltipContainer style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }} role="status">
        {tooltip.text}
      </TooltipContainer>,
      document.body,
    );
  };

  const renderModal = () => {
    if (!isHydrated || !enabled || !activeMetadata || typeof document === "undefined") {
      return null;
    }
    return createPortal(
      <ModalOverlay role="presentation" onClick={closeInteraction}>
        <ModalContent
          role="dialog"
          aria-modal="true"
          aria-label={`Detalhes de ${activeMetadata.target}`}
          onClick={(event) => event.stopPropagation()}
        >
          <ModalHeader>
            <ModalTarget>{activeMetadata.target}</ModalTarget>
            <CloseButton type="button" onClick={closeInteraction} aria-label="Fechar detalhes do Dev Mode">
              X
            </CloseButton>
          </ModalHeader>
          <ModalTitle>{activeMetadata.title}</ModalTitle>
          <ModalBody>{activeMetadata.explanation}</ModalBody>
          <MetadataList>
            {activeMetadata.nielsenHeuristic ? (
              <MetadataItem>
                <MetadataLabel>Heurística de Nielsen</MetadataLabel>
                <MetadataValue>{activeMetadata.nielsenHeuristic}</MetadataValue>
              </MetadataItem>
            ) : null}
            {activeMetadata.wcag ? (
              <MetadataItem>
                <MetadataLabel>WCAG</MetadataLabel>
                <MetadataValue>{activeMetadata.wcag}</MetadataValue>
              </MetadataItem>
            ) : null}
            {activeMetadata.academicRef ? (
              <MetadataItem>
                <MetadataLabel>Referência Acadêmica</MetadataLabel>
                <MetadataValue>{activeMetadata.academicRef}</MetadataValue>
              </MetadataItem>
            ) : null}
          </MetadataList>
        </ModalContent>
      </ModalOverlay>,
      document.body,
    );
  };

  return (
    <DevModeContext.Provider value={value}>
      {children}
      {renderTooltip()}
      {renderModal()}
    </DevModeContext.Provider>
  );
};

export const useDevMode = () => {
  const context = React.useContext(DevModeContext);
  if (!context) {
    throw new Error("useDevMode must be used within a DevModeProvider");
  }
  return context;
};

const TooltipContainer = styled("div", {
  position: "fixed",
  transform: "translate(-50%, 120%)",
  marginTop: "0.5rem",
  padding: "0.33rem 0.67rem",
  fontSize: "0.78rem",
  fontWeight: 600,
  borderRadius: "0.44rem",
  backgroundColor: "rgba(20, 20, 20, 0.9)",
  color: "white",
  pointerEvents: "none",
  zIndex: 1500,
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  whiteSpace: "nowrap",
});

const ModalOverlay = styled("div", {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2000,
  padding: "1.5rem",
});

const ModalContent = styled("div", {
  width: "min(32rem, 100%)",
  backgroundColor: "$surface",
  borderRadius: "1rem",
  padding: "1.5rem",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
  color: "$textPrimary",
  display: "flex",
  flexDirection: "column",
  gap: "0.9rem",
  [`.${darkTheme} &`]: {
    backgroundColor: "$surfaceAlt",
    color: "$hiContrast",
  },
});

const ModalHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
});

const ModalTarget = styled("p", {
  margin: 0,
  fontSize: "0.89rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: "$loContrast",
});

const ModalTitle = styled("h3", {
  margin: 0,
  fontSize: "1.33rem",
  fontWeight: 700,
});

const ModalBody = styled("p", {
  margin: 0,
  fontSize: "1rem",
  lineHeight: 1.5,
});

const MetadataList = styled("dl", {
  margin: 0,
  display: "grid",
  gap: "0.67rem",
});

const MetadataItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.22rem",
});

const MetadataLabel = styled("dt", {
  fontSize: "0.78rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  color: "$loContrast",
});

const MetadataValue = styled("dd", {
  margin: 0,
  fontSize: "0.94rem",
  lineHeight: 1.4,
});

const CloseButton = styled("button", {
  border: "none",
  background: "transparent",
  color: "inherit",
  fontSize: "1.5rem",
  cursor: "pointer",
  lineHeight: 1,
  padding: "0.25rem",
  "&:focus-visible": {
    outline: "2px solid $focus",
    borderRadius: "0.25rem",
  },
});


