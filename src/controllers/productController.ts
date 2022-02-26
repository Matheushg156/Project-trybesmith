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

export default {
  validateName,
};