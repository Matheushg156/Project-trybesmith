import { Error } from '../interfaces/ErrorsInterface';

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

export default {
  validateUserName,
};