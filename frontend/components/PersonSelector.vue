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
import { useMainStore } from '~/store/main.js';
defineProps({
	persons: Array,
});

const store = useMainStore();
const cookie = useCookie('user_id');

async function set(user) {
	cookie.value = user._id;
	store.setUser(user);
	await navigateTo('/courses');
}
</script>
<style lang="postcss">
.c-person-selector {
	@apply grid grid-cols-2 gap-8;
}
</style>
