import express from 'express';

import ProductController from '../controllers/productController';
import validateToken from '../helpers/validateToken';

const productRouter = express.Router();

productRouter.post(
  '/',
  validateToken,
  ProductController.validateName,
  ProductController.validateAmount,
  ProductController.create,
);

export default productRouter;