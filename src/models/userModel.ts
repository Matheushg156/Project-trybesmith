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

const getUser = async (username: string, password: string): Promise<UserWithId | undefined> => {
  const query = `
    SELECT * FROM Trybesmith.Users
    WHERE username = ?
    AND password = ?
  `;
  const [data] = await connection.execute(
    query,
    [username, password],
  );
  const [user] = data as UserWithId[];
  return user;
};

export default {
  create,
  getUser,
};