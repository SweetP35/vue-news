<template>
	<NewsMobile v-if="isMobile"/>
	<NewsDesktop v-else/>
</template>

<script setup>
import { computed } from 'vue'
import NewsDesktop from './NewsDesktop.vue'
import NewsMobile from './NewsMobile.vue'
const checkMobile = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

}
const isMobile = computed(() => checkMobile() && window.innerWidth < 768)
</script>
