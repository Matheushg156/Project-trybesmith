import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, UserWithId } from '../interfaces/UsersInterface';

const create = async (user: User): Promise<UserWithId> => {
  const { username, classe, level, password } = user;
  const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await connection.execute<ResultSetHeader>(
    query, 
    [username, classe, level, password],
  );

  return {
    id: result.insertId,
    ...user,
  };
};

export default {
  create,
};