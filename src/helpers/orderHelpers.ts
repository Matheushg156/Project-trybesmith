import { OrderById, ProductOrder } from '../interfaces/OrderInterface';

const ordersReturn = (arr: ProductOrder[], id: number) => {
  const result = arr.reduce((acc: OrderById, { products }) => {
    acc.products.push(products);
    return acc;
  }, { id, userId: arr[0].userId, products: [] });
  return result;
};

const allOrdersReturn = (arr: ProductOrder[]) => {
  const result = arr.reduce((acc, { id }) => {
    if (!acc.some((item) => item.id === id)) {
      const order = ordersReturn(arr.filter((item) => item.id === id), id);
      acc.push(order);
    }
    return acc;
  }, [] as OrderById[]);
  return result;
};

export default {
  ordersReturn,
  allOrdersReturn,
};