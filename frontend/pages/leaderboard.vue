<template>
	<div class="p-leaderboard">
		<div class="px-24 pb-32 flex flex-col gap-24">
			<div
				v-for="(user, index) in usersComputed"
				:key="index"
				class="flex flex-col gap-2"
			>
				<span v-text="user.name"></span>
				<span v-text="user.title"></span>
				<span v-text="user.totalPoints"></span>
			</div>
		</div>
	</div>
</template>

<script setup>
const users = ref([]);
await update();

async function update() {
	users.value = (await getAllUsers()).users;
	setTimeout(update, 5000);
}

const usersComputed = computed(() => {
	return users.value.map((user) => {
		let totalPoints = (
			Array.isArray(user.points) ? user.points : [0]
		).reduce((acc, points) => acc + points, 0);

		return {
			...user,
			totalPoints,
		};
	});
});
</script>
