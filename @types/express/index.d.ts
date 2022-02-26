import { UserModel } from '../../src/models/userModel';

declare global{
  namespace Express {
    interface Request {
      user: UserModel
    }
  }
}