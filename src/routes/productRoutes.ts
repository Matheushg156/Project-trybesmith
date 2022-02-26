import express from 'express';

import validateToken from '../helpers/validateToken';
import ProductController from '../controllers/productController';

const productRouter = express.Router();

productRouter.post(
  '/',
  validateToken,
  ProductController.validateName,
  ProductController.validateAmount,
  ProductController.create,
);

export default productRouter;