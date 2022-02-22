import { Request, Response, NextFunction } from 'express';
import UserService from '../services/userService';

const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  const { userName } = req.body;
  const invalidUserName = UserService.validateUserName(userName);
  if (invalidUserName) {
    res.status(invalidUserName.code).json({ error: invalidUserName.error });
  }
  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  const invalidClasse = UserService.validateClasse(classe);
  if (invalidClasse) {
    res.status(invalidClasse.code).json({ error: invalidClasse.error });
  }
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  const invalidLevel = UserService.validateLevel(level);
  if (invalidLevel) {
    res.status(invalidLevel.code).json({ error: invalidLevel.error });
  }
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  const invalidPassword = UserService.validatePassword(password);
  if (invalidPassword) {
    res.status(invalidPassword.code).json({ error: invalidPassword.error });
  }
  next();
};

const create = async (req: Request, res: Response) => {
  const user = await UserService.create(req.body);
  if (user) {
    res.status(201).json(user);
  }
  return res.status(500).json({ error: 'Internal server error' });
};

export default {
  validateUserName,
  validateClasse,
  validateLevel,
  validatePassword,
  create,
};
