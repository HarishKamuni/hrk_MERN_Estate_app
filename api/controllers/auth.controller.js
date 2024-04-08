import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res, next) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });
  try {
    await newUser.save();
    res.status(201).json('user created successfully!!');
  } catch (error) {
    next(error);
  }
};
