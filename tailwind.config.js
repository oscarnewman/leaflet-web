const colors = require('tailwindcss/colors')
module.exports = {
	darkMode: 'media',
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	purge: {
		content: ['./src/**/*.html', './src/**/*.tsx'],
		options: {
			safelist: {
				standard: [/space-(x|y)-.+/],
			},
		},
	},
	theme: {
		extend: {
			colors: { teal: colors.emerald, orange: colors.amber },
			screens: {
				'content-xs': '20rem',
				'content-sm': '24rem',
				'content-md': '28rem',
				'content-lg': '32rem',
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				'4px': '4px',
				'1/2': '50%',
				'2/3': '66.666%',
				'3/4': '75%',
				'7/8': '87.5%',
				full: '100%',
			},
		},
		typography: theme => ({
			dark: {
				css: {
					color: theme('colors.gray.100'),
					a: {
						color: theme('colors.green.500'),
						'&:hover': {
							color: theme('colors.green.500'),
						},
					},
					'[class~="lead"]': {
						color: theme('colors.gray.100'),
					},

					h1: {
						color: theme('colors.gray.100'),
					},
					h2: {
						color: theme('colors.gray.100'),
					},
					h3: {
						color: theme('colors.gray.100'),
					},
					h4: {
						color: theme('colors.gray.100'),
					},
					h5: {
						color: theme('colors.gray.100'),
					},
					h6: {
						color: theme('colors.gray.100'),
					},

					strong: {
						color: theme('colors.gray.100'),
					},

					code: {
						color: theme('colors.gray.100'),
					},

					figcaption: {
						color: theme('colors.gray.500'),
					},
				},
			},
		}),
	},
	variants: {
		borderWidth: ['hover'],
		rotate: ['hover', 'group-hover'],
		scale: ['hover', 'group-hover'],
		typography: ['dark'],
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
