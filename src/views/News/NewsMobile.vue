<template>
	<div class="news">
		<div class="container">
			<div
				v-if="loading"
				class="news-loading"
			>
				Loading...
			</div>
			<NewsCardMobile
				v-if="news && !loading"
				:news="news.result"
			/>
			<RouterView/>
			<div v-if="errorMessage && !loading">
				{{ errorMessage }}
			</div>
		</div>
	</div>
</template>

<script setup>
import NewsCardMobile from '@/components/Mobile/NewsCardMobile/NewsCardMobile.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const news = ref(null)
const loading = ref(false)
const errorMessage = ref('')


const getNews = async () => {
	loading.value = true
	errorMessage.value = ''
	try {
		const response = await fetch('/api/news/chto-budet-s-ipotekoy-v-2024-godu')
		const { data } = await response.json()
		news.value = data
	} catch (error) {
		console.error(error)
		errorMessage.value = 'Ошибка загрузки новости'
	} finally {
		loading.value = false
	}
}
getNews()

</script>

<style lang="scss">
.news {
 margin-top: 76rem;
}
.news-loading {
  font-size: 15rem;
}
</style>
