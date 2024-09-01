<template>
	<div class="c-person-selector">
		<template v-for="person in persons">
			<PersonCard v-bind="{ img: person.image }" />
		</template>
	</div>
</template>

<script setup>
defineProps({
	persons: Array,
});
</script>
<style lang="postcss">
.c-person-selector {
	@apply grid grid-cols-2 gap-8 overflow-hidden;
}
</style>
