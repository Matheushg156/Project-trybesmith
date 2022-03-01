import { Error } from '../interfaces/ErrorsInterface';
import { Order, OrderWithId } from '../interfaces/OrderInterface';
import OrderModel from '../models/orderModel';

const validateOrder = (order: Order): Error | false => {
  if (!order.products) {
    return { code: 400, error: 'Products is required' };
  }
  if (!Array.isArray(order.products)) {
    return { code: 422, error: 'Products must be an array of numbers' };
  }
  if (order.products.length < 1) {
    return { code: 422, error: 'Products can\'t be empty' };
  }
  return false;
};

const getById = async (id: string): Promise<OrderWithId> => {
  const result = await OrderModel.getById(id);
  return result;
};

export default {
  validateOrder,
  getById,
};