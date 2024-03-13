import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				"2xl": { min: "1535px" },
				// => @media (max-width: 1535px) { ... }

				xl: { min: "1279px" },
				// => @media (max-width: 1279px) { ... }

				lg: { min: "1023px" },
				// => @media (max-width: 1023px) { ... }

				md: { min: "768px" },
				// => @media (max-width: 767px) { ... }

				sm: { min: "300px", max: "766px" },
				// => @media (max-width: 639px) { ... }
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
