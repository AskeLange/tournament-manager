import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	name: {
		required: true,
		type: String,
	},
	points: {
		required: true,
		type: Array,
		default: [],
	},
	image: {
		type: String,
	},
});

export const User = model<any>('User', UserSchema);
