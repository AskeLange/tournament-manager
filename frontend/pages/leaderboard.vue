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
			let points = 0;
			for (let n = 0; n < 7; n++) {
				points += user.points?.[n] || 0;
			}

			return {
				...user,
				points,
			};
		})
		.sort((a, b) => a.totalPoints - b.totalPoints);
});
</script>
