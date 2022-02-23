import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product, ProductWithId } from '../interfaces/ProductInterface';

const create = async (product: Product): Promise<ProductWithId> => {
  const { name, amount } = product;
  const query = `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)
  `;
  const [result] = await connection.execute<ResultSetHeader>(
    query, 
    [name, amount],
  );

  return {
    id: result.insertId,
    ...product,
  };
};

export default {
  create,
};