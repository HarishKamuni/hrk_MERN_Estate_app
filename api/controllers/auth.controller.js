import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

//signup
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

//signin
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    // console.log(validUser);
    if (!validUser) return next(errorHandler(401, 'User not found!'));
    const validPassword = await bcrypt.compare(password, validUser.password);
    if (!validPassword) return next(errorHandler(404, 'wrong credentials!!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('Access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

//google throught signin
export const google = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) {
      const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = existUser._doc;
      res
        .cookie('Access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatePaassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashPassword = await bcrypt.hash(generatePaassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie('Access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
