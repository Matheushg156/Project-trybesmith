import dotenv from 'dotenv';
import { sign, SignOptions } from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/TokenInterface';

dotenv.config();

const mySecret = process.env.JWT_SECRET || 'mySecret';
const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user: TokenPayload) => {
  const token = sign(user, mySecret, jwtConfig);
  return token;
};

export default createToken;