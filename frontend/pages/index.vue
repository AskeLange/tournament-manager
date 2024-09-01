<template>
	<div class="p-index">
		<PageHeader title="Who are you?" step="01" />
		<PersonSelector :persons="items" />
	</div>
</template>
<script setup>
import { useMainStore } from '~/store/main.js';
const items = ref([]);

async function getUsers() {
	const { users } = useMainStore();
	items.value = users;
	console.log(items.value);
}

onMounted(() => {
	getUsers();
});
</script>
<style lang="postcss">
.p-index {
	@apply px-24px;
}
</style>
