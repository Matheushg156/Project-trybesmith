import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { order } = req.body;
  const invalidOrder = OrderService.validateOrder(order);
  if (invalidOrder) {
    return res.status(invalidOrder.code).json({ error: invalidOrder.error });
  }
  next();
};

export default {
  validateOrder,
};