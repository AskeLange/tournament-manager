export const updateUser = async (id, points) => {
	try {
		const user = { id, points };

		await $fetch(`/api/users/update/${id}`, {
			method: 'PUT',
			body: JSON.stringify(user),
		});
	} catch (err) {
		console.error(err);
	}
};
