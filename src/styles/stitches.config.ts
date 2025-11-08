import { createStitches } from "@stitches/react";

export const {
	styled,
	css,
	globalCss,
	keyframes,
	getCssText,
	config,
	theme,
	createTheme,
} = createStitches({
	theme: {
		colors: {
			bg: "#0b0d12",
			hiContrast: "#ffffff",
			loContrast: "#a1a1aa",
			primary: "#6366f1",
			primaryHover: "#4f46e5",
			border: "#26282f",
		},
		space: {
			0: "0",
			1: "4px",
			2: "8px",
			3: "12px",
			4: "16px",
			5: "20px",
			6: "24px",
		},
		radii: {
			sm: "6px",
			md: "10px",
			lg: "14px",
			round: "9999px",
		},
		fonts: {
			sans: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
			mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
		},
	},
	media: {
		sm: "(min-width: 480px)",
		md: "(min-width: 768px)",
		lg: "(min-width: 1024px)",
	},
	utils: {
		mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
		my: (value: string | number) => ({ marginTop: value, marginBottom: value }),
		px: (value: string | number) => ({ paddingLeft: value, paddingRight: value }),
		py: (value: string | number) => ({ paddingTop: value, paddingBottom: value }),
		size: (value: string | number) => ({ width: value, height: value }),
	},
});

export const globalStyles = globalCss({
	"*": { boxSizing: "border-box" },
	"html, body, #__next": {
		height: "100%",
	},
	body: {
		margin: 0,
		backgroundColor: "$bg",
		color: "$hiContrast",
		fontFamily: "$sans",
		webkitFontSmoothing: "antialiased",
		mozOsxFontSmoothing: "grayscale",
	},
	"a": {
		color: "$primary",
		textDecoration: "none",
	},
	"img": { maxWidth: "100%", display: "block" },
});


