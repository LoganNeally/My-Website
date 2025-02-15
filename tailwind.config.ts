import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './cool-theme'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'


const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
		grid: "grid 15s linear infinite",
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },		
	  grid: {
		"0%": { transform: "translateY(-50%)" },
		"100%": { transform: "translateY(0)" },
	  },
      },
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [myCustomTheme],
        preset: [
          {
            name: 'crimson',
            enhancements: true,
          },
        ],
      },
    }),
    addVariablesForColors,
  ],
}

export default config

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}


