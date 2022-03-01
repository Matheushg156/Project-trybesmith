import { OrderById, ProductOrder } from '../interfaces/OrderInterface';

const ordersReturn = (arr: ProductOrder[], id: number) => {
  const result = arr.reduce((acc: OrderById, { products }) => {
    acc.products.push(products);
    return acc;
  }, { id, userId: arr[0].userId, products: [] });
  return result;
};

export default {
  ordersReturn,
};