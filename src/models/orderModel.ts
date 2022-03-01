import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, OrderWithId } from '../interfaces/OrderInterface';

const create = async (order: Order, userId: number): Promise<OrderWithId> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [userId]);
  const { insertId } = result;
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id IN ?';
  await connection.query(query2, [insertId, [order.products]]);
  return {
    userId: insertId,
    products: order.products,
  };
};

export default {
  create,
};