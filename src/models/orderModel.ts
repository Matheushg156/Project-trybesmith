import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Order, OrderWithId, OrderById } from '../interfaces/OrderInterface';

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

const getById = async (id: string): Promise<OrderById> => {
  const query = `
    SELECT Or.id, Or.userId, Pr.id AS orders
    FROM Trybesmith.Orders AS Or 
    INNER JOIN Trybesmith.Products AS Pr
    ON Or.id = Pr.orderId
    WHERE Or.id = ?
  `;
  const [data] = await connection.execute(query, [id]);
  const [result] = data as OrderById[];
  return result;
};

export default {
  create,
  getById,
};