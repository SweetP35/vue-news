<template>
	<NewsInfoMobile v-if="isMobile"/>
	<NewsInfoDesktop v-else/>
</template>

<script setup>
import { computed } from 'vue'
import NewsInfoMobile from './NewsInfoMobile.vue'
import NewsInfoDesktop from './NewsInfoDesktop.vue'


const checkMobile = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

}
const isMobile = computed(() => checkMobile() && window.innerWidth < 768)

</script>
