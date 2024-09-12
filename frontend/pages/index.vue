<template>
	<div class="p-index">
		<Transition name="person-selector-appear">
			<div
				v-if="isMounted"
				class="px-24 py-48 flex flex-col items-center gap-8 leading-115% text-center"
			>
				<SvgCrown class="w-64 text-#111 mb-12 -rotate-6" />

				<span
					class="text-20 -tracking-1"
					v-text="'Who are you?'"
				></span>

				<!-- <span
				class="opacity-40 text-12 tracking-1 uppercase"
				v-text="'Select you'"
			></span> -->
			</div>
		</Transition>

		<PersonSelector :persons="items" class="px-24px" />
	</div>
</template>
<script setup>
import SvgCrown from '~/assets/svgs/icon-crown.svg';
import { useMainStore } from '~/store/main.js';

const store = useMainStore();
const cookie = useCookie('user_id');
const items = ref(store.users);
const isMounted = ref(false);

if (cookie.value) {
	store.setUser(store.users.find(({ _id }) => _id === cookie.value));
	await navigateTo('/courses');
}

onMounted(() => {
	isMounted.value = true;
});
</script>
<style lang="postcss">
/* .person-selector-appear-enter-active,
.person-selector-appear-leave-active {
	transition: all 0.5s ease-in-out;
}

.person-selector-appear-enter-from,
.person-selector-appear-leave-to {
	@apply opacity-0 translate-y-12;
} */
</style>
