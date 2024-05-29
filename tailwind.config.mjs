
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				transparent: 'transparent',
				doce:'#121212',
				ha1:'#376e99',
				ha2:'#623a92',
				ha3:'#a8a9ac',
				ha4:'#40434c',
				ha5:'#151618'
			},
			fontFamily: {
				spartan: ['League Spartan Variable'],
				space: ['Space Mono'],
			}
		},
	},
	plugins: [],
}
