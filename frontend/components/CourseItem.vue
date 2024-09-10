<template>
	<div class="c-course-item">
		<!-- <span
			class="text-16 text-left -tracking-.3 pt-48 pb-12"
			v-text="title"
		></span> -->

		<BaseInputNumber v-model="model" />
	</div>
</template>

<script setup>
defineProps({
	step: String,
	title: String,
});

const model = defineModel({ type: Number });
</script>

<style lang="postcss">
:where(.c-course-item) {
	@apply flex flex-col gap-8;
}
</style>
