<template>
	<div class="p-courses">
		<div
			v-if="user"
			class="px-24 pt-48 flex flex-col gap-4 leading-115% text-center"
		>
			<span class="text-16 -tracking-.2" v-text="user.name"></span>

			<span
				class="opacity-40 text-12 tracking-1 uppercase"
				v-text="user.title"
			></span>
		</div>

		<div class="px-24 py-64 flex flex-col gap-16">
			<CourseItem
				v-for="(title, index) in courses"
				:key="index"
				:step="`0${index + 1}`.slice(-2)"
				:title="title"
				v-model="values[index]"
			/>
		</div>
	</div>
</template>

<script setup>
import { useMainStore } from '~/store/main.js';

const courses = [
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
	'Lorem',
	'Lorem Ipsum',
];

const cookie = useCookie('user_id');
const store = useMainStore();
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
</script>
