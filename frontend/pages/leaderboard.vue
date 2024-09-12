<template>
	<div class="p-leaderboard">
		<div class="px-24 pb-32 flex flex-col gap-20">
			<div
				class="p-leaderboard__podium flex items-end w-full overflow-clip mb-64 mt-10vw"
			>
				<div class="flex-1 flex flex-col items-center">
					<div
						class="w-5vw h-5vw min-w-48 min-h-48 rounded-full mb-20 overflow-clip"
					>
						<img
							:src="usersComputed[2]?.image"
							class="w-full h-full object-cover object-center"
						/>
					</div>
					<div
						class="bg-#191919 w-full h-15vh flex justify-center items-end pb-16"
					></div>
				</div>
				<div class="flex-1 flex flex-col items-center -mx-1">
					<div
						class="w-5vw h-5vw min-w-48 min-h-48 rounded-full mb-20 overflow-clip"
					>
						<img
							:src="usersComputed[0]?.image"
							class="w-full h-full object-cover object-center"
						/>
					</div>
					<div
						class="bg-#191919 w-full h-25vh flex justify-center items-end pb-16"
					></div>
				</div>
				<div class="flex-1 flex flex-col items-center -mx-1">
					<div
						class="w-5vw h-5vw min-w-48 min-h-48 rounded-full mb-20 overflow-clip"
					>
						<img
							:src="usersComputed[1]?.image"
							class="w-full h-full object-cover object-center"
						/>
					</div>
					<div
						class="bg-#191919 w-full h-20vh flex justify-center items-end pb-16"
					></div>
				</div>
			</div>

			<div class="grid gap-40">
				<div
					v-for="(user, index) in usersComputed.slice(3)"
					:key="index"
					class="flex flex-col items-center justify-center gap-12"
				>
					<div
						v-text="`${index + 4}`"
						class="text-16 w-40 h-40 flex justify-center items-center rounded-full bg-[var(--surface)] text-[var(--primary)]"
					></div>

					<span class="block" v-text="user.name"></span>
				</div>
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

<style lang="postcss">
:where(.p-leaderboard) {
	& .grid {
		grid-template-columns: repeat(3, 1fr);

		@media screen and (max-width: 960px) {
			grid-template-columns: repeat(1, 1fr);
			row-gap: 16px;

			& > * {
				@apply flex-row justify-start;
			}
		}
	}
}
</style>
