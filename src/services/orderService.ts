import { Error } from '../interfaces/ErrorsInterface';
import { Order } from '../interfaces/OrderInterface';

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

export default {
  validateOrder,
};