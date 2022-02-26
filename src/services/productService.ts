import { Error } from '../interfaces/ErrorsInterface';
import ProductModel from '../models/productModel';

const validateName = (name: string): Error | false => {
  if (!name) {
    return { code: 400, error: 'Name is required' };
  }
  if (typeof name !== 'string') {
    return { code: 422, error: 'Name must be a string' };
  }
  if (name.length < 3) {
    return { code: 422, error: 'Name must be longer than 2 characters' };
  }
  return false;
};

export default {
  validateName,
};