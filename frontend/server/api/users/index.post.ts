import { User } from '~~/server/models/user.model';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
	const user = await readBody(event);
	console.log(user)
	try {
		await User.create(user);
		return {
			status: 201,
			body: { message: 'User created' },
		};
	} catch (err) {
		return {
			status: 500,
			body: { message: err.message },
		};
	}

});
