import express from 'express';

import UserController from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/', UserController.validateUserName, UserController.validateClasse, UserController.validateLevel, UserController.validatePassword, UserController.create);

export default userRouter;