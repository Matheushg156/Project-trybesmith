import { Login } from '../interfaces/LoginInterface';
import UserModel from '../models/userModel';
import createToken from '../helpers/createToken';
import { Error } from '../interfaces/ErrorsInterface';

const loginUser = async (login: Login): Promise<string | Error> => {
  const user = await UserModel.getUser(login.username, login.password);
  if (user) {
    return createToken({ id: user.id, userName: user.username });
  }
  return { code: 401, error: 'Invalid username or password' };
};

export default {
  loginUser,
};