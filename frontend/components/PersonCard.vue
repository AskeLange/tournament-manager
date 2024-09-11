<template>
	<Transition name="person-appear" appear>
		<figure class="c-person-card">
			<img
				:src="img"
				alt="A person"
				class="w-full h-full object-cover aspect-square grayscale"
			/>
		</figure>
	</Transition>
</template>
<script setup>
defineProps({
	img: String,
	name: String,
});
</script>
<style lang="postcss">
:where(.c-person-card) {
	@apply rounded-8px overflow-hidden cursor-pointer;
}

.person-appear-enter-active,
.person-appear-leave-active {
	transition: all 0.3s calc((var(--card-delay) * 175ms) + 0.1s)
		var(--easing-ease-out-back);
}

.person-appear-enter-from,
.person-appear-leave-to {
	@apply opacity-0 -translate-y-12;
}
</style>
