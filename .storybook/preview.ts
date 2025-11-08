import type { Preview } from "@storybook/react";
import { globalStyles } from "../src/styles/stitches.config";

// Apply Stitches global styles once for all stories
globalStyles();

const preview: Preview = {
	parameters: {
		layout: "centered",
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		// Enable the Interactions panel debugger
		features: {
			interactionsDebugger: true,
		},
		a11y: {
			element: "#root",
			manual: false,
			test: "todo",
		},
	},
};

export default preview;