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
				gallery: "url('/cover.webp')",
				research: "url('/cover.webp')",
				members: "url('/Caulerpa verticillata.jpg')",
				species: "url('/Leveillea Jungermanniodes.jpg')",
				shore: "url('/shore1.jpg')",
				falls: "url('/Adhirapalli Falls.JPG')",
				andaman: "url('/Andaman.JPG')",
				marine: "url('/marine_.JPG')",
				studentCorner: "url('/student_corner.JPG')",
				marine_single: "url('/marine_select.JPG')",
				freshwater_single: "url('/freshwater_select.JPG')"
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
