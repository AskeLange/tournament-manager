<template>
	<div class="p-index">
		<SiteHeader />
		<div class="py-42 px-24px">
			<div class="flex gap-8">
				<span class="text-#191919 !text-opacity-40 text-16">01</span>

				<span class="text-16">Who are you?</span>
			</div>
		</div>
		<PersonSelector :persons="items" class="px-24px" />
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
<style lang="postcss"></style>
