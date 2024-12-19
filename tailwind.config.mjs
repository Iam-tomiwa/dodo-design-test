/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{mjs,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["AeonikPro", "sans-serif"],
			},
			colors: {
				primary: {
					DEFAULT: "#6832E3",
					25: "#FCFBFE",
					50: "#F0EBFC",
					100: "#D0BFF6",
					500: "#6832E3", // default
					700: "#4A24A1",
				},
				gray: {
					DEFAULT: "#344054",
					200: "#EAECF0",
					500: "#667085",
					700: "#344054", // default
					900: "#101828",
					950: "#0C111D",
				},
				background: "#161616",
				"input-bg": "#3D3D3D",
				textSecondary: "#E7E7E7",
				borderColor: "#2E2E2E",
			},
		},
	},
	plugins: [],
};
