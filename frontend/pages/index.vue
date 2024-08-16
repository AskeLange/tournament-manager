<template>
	<div class="p-index">
		<PageHeader title="Who are you?"></PageHeader>
		<pre>{{ items }}</pre>
	</div>
</template>
<script setup>
import { useMainStore } from '~/store/main.js';
const items = ref([]);

async function getUsers() {
	const { users } = useMainStore();
	items.value = users;
}

onMounted(() => {
	getUsers();
});
</script>
<style lang="postcss"></style>
