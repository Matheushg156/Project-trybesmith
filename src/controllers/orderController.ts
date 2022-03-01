import { Request, Response, NextFunction } from 'express';
import OrderModel from '../models/orderModel';
import OrderService from '../services/orderService';

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

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const order = await OrderService.getById(id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  return res.status(200).json({ order });
};

export default {
  validateOrder,
  create,
  getById,
};