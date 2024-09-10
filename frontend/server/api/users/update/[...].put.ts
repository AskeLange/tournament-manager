import { User } from '~~/server/models/user.model';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
	const { user, points } = await readBody(event);
	const updatedPoints = points;

	console.log(user.user._id, updatedPoints);

	try {
		await User.updateOne(
			{ _id: user.user._id },
			{ $set: { points: updatedPoints } }
		);
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
