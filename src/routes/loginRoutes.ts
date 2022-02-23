import express from 'express';

import UserController from '../controllers/userController';
import LoginController from '../controllers/loginController';

const loginRouter = express.Router();

loginRouter.post(
  '/',
  UserController.validateUserName,
  UserController.validatePassword,
  LoginController.loginUser,
);

export default loginRouter;