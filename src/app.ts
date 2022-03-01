import express from 'express';

import userRouter from './routes/userRoutes';
import loginRouter from './routes/loginRoutes';
import productRouter from './routes/productRoutes';
import orderRouter from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

export default app;
