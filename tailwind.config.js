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
				babu: "url('/Babu.webp')",
				gallery: "url('/cover.webp')",
				research: "url('/cover.webp')",
				members: "url('/Caulerpa verticillata.webp')",
				species: "url('/Leveillea Jungermanniodes.webp')",
				shore: "url('/shore1.webp')",
				falls: "url('/Adhirapalli Falls.webp')",
				andaman: "url('/Andaman.webp')",
				marine: "url('/marine_.webp')",
				studentCorner: "url('/student_corner.webp')",
				marine_single: "url('/marine_select.webp')",
				freshwater_single: "url('/freshwater_select.webp')"
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
