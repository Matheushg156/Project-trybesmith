import { Error } from '../interfaces/ErrorsInterface';
import { Order, ProductOrder, OrderWithId } from '../interfaces/OrderInterface';
import OrderModel from '../models/orderModel';
import OrderHelpers from '../helpers/orderHelpers';

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

const getById = async (id: number): Promise<OrderWithId | false> => {
  const result = await OrderModel.getById(id) as ProductOrder[];
  if (!result.length) {
    return false;
  }
  const order = OrderHelpers.ordersReturn(result, id);
  return order;
};

const getAll = async () => {
  const result = await OrderModel.getAll();
  return result;
};

export default {
  validateOrder,
  getById,
  getAll,
};