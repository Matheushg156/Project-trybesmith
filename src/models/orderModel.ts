import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, OrderWithId } from '../interfaces/OrderInterface';

const create = async (order: Order, UserId: number): Promise<OrderWithId> => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  const [result] = await connection.execute<ResultSetHeader>(query, [UserId]);
  const { insertId } = result;
  const query2 = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id IN ?';
  await connection.query(query2, [insertId, order.product]);
  return {
    userId: insertId,
    ...order,
  };
};

export default {
  create,
};