import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('../views/News/News.vue'),
			children: [
				{
					path: ':id',
					name: 'news-popup',
					component: () => import('@/views/NewsInfo/NewsInfo.vue')
				}
			]
		}
	]
})

export default router
