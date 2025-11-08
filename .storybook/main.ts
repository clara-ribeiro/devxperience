import type { StorybookConfig } from "@storybook/nextjs-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		// Exclude Chromatic preset during Vitest runs to avoid ESM/CJS loader issues
		...(process.env.VITEST ? [] as string[] : ["@chromatic-com/storybook"]),
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
		"@storybook/addon-a11y",
		"@storybook/addon-vitest",
	],
	framework: {
		name: "@storybook/nextjs-vite",
		options: {},
	},
	staticDirs: ["../public"],
	docs: {
		autodocs: "tag",
	},
	async viteFinal(config) {
		config.plugins = config.plugins || [];
		config.plugins.push(tsconfigPaths());
		return config;
	},
};

export default config;