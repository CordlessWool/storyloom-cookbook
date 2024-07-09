import { defineConfig } from 'embodi';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	publicDir: './public',
	templatePrefix: './__layout',
	source: '/content',
	plugins: [
		svelte({
			preprocess: vitePreprocess({
				postcss: true,
				scss: true,
			})
		})
	]
})