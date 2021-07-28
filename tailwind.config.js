module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			primary: '#06202A',
		}),
		extend: {
			colors: (theme) => ({
				secondary: '#6202A',
			}),
			backgroundImage: (theme) => ({
				babu: "url('/Babu.png')",
				home: "url('/4.jpg')",
				gallery: "url('/cover.jpg')",
				research: "url('/cover.jpg')",
				members: "url('/Caulerpa verticillata.jpg')",
				species: "url('/Leveillea Jungermanniodes.jpg')",
				shore: "url('/shore1.jpg')",
				unsplash1: "url('https://www.source.unsplash.com/MP0IUfwrn0A')",
			}),
		},
	},

	variants: {
		extend: {},
	},
	fontFamily: {
		recursive: [
			'Recursive',
			'ui-monospace',
			'SFMono-Regular',
			'ui-serif',
			'Georgia',
		],
		// mono: ['ui-monospace', 'SFMono-Regular', 'ui-sans-serif', 'system-ui'],
	},
	plugins: [],
};
