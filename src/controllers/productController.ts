import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productService';

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const invalidName = ProductService.validateName(name);
  if (invalidName) {
    return res.status(invalidName.code).json({ error: invalidName.error });
  }
  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  const invalidAmount = ProductService.validateAmount(amount);
  if (invalidAmount) {
    return res.status(invalidAmount.code).json({ error: invalidAmount.error });
  }
  next();
};

export default {
  validateName,
  validateAmount,
};