<template>
	<div class="p-courses">
		<Transition name="person-selector-appear">
			<div
				v-if="user && isMounted"
				class="px-24 pt-48 flex flex-col items-center gap-8 leading-115% text-center"
			>
				<SvgCrown class="w-64 text-#111 mb-12 -rotate-6" />

				<span class="text-20" v-text="user.name"></span>

				<span
					class="opacity-40 text-12 tracking-1 uppercase"
					v-text="user.title"
				></span>
			</div>
		</Transition>

		<div class="pb-64 pt-48 flex flex-col gap-20">
			<div v-for="(title, index) in courses" :key="index">
				<CourseItem
					:step="`0${index + 1}`.slice(-2)"
					:title="title"
					v-model="values[index]"
					:style="`--card-delay:${index}`"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
import SvgCrown from '~/assets/svgs/icon-crown.svg';
import { useMainStore } from '~/store/main.js';

const courses = [
	'Stairway to Heaven',
	'Into the Jungle',
	'Through the Fire and the Flames',
	'Ring of Fire',
	'There Had to Be a Cornhole Hole',
	'Harlem Shuffle (Board)',
	'Outside the Wall',
];

const cookie = useCookie('user_id');
const store = useMainStore();

const users = (await getAllUsers()).users;
store.setUsers(users);

if (cookie.value) {
	store.setUser(store.users.find(({ _id }) => _id === cookie.value));
}

const isMounted = ref(false);
const id = store.user._id;
let user = store.users.find(({ _id }) => _id === id);

if (!user && cookie.value) {
	const x = await getUser(cookie.value);
	store.setUser(x.user);
	user = x.user;
}

if (!user) {
	await navigateTo('/');
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

onBeforeRouteLeave(() => {
	updateUser(id, values.value);
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
