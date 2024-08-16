import { User } from '~~/server/models/user.model';

export default defineEventHandler(async (event) => {
    const user = await User.findOne(event.context.path);
    console.log(user)
    return {
        user,
    };
});