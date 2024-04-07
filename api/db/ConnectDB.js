import mongoose from 'mongoose';
const ConnectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB is connected successfully!!!`);
  } catch (error) {
    console.log(error);
  }
};
export default ConnectDB;
