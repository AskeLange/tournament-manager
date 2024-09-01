<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />

		<main id="main">
			<NuxtPage />
		</main>
	</div>
</template>
<script setup>
import { useMainStore } from '~/store/main.js';
const { setUsersData } = useMainStore();
const { users } = await getAllUsers();
setUsersData(users);
</script>
<style lang="postcss">
:where(#app) {
	@apply bg-primary text-strong;
}
</style>
