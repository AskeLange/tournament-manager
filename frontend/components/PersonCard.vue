<template>
	<div class="c-person-card rounded-8px overflow-hidden">
		<img
			:src="img"
			alt="A person"
			class="w-full h-full object-cover aspect-square grayscale"
		/>
	</div>
</template>
<script setup>
defineProps({
	img: String,
	name: String,
});
</script>
<style lang="postcss"></style>
