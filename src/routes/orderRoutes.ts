import express from 'express';

import OrderController from '../controllers/orderController';
import validateToken from '../helpers/validateToken';

const orderRouter = express.Router();

orderRouter.post(
  '/',
  validateToken,
  OrderController.validateOrder,
  OrderController.create,
);

orderRouter.get(
  '/:id',
  validateToken,
  OrderController.getById,
);

orderRouter.get(
  '/',
  validateToken,
  OrderController.getAll,
);

export default orderRouter;