export const getAllUsers = async () => {
    try {
        const res = await $fetch('/api/users');
        return res;
    } catch (err) {
        console.error(err);
    }
}
