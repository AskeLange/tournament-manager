<template>
	<div class="c-course-item">
		<!-- <span
			class="opacity-80 text-center text-12 tracking-2 uppercase"
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
	@apply flex flex-col gap-24 px-24;
}
</style>
