export const createUser = async (user) => {
  try {
    await $fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
  } catch (err) {
    console.error(err);
  }
};
