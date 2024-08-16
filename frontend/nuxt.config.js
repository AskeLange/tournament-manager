import { fileURLToPath } from 'node:url';
import svgLoader from 'vite-svg-loader';
import breakpoints from './assets/js/breakpoints';

const mappedBreakpoints = {};
for (const [key, value] of Object.entries(breakpoints)) {
	mappedBreakpoints[`>=${key}`] = value.px;
}

export default defineNuxtConfig({
	extends: ['@limbo-works/theme-configuration', '@limbo-works/image'],

	/* The fileURLToPath is necessary if the solution is to be extendable and keep that css */
	css: [
		fileURLToPath(new URL('./assets/css/index.css', import.meta.url)),
		fileURLToPath(
			new URL('./assets/generated/css/unocss.css', import.meta.url)
		),
	],

	modules: [
		'@pinia/nuxt',
		'@nuxtjs/fontaine',
		['@unocss/nuxt', { autoImport: false }],
	],
	buildModules: [],
	plugins: [],

	vite: {
		plugins: [
			svgLoader({
				svgoConfig: {
					plugins: [
						{
							name: 'mergePaths',
							active: false,
						},
						{
							name: 'removeViewBox',
							active: false,
						},
						{
							name: 'removeDimensions',
							active: true,
						},
						{
							name: 'addAttributesToSVGElement',
							params: {
								attributes: [
									'aria-hidden="true"',
									'focusable="false"',
								],
							},
						},
						{
							name: 'prefixIds',
							params: {
								prefix: {
									toString() {
										this.counter = this.counter || 0;
										return `svg-${this.counter++}`;
									},
								},
							},
						},
					],
				},
			}),
		],
	},

	image: {
		screens: {
			...mappedBreakpoints,
		},
	},

	router: {
		options: {
			linkActiveClass: 'nuxt-link--active',
			linkExactActiveClass: 'nuxt-link--exact-active',
		},
	},

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		plugins: ['~/server/index.js'],
	},
	runtimeConfig: {
		mongodbUri: process.env.MONGODB_URI,
	},

	postcss: {
		plugins: {
			'postcss-nesting': {},
		},
	},
});
