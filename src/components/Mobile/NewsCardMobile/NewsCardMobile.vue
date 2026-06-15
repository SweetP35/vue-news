<template>
	<div
		class="news-card-mobile"
		@click.prevent="goToNews"
	>
		<ArrowButtonMobile/>
		<div class="news-card-mobile__overlay">
			<div class="news-card-mobile__poster">
				<div class="news-card-mobile__date">
					<span>{{ formatDate }}</span>
				</div>
				<div class="news-card-mobile__img">
					<img
						:src="imageSrc"
						alt="img"
					>
				</div>
			</div>
			<div class="news-card-mobile__content">
				<div class="news-card-mobile__title">
					<a :href="`/news/${newsData.code}`">{{ newsData.title }}</a>
				</div>
				<Tags :tags="newsData.tags"/>
			</div>
		</div>
	</div>
</template>

<script setup>
import './NewsCardMobile.scss'
import ArrowButtonMobile from '../ArrowButtonMobile/ArrowButtonMobile.vue'
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
