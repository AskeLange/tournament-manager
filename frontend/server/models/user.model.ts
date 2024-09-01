import { Schema, model } from "mongoose";

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
        type: Number,
        default: 0,
    },
    image: {
        type: String,
    },
});

export const User = model<any>("User", UserSchema);