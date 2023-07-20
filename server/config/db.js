import mongoose from "mongoose";

const ConnectionDatabase = async (url) => {
  try {
    await mongoose.connect(`${url}`);
    console.log("database connected!👋");
  } catch (error) {
    console.log("Error", error);
  }
};

export default ConnectionDatabase;
