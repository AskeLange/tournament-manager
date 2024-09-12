<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />

		<main id="main" class="min-h-screen text-strong mx-auto bg-#f5f5f5">
			<SiteHeader />
			<NuxtPage />
		</main>
	</div>
</template>

<script setup>
import { useMainStore } from '~/store/main.js';

const store = useMainStore();
const cookie = useCookie('user_id');
const users = (await getAllUsers()).users;
console.log(users);

store.setUsers(users);

if (cookie.value) {
	store.setUser(store.users.find(({ _id }) => _id === cookie.value));
}
</script>

<style lang="postcss">
:where(#app) {
	@apply text-strong;
	--easing-ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
