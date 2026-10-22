import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	base: '/vue-news/',
	plugins: [
		vue(),
		vueDevTools(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@views': fileURLToPath(new URL('./src/views', import.meta.url)),
			'@router': fileURLToPath(new URL('./src/router', import.meta.url)),
		},
	},
	server: {
		port: 3000,
		open: true,
		host: true,
		proxy: {
			'/api': {
				target: 'https://bsk-admin-test.testers-site.ru',
				changeOrigin: true,
			},
		},
	},
	build: {
		target: 'es2015',
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) return 'vendor'
				},
			},
		},
	},
	css: {
		devSourcemap: true
	},
})
