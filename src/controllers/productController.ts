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

const create = async (req: Request, res: Response) => {
  const product = await ProductService.create(req.body);
  if (product) {
    return res.status(201).json({ item: product });
  }
  return res.status(500).json({ error: 'Internal server error' });
};

export default {
  validateName,
  validateAmount,
  create,
};