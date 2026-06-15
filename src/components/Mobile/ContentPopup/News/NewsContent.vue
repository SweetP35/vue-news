<template>
	<div
		v-if="news"
		class="news-content-mobile"
	>
		<div
			v-if="!isVisibleTargetElement"
			class="header-fixed-title"
		>
			<div class="header-fixed-title__content">
				{{ news.result.title }}
			</div>
			<CloseButton @close="() => emits('close')"/>
		</div>

		<BreadCrumbs :items="breadCrumbsLinks"/>
		<div class="news-content-mobile__tags">
			<Tags :tags="news.result.tags"/>
		</div>
		<div
			ref="targetElement"
			class="news-content-mobile__title"
		>
			{{ news.result.title }}
		</div>
		<div class="news-content-mobile__date">
			{{ formatDate }}
		</div>
		<div class="news-content-mobile__wrapper">
			<div
				v-for="(item, index) in news.result.content"
				:key="index"
				class="news-content-mobile--block"
			>
				<div
					v-if="item.type === 'text'"
					class="news-content-mobile--block__text"
				>
					{{ item.content }}
				</div>
				<div
					v-if="item.type === 'mediaBlock'"
					class="news-content-mobile--block__media"
				>
					<img
						:src="item.element.src"
						alt="image"
					>
					<div class="news-content-mobile--block__description">
						{{ item.description }}
					</div>
				</div>
			</div>
		</div>
		<div class="news-content-mobile__next-news">
			<div class="news-content-mobile__next-news-title">
				Следующая статья
			</div>
			<NewsCardMobile :news="news.result.next"/>
		</div>
	</div>
</template>

<script setup>
import './NewsContent.scss'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs.vue'
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import Tags from '@/components/Tags/Tags.vue'
import NewsCardMobile from '@/components/Mobile/NewsCardMobile/NewsCardMobile.vue'
import CloseButton from '@/components/CloseButton/CloseButton.vue'

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
const emits = defineEmits(['close'])
const isVisibleTargetElement = ref(true)
const formatDate = computed(() => props.news.result.date.replace(/-/g, '.'))
const targetElement = useTemplateRef('targetElement')
const observer = ref(null)


onMounted(() => {
	observer.value = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			isVisibleTargetElement.value = entry.isIntersecting
		})
	}, {
		threshold: 0.5
	})

	observer.value.observe(targetElement.value)
})

onUnmounted(() => {
	observer.value.disconnect()
})


</script>
