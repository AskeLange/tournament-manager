export const updateUser = async (id, points) => {
  try {
    const user = { user: await getUser(id), points };
    await $fetch(`/api/users/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
    });
  } catch (err) {
    console.error(err);
  }
};
