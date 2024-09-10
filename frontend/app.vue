<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />

		<main
			id="main"
			class="min-h-screen text-strong mx-auto max-w-500px bg-#f5f5f5"
		>
			<SiteHeader />
			<NuxtPage />
		</main>
	</div>
</template>
<script setup>
import { useMainStore } from '~/store/main.js';
const { setUsers } = useMainStore();
const { users } = await getAllUsers();
setUsers(users);
</script>
<style lang="postcss">
:where(#app) {
	@apply text-strong;
	--easing-ease-out-back: cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
