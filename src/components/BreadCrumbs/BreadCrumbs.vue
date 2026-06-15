<template>
	<div class="bread-crumbs">
		<router-link
			to="/"
			class="bread-crumbs__link"
		>
			Главная
		</router-link>
		<router-link
			v-for="item in items"
			:key="item.name"
			:to="item.link"
			class="bread-crumbs__link"
		>
			{{ item.name }}
		</router-link>
	</div>
</template>

<script setup>
import './BreadCrumbs.scss'

const props = defineProps({
	items: {
		type: Array,
		default: () => ([])
	}
})

console.log(props.items)

</script>
