<template>
	<div class="c-person-selector">
		<PersonCard
			v-for="(person, index) in persons"
			v-bind="{ img: person.image }"
			:style="`--card-delay:${index}`"
			@click="set(person)"
		/>
	</div>
</template>

<script setup>
defineProps({
	persons: Array,
});
const cookie = useCookie('user_id');
import { useMainStore } from '~/store/main.js';
const { setUser } = useMainStore;

if (cookie.value) {
	await navigateTo('/courses');
}

function set(user) {
	cookie.value = user._id;
	setUser(user);
}
</script>
<style lang="postcss">
.c-person-selector {
	@apply grid grid-cols-2 gap-8 overflow-hidden;
}
</style>
