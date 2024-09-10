<template>
	<div class="c-page-header">
		<div class="flex gap-8">
			<span class="text-#191919 !text-opacity-40 -tracking-0.32 text-20">
				{{ step }}
			</span>

			<span class="-tracking text-20 -tracking-.2">{{ title }}</span>
		</div>
	</div>
</template>
<script setup>
defineProps({
	title: String,
	step: String,
});
</script>

<style lang="postcss">
.c-page-header {
	@apply py-42;
}
</style>
