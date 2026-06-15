<template>
	<div
		v-if="news"
		class="news-content"
	>
		<BreadCrumbs :items="breadCrumbsLinks"/>
		<div class="news-content__tags">
			<Tags :tags="news.result.tags"/>
		</div>
		<div class="news-content__title">
			{{ news.result.title }}
		</div>
		<div class="news-content__date">
			{{ formatDate }}
		</div>
		<div class="news-content__wrapper">
			<div
				v-for="(item, index) in news.result.content"
				:key="index"
				class="news-content-block"
			>
				<div
					v-if="item.type === 'text'"
					class="news-content-block__text"
				>
					{{ item.content }}
				</div>
				<div
					v-if="item.type === 'mediaBlock'"
					class="news-content-block__media"
				>
					<img
						:src="item.element.src"
						alt="image"
					>
					<div class="news-content-block__description">
						{{ item.description }}
					</div>
				</div>
			</div>
		</div>
		<div class="news-content__next-news">
			<div class="news-content__next-news-title">
				Следующая статья
			</div>
			<NewsCard :news="news.result.next"/>
		</div>
	</div>
</template>

<script setup>
import './NewsContent.scss'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs.vue'
import { computed } from 'vue'
import Tags from '@/components/Tags/Tags.vue'
import NewsCard from '@/components/Desktop/NewsCard/NewsCard.vue'

const props = defineProps({
	news: {
		type: Object,
		default: () => ({})
	},
	breadCrumbsLinks: {
		type: Array,
		default: () => ([])
	}
})

const formatDate = computed(() => props.news.result.date.replace(/-/g, '.'))



</script>
