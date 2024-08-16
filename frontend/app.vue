<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />

		<main id="main">
			<NuxtPage />
		</main>
	</div>
</template>

<style lang="postcss">
:where(#app) {
	@apply bg-primary text-strong;
}
</style>