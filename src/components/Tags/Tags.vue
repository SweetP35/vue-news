<template>
	<div class="tags">
		<div
			v-for="(tag, index) in tags"
			:key="index"
			:class="`tags__item _${tag.values[0].color}`"
		>
			<img
				v-if="tag.values[0].src"
				:src="tag.values[0].src"
				alt="subtract"
			>
			<div>
				{{ tag.values[0].name }}
			</div>
		</div>
	</div>
</template>

<script setup>
import './Tags.scss'

defineProps({
	tags: {
		type: Array,
		default: () => ([])
	}
})
</script>
