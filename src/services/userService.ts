import { Error } from '../interfaces/ErrorsInterface';
import { User } from '../interfaces/UsersInterface';
import UserModel from '../models/userModel';
import createToken from '../helpers/createToken';

const validateUserName = (userName: string): Error | false => {
  if (!userName) {
    return { code: 400, error: 'Username is required' };
  }
  if (typeof userName !== 'string') {
    return { code: 422, error: 'Username must be a string' };
  }
  if (userName.length < 3) {
    return { code: 422, error: 'Username must be longer than 2 characters' };
  }
  return false;
};

const validateClasse = (classe: string): Error | false => {
  if (!classe) {
    return { code: 400, error: 'Classe is required' };
  }
  if (typeof classe !== 'string') {
    return { code: 422, error: 'Classe must be a string' };
  }
  if (classe.length < 3) {
    return { code: 422, error: 'Classe must be longer than 2 characters' };
  }
  return false;
};

const validateLevel = (level: number): Error | false => {
  if (!level && level !== 0) {
    return { code: 400, error: 'Level is required' };
  }
  if (typeof level !== 'number') {
    return { code: 422, error: 'Level must be a number' };
  }
  if (level < 1) {
    return { code: 422, error: 'Level must be greater than 0' };
  }
  return false;
};

const validatePassword = (password: string): Error | false => {
  if (!password) {
    return { code: 400, error: 'Password is required' };
  }
  if (typeof password !== 'string') {
    return { code: 422, error: 'Password must be a string' };
  }
  if (password.length < 8) {
    return { code: 422, error: 'Password must be longer than 7 characters' };
  }
  return false;
};

const create = async (user: User): Promise<string | undefined> => {
  const createUser = await UserModel.create(user);
  if (createUser) {
    return createToken({ id: createUser.id, userName: createUser.username });
  }
};

export default {
  validateUserName,
  validateClasse,
  validateLevel,
  validatePassword,
  create,
};