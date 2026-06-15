<template>
	<teleport to="#app">
		<transition
			name="popup"
			appear
			@after-leave="handleAfterLeave"
		>
			<div
				v-if="show"
				class="popup-page"
			>
				<transition
					name="overlay"
					appear
				>
					<div
						class="popup-page__overlay"
						@click="closePopup"
					/>
				</transition>
				<div class="popup-page__content">
					<CloseButton @close="closePopup"/>
					<div class="container">
						<slot/>
					</div>
				</div>
			</div>
		</transition>
	</teleport>
</template>

<script setup>
import { useRouter } from 'vue-router'
import './PopupPage.scss'
import CloseButton from '@/components/CloseButton/CloseButton.vue'

const router = useRouter()
const show = defineModel({
	type: Boolean,
	default: true
})


const closePopup = () => {
	show.value = false
}

const handleAfterLeave = () => {
	router.push('/news')
}

</script>

