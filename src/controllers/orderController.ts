import { Request, Response, NextFunction } from 'express';
import OrderService from '../services/orderService';
import OrderModel from '../models/orderModel';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const invalidOrder = OrderService.validateOrder(req.body);
  if (invalidOrder) {
    return res.status(invalidOrder.code).json({ error: invalidOrder.error });
  }
  next();
};

const create = async (req: Request, res: Response) => {
  const { id } = req.user;  
  const order = await OrderModel.create(req.body, id);
  if (order) {
    return res.status(201).json({ order });
  }
  return res.status(500).json({ error: 'Internal server error' });
};

export default {
  validateOrder,
  create,
};