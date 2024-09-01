export const getUser = async (id) => {
    try {
        const res = await $fetch(`/api/users/${id}`);
        return res;
    } catch (err) {
        console.error(err);
    }
}
