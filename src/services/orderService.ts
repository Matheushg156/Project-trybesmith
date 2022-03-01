import { Error } from '../interfaces/ErrorsInterface';
import { Order, OrderWithId } from '../interfaces/OrderInterface';
import OrderModel from '../models/orderModel';

const validateOrder = (order: Order): Error | false => {
  if (!order) {
    return { code: 400, error: 'Products is required' };
  }
  if (!Array.isArray(order.product)) {
    return { code: 422, error: 'Products must be an array of numbers' };
  }
  if (order.product.length < 1) {
    return { code: 422, error: 'Products can\'t be empty' };
  }
  return false;
};

export default {
  validateOrder,
};