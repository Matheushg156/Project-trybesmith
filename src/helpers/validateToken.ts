import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { verify, JwtPayload } from 'jsonwebtoken';
import UserModel from '../models/userModel';

dotenv.config();

const mySecret = process.env.JWT_SECRET || 'mySecret';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'Token not found' });

  try {
    const jwtPayload: JwtPayload = verify(token, mySecret) as JwtPayload;
    const user = await UserModel.getUserById(jwtPayload.id);
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

export default validateToken;