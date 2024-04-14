import express from 'express';
import ConnectDB from './db/ConnectDB.js';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

//middleware
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || 'Internal error!!';
  return res.status(statuscode).json({
    success: false,
    statuscode,
    message,
  });
});

const start = async () => {
  try {
    await ConnectDB(process.env.MONGO);
    app.listen(5000, () => {
      console.log(`server is running on port 5000`);
    });
  } catch (error) {}
};
start();
