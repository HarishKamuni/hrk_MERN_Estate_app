import express from 'express';
import ConnectDB from './db/ConnectDB.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO);
    app.listen(5000, () => {
      console.log(`server is running on port 5000`);
    });
  } catch (error) {}
};
start();
