/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gemma-green': '#1A2F24',
				'gemma-sand': '#E5DDC8',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['"Cormorant Garamond"', 'serif'],
			},
		},
	},
	plugins: [],
}
