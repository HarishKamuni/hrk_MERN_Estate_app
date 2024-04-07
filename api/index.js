import express from 'express';
import ConnectDB from './db/ConnectDB.js';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';

const app = express();
dotenv.config();

app.use('/api/user', userRoute);

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO);
    app.listen(5000, () => {
      console.log(`server is running on port 5000`);
    });
  } catch (error) {}
};
start();
