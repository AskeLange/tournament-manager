<template>
	<div class="p-courses">
		<Transition name="person-selector-appear">
			<div
				v-if="user && isMounted"
				class="px-24 pt-48 flex flex-col items-center gap-8 leading-115% text-center"
			>
				<SvgCrown class="w-64 text-#111 mb-12 -rotate-6" />

				<span class="text-20 -tracking-1" v-text="user.name"></span>

				<span
					class="opacity-40 text-12 tracking-1 uppercase"
					v-text="user.title"
				></span>
			</div>
		</Transition>

		<div class="py-64 flex flex-col gap-20">
			<CourseItem
				v-for="(title, index) in courses"
				:key="index"
				:step="`0${index + 1}`.slice(-2)"
				:title="title"
				v-model="values[index]"
				:style="`--card-delay:${index}`"
			/>
		</div>
	</div>
</template>

<script setup>
import SvgCrown from '~/assets/svgs/icon-crown.svg';
import { useMainStore } from '~/store/main.js';

const courses = ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'];

const cookie = useCookie('user_id');
const store = useMainStore();

const isMounted = ref(false);
const id = store.user._id;
let user = store.users.find(({ _id }) => _id === id);

if (!user) {
	const x = await getUser(cookie.value);
	store.setUser(x.user);
}

let timeout;
const values = ref(
	courses.map((_, index) => {
		return user?.points?.[index] ?? 0;
	})
);

watch(
	() => values.value,
	(value) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			updateUser(id, [...value]);
		}, 500);
	},
	{ deep: true }
);

onMounted(() => {
	isMounted.value = true;
});
</script>

<style lang="postcss">
.person-selector-appear-enter-active,
.person-selector-appear-leave-active {
	transition: all 0.5s ease-in-out;
}

.person-selector-appear-enter-from,
.person-selector-appear-leave-to {
	@apply opacity-0;
}
</style>
