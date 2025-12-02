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
			primary: "#AD4528",
			textPrimary: "#624141",
			surface: "#F4E2D4",
			surfaceAlt: "#E7C19A",
			supportGreen: "#99B69E",
			supportPink: "#B86D6C",
			headerBgLight: "#E7C19A",
			headerItemUnselectedLight: "#261D1D",
			headerItemSelectedLight: "#542918",
			headerIconLight: "#261D1D",
			bg: "#F4E2D4",
			hiContrast: "#624141",
			loContrast: "rgba(98, 65, 65, 0.75)",
			border: "rgba(98, 65, 65, 0.18)",
			focus: "#AD4528",
		},
		fonts: {
			heading: '"Raleway", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
			body: '"Josefin Slab", Georgia, Cambria, "Times New Roman", Times, serif',
		},
		fontSizes: {
			h1: "3.33rem",
			h2: "2.22rem",
			h3: "1.44rem",
			h4: "1.11rem",
			body1: "1rem",
			body2: "0.89rem",
			caption: "0.67rem",
		},
		space: {
			xs: "0.22rem",
			sm: "0.44rem",
			md: "0.67rem",
			lg: "0.89rem",
			xl: "1.33rem",
			"2xl": "1.78rem",
			"3xl": "2.22rem",
			"4xl": "2.67rem",
			"5xl": "3.56rem",
			"6xl": "4.44rem",
		},
		radii: {
			sm: "0.22rem",
			md: "0.44rem",
			lg: "0.67rem",
			xl: "0.89rem",
			full: "9999px",
		},
		shadows: {
			sm: "0 1px 2px rgba(0,0,0,0.06)",
			md: "0 2px 6px rgba(0,0,0,0.08)",
			lg: "0 8px 24px rgba(0,0,0,0.12)",
		},
	},
	media: {
		sm: "(min-width: 480px)",
		md: "(min-width: 768px)",
		lg: "(min-width: 1024px)",
		xl: "(min-width: 1280px)",
	},
	utils: {
		mx: (value: string | number) => ({ marginLeft: value, marginRight: value }),
		my: (value: string | number) => ({ marginTop: value, marginBottom: value }),
		px: (value: string | number) => ({ paddingLeft: value, paddingRight: value }),
		py: (value: string | number) => ({ paddingTop: value, paddingBottom: value }),
		size: (value: string | number) => ({ width: value, height: value }),
		square: (value: string | number) => ({ width: value, height: value }),
		sectionX: () => ({
			paddingLeft: "4.44rem",
			paddingRight: "4.44rem",
			"@sm": {
				paddingLeft: "1.78rem",
				paddingRight: "1.78rem",
			},
		}),
		sectionY: () => ({
			paddingTop: "3.56rem",
			paddingBottom: "3.56rem",
		}),
	},
});

export const darkTheme = createTheme("dark-theme", {
	colors: {
		primary: "#AD4528",
		textPrimary: "#F6ECE7",
		surface: "#1F1513",
		surfaceAlt: "#3A1F1A",
		supportGreen: "#7EA18A",
		supportPink: "#D28C8B",
		bg: "#1B1412",
		hiContrast: "#F6ECE7",
		loContrast: "rgba(246, 236, 231, 0.75)",
		border: "rgba(246, 236, 231, 0.18)",
		focus: "#F6ECE7",
		headerBgDark: "#542918",
		headerItemUnselectedDark: "#E7C19A",
		headerItemSelectedDark: "#F1DFD2",
		headerIconDark: "#542918",
	},
});

export const globalStyles = globalCss({
	"*, *::before, *::after": { boxSizing: "border-box" },
	html: {
		fontSize: "112.5%",
		maxWidth: "100vw",
	},
	body: {
		margin: 0,
		backgroundColor: "$surface",
		color: "$textPrimary",
		fontFamily: "$body",
		lineHeight: 1.5,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		maxWidth: "100vw",
	},
	"img, picture, video, canvas, svg": {
		display: "block",
		maxWidth: "100%",
	},
	"input, button, textarea, select": {
		font: "inherit",
	},
	a: {
		color: "$primary",
		textDecoration: "none",
	},
	":focus-visible": {
		outline: "2px solid $focus",
		outlineOffset: "2px",
	},
	"h1,h2,h3,h4": {
		fontFamily: "$heading",
		lineHeight: 1.2,
		margin: 0,
	},
	p: {
		margin: 0,
	},
});


