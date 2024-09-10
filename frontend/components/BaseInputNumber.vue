<template>
	<div class="c-base-input-number">
		<button
			:class="[
				'w-56 h-56 m-4 rounded-full bg-[var(--canvas)]',
				'text-[var(--primary)] text-24 font-400',
				'duration-500 ease-in-out',
				{ 'opacity-30': !model },
			]"
			@click="() => (model = Math.max(model - 1, 0))"
		></button>

		<div
			:class="[
				'flex-1 h-64 text-[var(--primary)]',
				'flex justify-center items-center',

				{
					'opacity-30': !model,
				},
			]"
			v-text="!model ? 'DNF' : model"
		></div>

		<button
			:class="[
				'w-56 h-56 m-4 rounded-full bg-[var(--canvas)]',
				'text-[var(--primary)] text-24 font-400',
			]"
			@click="() => model++"
		></button>
	</div>
</template>

<script setup>
const model = defineModel({ type: Number, default: 0 });
</script>

<style lang="postcss">
:where(.c-base-input-number) {
	@apply flex rounded-full overflow-clip;
	background-color: var(--surface);

	& > button {
		@apply flex justify-center items-center pb-4;
	}
}
</style>
