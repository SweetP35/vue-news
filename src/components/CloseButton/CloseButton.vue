<template>
	<div
		class="close-button"
		@click="$emit('close')"
	>
		<img
			src="@/assets/images/icons/close.svg"
			alt="close"
		>
	</div>
</template>


<script setup>
import './CloseButton.scss'

defineEmits(['close'])
</script>


