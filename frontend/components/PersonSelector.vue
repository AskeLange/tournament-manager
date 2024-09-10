<template>
	<div class="c-person-selector">
		<template v-for="person in persons">
			<PersonCard v-bind="{ img: person.image }" @click="set(person)" />
		</template>
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

// Set user in cookie and ... store?
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
