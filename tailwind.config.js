const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamily = defaultTheme.fontFamily;
fontFamily["nuni"] = ["Nunito", "sans-serif"];

module.exports = {
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/layout/**/*.{js,ts,jsx,tsx}",
		"./src/helpers/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			lineHeight: {
				72: "72px",
				42: "42px",
			},
			boxShadow: {
				// One example using shadow-lg -> shadow-lg-invert
				"lg-invert":
					"0 10px 15px -3px rgba(255, 255, 255, 0.3), 0 4px 6px -2px rgba(255, 255, 255, 0.3)",
			},
			zIndex: {
				"-1": "-1",
			},
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
		},
		fontFamily: fontFamily,
	},
	variants: {
		extend: {},
		// Control the shadows on dark mode to invert colors
		boxShadow: [
			"responsive",
			"group-hover",
			"focus-within",
			"hover",
			"focus",
			"dark",
		],
	},
	plugins: [require("@tailwindcss/forms")],
};
