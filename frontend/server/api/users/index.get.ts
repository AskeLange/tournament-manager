import { User } from '~~/server/models/user.model';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
	const users = await User.find();

	return {
		users,
	};
});
