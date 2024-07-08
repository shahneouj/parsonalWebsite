/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
        'hero-pattern': "url('/assets/images/myimage.png')",
      }
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
