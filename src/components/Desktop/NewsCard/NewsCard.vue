<template>
	<div
		class="news-card"
		@click.prevent="goToNews"
	>
		<ArrowButton/>
		<div class="news-card__overlay">
			<div class="news-card__poster">
				<div class="news-card__date">
					<span>{{ formatDate }}</span>
				</div>
				<div class="news-card__img">
					<img
						:src="imageSrc"
						alt="img"
					>
				</div>
			</div>
			<div class="news-card__content">
				<div class="news-card__title">
					<a :href="`/news/${newsData.code}`">{{ newsData.title }}</a>
				</div>
				<Tags :tags="newsData.tags"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import './NewsCard.scss'
import ArrowButton from '../ArrowButton/ArrowButton.vue'
import { computed, defineProps, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Tags from '@/components/Tags/Tags.vue'

const router = useRouter()

const props = defineProps({
	news: {
		type: Object,
		default: () => ({})
	}
})

const newsData = reactive(props.news)

const formatDate = computed(() => newsData.date.replace(/-/g, '.'))
const imageSrc = computed(() => newsData?.picture || newsData.meta.elementOgImage.src || '')

const goToNews = () => {
	router.push(`/news/${newsData.code}`)
}



</script>
