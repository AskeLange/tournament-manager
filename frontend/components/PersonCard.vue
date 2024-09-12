<template>
	<figure class="c-person-card" ref="card">
		<img
			:src="img"
			alt="A person"
			class="w-full h-full object-cover aspect-square grayscale"
		/>
	</figure>
</template>
<script setup>
defineProps({
	img: String,
	name: String,
});

const card = ref(null);
const observer = ref(null);
const isVisible = ref(false);

function callback(e) {
	isVisible.value = e[0].isIntersecting;
	if (e[0].isIntersecting) {
		e[0].target.classList.add('c-person-card--visible');
	} else {
		e[0].target.classList.remove('c-person-card--visible');
	}
}

onMounted(() => {
	observer.value = new IntersectionObserver(callback, {
		rootMargin: '-50px',
	});
	observer.value.observe(card.value);
});
onBeforeUnmount(() => {
	observer.value.disconnect();
});
</script>
<style lang="postcss">
:where(.c-person-card) {
	@apply rounded-8px overflow-hidden cursor-pointer opacity-0 -translate-y-24;
	transition: all 0.3s var(--easing-ease-out-back);
}

.c-person-card.c-person-card--visible {
	@apply opacity-100 translate-y-0;
}
</style>
