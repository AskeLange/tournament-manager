import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		site: null,
		users: [],
	}),

	actions: {
		setSiteData(data) {
			this.site = data;
		},
		setUsersData(users) {
			this.users = users;
		},
	},
});
