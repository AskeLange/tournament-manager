import { User } from '~~/server/models/user.model';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
	const { id, points } = await readBody(event);

	try {
		await User.updateOne({ _id: id }, { $set: { points } });

		return {
			status: 201,
			body: { message: 'User updated' },
		};
	} catch (err) {
		return {
			status: 500,
			body: { message: err.message },
		};
	}
});
