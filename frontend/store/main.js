import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => ({
		user: {},
		users: [],
	}),

	actions: {
		setUser(user) {
			this.user = user;
		},
		setUsers(users) {
			this.users = users;
		},
	},
});
