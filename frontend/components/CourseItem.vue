<template>
	<Transition name="course-appear">
		<div v-if="isMounted" class="c-course-item">
			<span
				class="text-12 text-center w-full block mt-20 tracking-1 uppercase"
				v-text="`${step}. ${title}`"
			></span>

			<!-- <span
				class="opacity-80 text-center text-12 tracking-2 uppercase"
				v-text="title"
			></span> -->

			<BaseInputNumber v-model="model" />
		</div>
	</Transition>
</template>

<script setup>
defineProps({
	step: String,
	title: String,
});

const model = defineModel({ type: Number });
const isMounted = ref(false);

onMounted(() => {
	isMounted.value = true;
});
</script>

<style lang="postcss">
:where(.c-course-item) {
	@apply flex flex-col gap-20 px-24 border-t border-#ddd pb-32 pt-16;
	touch-action: manipulation;
}

.course-appear-enter-active,
.course-appear-leave-active {
	transition: transform 0.3s calc((var(--card-delay) * 50ms) + 0.1s)
			var(--easing-ease-out-back),
		opacity 0.3s calc((var(--card-delay) * 50ms) + 0.1s)
			var(--easing-ease-out-back);
}

.course-appear-enter-from,
.course-appear-leave-to {
	@apply opacity-0 translate-y-20;
}
</style>
