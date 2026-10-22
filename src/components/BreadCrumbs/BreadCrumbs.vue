<template>
	<div class="bread-crumbs">
		<router-link
			to="/"
			class="bread-crumbs__link"
		>
			Главная
		</router-link>
		<template
			v-for="item in items"
			:key="item.name"
		>
			<router-link
				v-if="item.link"
				:to="item.link"
				class="bread-crumbs__link"
			>
				{{ item.name }}
			</router-link>
			<span
				v-else
				class="bread-crumbs__link"
			>
				{{ item.name }}
			</span>
		</template>
	</div>
</template>

<script setup>
import './BreadCrumbs.scss'

defineProps({
	items: {
		type: Array,
		default: () => ([])
	}
})
</script>
