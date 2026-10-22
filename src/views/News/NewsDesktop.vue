<template>
	<div class="news">
		<div class="container">
			<div
				v-if="loading"
				class="news-loading"
			>
				Loading...
			</div>
			<NewsCard
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
import { fetchNews } from '@/api/news'
import NewsCard from '@/components/Desktop/NewsCard/NewsCard.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const news = ref(null)
const loading = ref(false)
const errorMessage = ref('')


const getNews = async () => {
	loading.value = true
	errorMessage.value = ''
	try {
		news.value = await fetchNews('chto-budet-s-ipotekoy-v-2024-godu')
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
  font-size: 24rem;
}
</style>
