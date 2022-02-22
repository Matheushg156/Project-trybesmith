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

export default {
  validateUserName,
  validateClasse,
};
