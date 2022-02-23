import { Request, Response } from 'express';
import LoginService from '../services/loginService';

const loginUser = async (req: Request, res: Response) => {
  const token = await LoginService.loginUser(req.body);
  if (typeof token === 'string') {
    return res.status(200).json({ token });
  }
  return res.status(token.code).json({ error: token.error });
};

export default {
  loginUser,
};