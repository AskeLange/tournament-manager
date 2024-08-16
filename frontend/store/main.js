import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		site: null,
	}),

	actions: {
		setSiteData(data) {
			this.site = data;
		},
	},
});
