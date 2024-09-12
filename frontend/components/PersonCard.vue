<template>
	<figure v-if="isMounted" class="c-person-card">
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

const isMounted = ref(false);

onMounted(() => {
	isMounted.value = true;
});
</script>
<style lang="postcss">
:where(.c-person-card) {
	@apply rounded-8px overflow-hidden cursor-pointer;
}
</style>
