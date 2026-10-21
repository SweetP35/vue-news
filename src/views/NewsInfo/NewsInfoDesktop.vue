<template>
	<PopupPage>
		<div
			v-if="loading"
			class="news-loading"
		>
			Loading...
		</div>
		<NewsContent
			v-if="!loading && newsData"
			:news="newsData"
			:bread-crumbs-links="breadCrumbsLinks"
		/>
	</PopupPage>
</template>

<script setup>
import PopupPage from '@/components/Popup/Page/PopupPage.vue'
import NewsContent from '@/components/Desktop/ContentPopup/News/NewsContent.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const newsData = ref(null)
const loading = ref(true)
const breadCrumbsLinks = [
	{
		name: 'Новости',
		link: '/news'
	}
]

watch(() => route.params.id, () => {
	getNews()
})

const getNews = async () => {
	loading.value = true

	try {
		const response = await fetch(`/api/news/${route.params.id}`)
		const { data } = await response.json()
		newsData.value = data
		breadCrumbsLinks[1] = {
			name: data.result.title
		}
	} catch (error) {
		console.error(error)
	} finally {
		loading.value = false
	}
}

onMounted(() => {
	getNews()
})


</script>
<style lang="scss">
.news-loading {
  font-size: 24rem;
}
</style>
