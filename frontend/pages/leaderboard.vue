<template>
	<div class="p-leaderboard">
		<div class="px-24 pb-32 flex flex-col gap-20">
			<div
				v-for="(user, index) in usersComputed"
				:key="index"
				class="flex items-center gap-12"
			>
				<div
					v-text="`${index + 1}`"
					class="text-16 w-40 h-40 flex justify-center items-center rounded-full bg-[var(--surface)] text-[var(--primary)]"
				></div>

				<span v-text="user.name"></span>
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
	return users.value
		.map((user) => {
			let totalPoints = (
				Array.isArray(user.points) ? user.points : [0]
			).reduce((acc, points) => acc + (points || 20), 0);

			return {
				...user,
				totalPoints,
			};
		})
		.sort((a, b) => a.totalPoints - b.totalPoints);
});
</script>
