import { Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { ReqUser } from '../interfaces/reqUserInterface';
import UserModel from '../models/userModel';

const mySecret = 'mySecret';

const validateToken = async (req: ReqUser, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }
  try {
    const decoded = verify(token, mySecret);
    const user = await UserModel.getUserById((decoded as JwtPayload).id);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;