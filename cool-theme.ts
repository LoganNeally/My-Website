
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "var(--color-primary-100)",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #880c12 
		"--color-primary-50": "237 219 219", // #eddbdb
		"--color-primary-100": "231 206 208", // #e7ced0
		"--color-primary-200": "225 194 196", // #e1c2c4
		"--color-primary-300": "207 158 160", // #cf9ea0
		"--color-primary-400": "172 85 89", // #ac5559
		"--color-primary-500": "136 12 18", // #880c12
		"--color-primary-600": "122 11 16", // #7a0b10
		"--color-primary-700": "102 9 14", // #66090e
		"--color-primary-800": "82 7 11", // #52070b
		"--color-primary-900": "67 6 9", // #430609
		// secondary | #cb5e15 
		"--color-secondary-50": "247 231 220", // #f7e7dc
		"--color-secondary-100": "245 223 208", // #f5dfd0
		"--color-secondary-200": "242 215 197", // #f2d7c5
		"--color-secondary-300": "234 191 161", // #eabfa1
		"--color-secondary-400": "219 142 91", // #db8e5b
		"--color-secondary-500": "203 94 21", // #cb5e15
		"--color-secondary-600": "183 85 19", // #b75513
		"--color-secondary-700": "152 71 16", // #984710
		"--color-secondary-800": "122 56 13", // #7a380d
		"--color-secondary-900": "99 46 10", // #632e0a
		// tertiary | #2c2a26 
		"--color-tertiary-50": "223 223 222", // #dfdfde
		"--color-tertiary-100": "213 212 212", // #d5d4d4
		"--color-tertiary-200": "202 202 201", // #cacac9
		"--color-tertiary-300": "171 170 168", // #abaaa8
		"--color-tertiary-400": "107 106 103", // #6b6a67
		"--color-tertiary-500": "44 42 38", // #2c2a26
		"--color-tertiary-600": "40 38 34", // #282622
		"--color-tertiary-700": "33 32 29", // #21201d
		"--color-tertiary-800": "26 25 23", // #1a1917
		"--color-tertiary-900": "22 21 19", // #161513
		// success | #ffffff 
		"--color-success-50": "255 255 255", // #ffffff
		"--color-success-100": "255 255 255", // #ffffff
		"--color-success-200": "255 255 255", // #ffffff
		"--color-success-300": "255 255 255", // #ffffff
		"--color-success-400": "255 255 255", // #ffffff
		"--color-success-500": "255 255 255", // #ffffff
		"--color-success-600": "230 230 230", // #e6e6e6
		"--color-success-700": "191 191 191", // #bfbfbf
		"--color-success-800": "153 153 153", // #999999
		"--color-success-900": "125 125 125", // #7d7d7d
		// warning | #e9e107 
		"--color-warning-50": "252 251 218", // #fcfbda
		"--color-warning-100": "251 249 205", // #fbf9cd
		"--color-warning-200": "250 248 193", // #faf8c1
		"--color-warning-300": "246 243 156", // #f6f39c
		"--color-warning-400": "240 234 81", // #f0ea51
		"--color-warning-500": "233 225 7", // #e9e107
		"--color-warning-600": "210 203 6", // #d2cb06
		"--color-warning-700": "175 169 5", // #afa905
		"--color-warning-800": "140 135 4", // #8c8704
		"--color-warning-900": "114 110 3", // #726e03
		// error | #a80505 
		"--color-error-50": "242 218 218", // #f2dada
		"--color-error-100": "238 205 205", // #eecdcd
		"--color-error-200": "233 193 193", // #e9c1c1
		"--color-error-300": "220 155 155", // #dc9b9b
		"--color-error-400": "194 80 80", // #c25050
		"--color-error-500": "168 5 5", // #a80505
		"--color-error-600": "151 5 5", // #970505
		"--color-error-700": "126 4 4", // #7e0404
		"--color-error-800": "101 3 3", // #650303
		"--color-error-900": "82 2 2", // #520202
		// surface | #201e1e 
		"--color-surface-50": "222 221 221", // #dedddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "199 199 199", // #c7c7c7
		"--color-surface-300": "166 165 165", // #a6a5a5
		"--color-surface-400": "99 98 98", // #636262
		"--color-surface-500": "32 30 30", // #201e1e
		"--color-surface-600": "29 27 27", // #1d1b1b
		"--color-surface-700": "24 23 23", // #181717
		"--color-surface-800": "19 18 18", // #131212
		"--color-surface-900": "16 15 15", // #100f0f
		
	}
}