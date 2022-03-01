import { ResultSetHeader, RowDataPacket } from 'mysql2';
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

const getById = async (id: number) => {
  const query = `
    SELECT o.id, o.userId, p.id AS products
    FROM Trybesmith.Orders AS o 
    INNER JOIN Trybesmith.Products AS p
    ON o.id = p.orderId
    WHERE o.id = ?
  `;
  const [result] = await connection.execute<RowDataPacket[]>(query, [id]);
  return result;
};

export default {
  create,
  getById,
};