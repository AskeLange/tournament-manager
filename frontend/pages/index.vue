<template>
	<div class="p-index">
		<Transition name="person-selector-appear" appear>
			<div class="py-42 px-24px">
				<div class="flex gap-8">
					<span class="text-#191919 !text-opacity-40 text-16"
						>01</span
					>

					<span class="text-16">Who are you?</span>
				</div>
			</div>
		</Transition>
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
<style lang="postcss">
.person-selector-appear-enter-active,
.person-selector-appear-leave-active {
	transition: all 0.5s ease-in-out;
}

.person-selector-appear-enter-from,
.person-selector-appear-leave-to {
	@apply opacity-0 translate-y-12;
}
</style>
