import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		user: { _id: '66bf0a1de9d9e3c0a5b7a1c4' },
		users: [],
	}),

	actions: {
		setUser(user) {
			this.user = user;
		},
		setUsersData(users) {
			this.users = users;
		},
	},
});
