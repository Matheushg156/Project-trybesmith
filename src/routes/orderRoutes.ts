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

export default orderRouter;