<template>
	<div class="h-64"></div>

	<div :class="['c-site-header', { 'c-site-header--open': isOpen }]">
		<div
			class="flex justify-between items-center border-b border-#e1e1e1 bg-#f5f5f5 z-999 relative h-48"
		>
			<NuxtLink href="/" class="ml-16 mt-3 flex gap-8 scale-105">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="15"
					height="19"
					viewBox="0 0 15 19"
					fill="none"
					class="mt-1"
				>
					<path
						d="M0.0111046 11.2216L0.0111043 8.03525C0.0111043 8.02411 0.0111043 8.01297 0.0111043 8.01297L0.0111043 7.56733C0.0111039 3.57885 3.25831 0.325685 7.23947 0.325684C11.2206 0.325684 14.4678 3.57885 14.4678 7.56733L14.4678 14.7533C14.4678 14.7644 14.4678 14.7755 14.4678 14.7755L14.4678 17.9619C14.4678 17.973 14.4678 17.9841 14.4678 17.9841L14.4678 18.5858L13.834 18.5858L0.633857 18.5858L-1.65264e-05 18.5858L-1.65779e-05 17.9953C-1.65789e-05 17.9842 -1.65799e-05 17.973 -1.65799e-05 17.973L-1.68579e-05 14.7867L-1.68589e-05 14.7755L-1.68744e-05 14.5973L-1.68754e-05 14.5861L-1.71535e-05 11.3998C-1.71544e-05 11.3887 -1.71544e-05 11.3887 -1.71554e-05 11.3775L-1.71651e-05 11.2661C0.0111036 11.2439 0.0111046 11.2327 0.0111046 11.2216ZM6.01621 10.7425L6.01621 8.51431L1.12316 8.51431L1.12316 10.7425L6.01621 10.7425ZM1.12316 11.8566L1.12316 14.0848L9.12997 14.0848L9.12997 11.8566L1.12316 11.8566ZM7.23947 1.43978C3.92554 1.43978 1.21212 4.10248 1.12316 7.40021L6.49439 7.40021C6.83913 7.40021 7.12826 7.68988 7.12826 8.03525L7.12826 10.7425L9.60815 10.7425C9.95289 10.7425 10.242 11.0322 10.242 11.3775L10.242 14.1405L13.3558 14.1405L13.3558 7.56733C13.3558 4.19161 10.609 1.43978 7.23947 1.43978ZM13.3558 17.4828L13.3558 15.2546L1.12316 15.2546L1.12316 17.4828L13.3558 17.4828Z"
						fill="#101010"
					/>
				</svg>
				<p class="font-500 text-12">Cornhole Cup</p>
			</NuxtLink>
			<button
				v-if="store.user?._id"
				class="h-full aspect-1 flex justify-center items-center border-l border-#e1e1e1 cursor-pointer"
				@click="doMenu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
				>
					<g clip-path="url(#clip0_51_23)">
						<path
							d="M2.43124 11.7124H13.5687V10.4749H2.43124V11.7124ZM2.43124 8.6186H13.5687V7.3811H2.43124V8.6186ZM2.43124 4.28735V5.52485H13.5687V4.28735H2.43124Z"
							fill="#191919"
						/>
					</g>
					<defs>
						<clipPath id="clip0_51_23">
							<rect
								width="14.85"
								height="14.85"
								fill="white"
								transform="translate(0.575012 0.574951)"
							/>
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>

		<Transition name="menu-up">
			<ul
				v-if="isOpen && store.user?._id"
				class="absolute top-[calc(100%)] w-full z-998"
			>
				<li
					class="border-b border-#e1e1e1 bg-#f5f5f5 flex justify-end relative z-3"
				>
					<NuxtLink
						to="/leaderboard"
						class="uppercase tracking-0.8px text-10 py-14 px-16 w-full text-right"
						>leaderboard</NuxtLink
					>
				</li>
				<li
					class="border-b border-#e1e1e1 bg-#f5f5f5 flex justify-end relative z-2"
				>
					<NuxtLink
						to="/courses"
						class="uppercase tracking-0.8px text-10 py-14 px-16 w-full text-right"
						>courses</NuxtLink
					>
				</li>
				<li
					class="border-b border-#e1e1e1 bg-#f5f5f5 flex justify-end relative z-1"
				>
					<button
						to="/logout"
						class="uppercase tracking-0.8px text-10 py-14 px-16 w-full text-right"
						@click="logoutUser"
					>
						log out
					</button>
				</li>
			</ul>
		</Transition>
	</div>
</template>
<script setup>
import { useMainStore } from '~/store/main';

const route = useRoute();
const store = useMainStore();
const isOpen = ref(false);

watch(
	() => route.path,
	() => {
		isOpen.value = false;
	}
);

function doMenu() {
	isOpen.value = !isOpen.value;
}

async function logoutUser() {
	const cookie = useCookie('user_id');
	cookie.value = null;
	store.setUser(null);
	await navigateTo('/');
}
</script>
<style lang="postcss">
.c-site-header {
	@apply fixed top-0 w-full mb-32 z-10;

	&:before {
		@apply fixed top-0 left-0 bottom-0 right-0 z-9;
		@apply bg-#191919 opacity-0 pointer-events-none;
		transition: 0.4s cubic-bezier(0.7, 0, 0.3, 1);
		content: '';
	}
}

.c-site-header--open:before {
	@apply !opacity-70;
}

.menu-up-enter-active,
.menu-up-leave-active {
	&,
	& li,
	& li > * {
		transition: 0.4s cubic-bezier(0.7, 0, 0.3, 1);
	}
}

.menu-up-enter-from,
.menu-up-leave-to {
	@apply -translate-y-full;

	& li:nth-child(1) > * {
		@apply opacity-80;
	}
	& li:nth-child(2) {
		@apply -translate-y-50%;
		& > * {
			@apply opacity-50;
		}
	}
	& li:nth-child(3) {
		@apply -translate-y-100%;
		& > * {
			@apply opacity-20;
		}
	}
}
</style>
