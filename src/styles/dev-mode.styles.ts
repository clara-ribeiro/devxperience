import { darkTheme } from "@/styles/stitches.config";

/**
 * Estilos compartilhados para elementos instrumentados com Dev Mode.
 * Aplicados quando `data-devmode-highlight='true'` e o elemento está em hover/focus.
 */
export const devModeHighlightStyles = {
  cursor: "help",
  outline: "3px dashed rgba(0, 0, 0, 1)",
  outlineOffset: "6px",
  // No modo dark, o outline deve ser branco
  [`.${darkTheme} &`]: {
    outline: "3px dashed #FFFFFF",
  },
};


