import { defineConfig } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

import {
	makeThemeUtilities,
	makeRules,
} from '@limbo-works/theme-configuration/components/ThemeConfiguration/helpers.uno.js';

import presetCore from './assets/js/unocss/preset-core.js';
import presetNoDefaultRem from './assets/js/unocss/preset-no-default-rem.js';
import defaultConfig from './assets/js/theme-configuration.default.js';
import breakpoints from './assets/js/breakpoints.js';

export default defineConfig({
	presets: [
		presetCore({ breakpoints }),
		presetNoDefaultRem(),
	],

	transformers: [transformerVariantGroup(), transformerDirectives()],
	theme: { ...makeThemeUtilities(defaultConfig) },
	rules: [...makeRules(defaultConfig)],

	content: {
		pipeline: {
			exclude: [
				/* Something here is wreaking havoc with unoCSS */
				'**/ThemeConfiguration.vue',
			],
		},
	},

	cli: {
		entry: {
			patterns: [
				'assets/css/**/*.css',
				'components/**/*.vue',
				'pages/**/*.vue',
				'doctypes/**/*.vue',
				'layouts/**/*.vue',
				'app.vue',
				'error.vue',
			],
			outFile: './assets/generated/css/unocss.css',
		},
	},
});
