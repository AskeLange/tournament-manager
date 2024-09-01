import mongoose from "mongoose";

export default async function () {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log('Failed to connect to MongoDB')
    console.error(e);
  }
}