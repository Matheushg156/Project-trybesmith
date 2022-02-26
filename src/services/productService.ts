import { Error } from '../interfaces/ErrorsInterface';
import { Product } from '../interfaces/ProductInterface';
import ProductModel from '../models/productModel';
import createToken from '../helpers/createToken';

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

const validateAmount = (amount: string): Error | false => {
  if (!amount) {
    return { code: 400, error: 'Amount is required' };
  }
  if (typeof amount !== 'string') {
    return { code: 422, error: 'Amount must be a string' };
  }
  if (amount.length < 3) {
    return { code: 422, error: 'Amount must be longer than 2 characters' };
  }
  return false;
};

const create = async (product: Product): Promise<string | undefined> => {
  const createProduct = await ProductModel.create(product);
  if (createProduct) {
    return createToken({ id: createProduct.id, userName: createProduct.name });
  }
};

export default {
  validateName,
  validateAmount,
  create,
};