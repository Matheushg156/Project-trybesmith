import express from 'express';

import userRouter from './routes/userRoutes';
import loginRouter from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
