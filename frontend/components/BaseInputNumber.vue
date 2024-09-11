<template>
	<div class="c-base-input-number">
		<button
			:class="[
				'w-56 h-56 m-4 rounded-full bg-[var(--canvas)]',
				'text-#191919 text-24 font-400',
				'duration-500 ease-in-out',
				{ 'opacity-10': !model, 'opacity-90': model },
			]"
			@click="() => (model = Math.max(model - 1, 0))"
		>
			<SvgRemove class="w-24" />
		</button>

		<div
			:class="[
				'flex-1 h-64 text-16  text-[var(--primary)] font-400',
				'flex flex-col justify-center items-center',
				'-tracking-.5 leading-130%',
				'duration-500 ease-in-out',

				{
					'opacity-40': !model,
				},
			]"
		>
			<!-- <span class="opacity-40">Devils Course</span> -->
			<span>{{ !model ? 'DNF' : `${model} throws` }}</span>
		</div>

		<button
			:class="[
				'w-56 h-56 m-4 rounded-full bg-[var(--canvas)]',
				'text-#191919 text-24 font-400',
				'duration-500 ease-in-out',
				{ 'opacity-10': model >= 20, 'opacity-90': model < 20 },
			]"
			@click="() => (model = Math.min(model + 1, 20))"
		>
			<SvgAdd class="w-24" />
		</button>
	</div>
</template>

<script setup>
import SvgAdd from '~/assets/svgs/icon-add.svg';
import SvgRemove from '~/assets/svgs/icon-remove.svg';

const model = defineModel({ type: Number, default: 0 });
</script>

<style lang="postcss">
:where(.c-base-input-number) {
	@apply flex rounded-full overflow-clip;
	background-color: var(--surface);

	& > button {
		@apply flex justify-center items-center;
	}
}
</style>
