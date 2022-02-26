import express from 'express';

import userRouter from './routes/userRoutes';
import loginRouter from './routes/loginRoutes';
import productRouter from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);

export default app;
