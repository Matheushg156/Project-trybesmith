import { Error } from '../interfaces/ErrorsInterface';
import { Product, ProductWithId } from '../interfaces/ProductInterface';
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

const create = async (product: Product): Promise<ProductWithId | undefined> => {
  const createProduct = await ProductModel.create(product);
  if (createProduct) {
    return createProduct;
  }
};

export default {
  validateName,
  validateAmount,
  create,
};