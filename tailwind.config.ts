import { join } from 'path'
import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './cool-theme'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import svgToDataUri from 'mini-svg-data-uri'


const config: Config = {
  darkMode: 'selector',
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      
      animation: {
        
		grid: "grid 15s linear infinite",
      },
      keyframes: {
        
      
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


