import { DocumentDefinition } from 'mongoose';
import { User } from '../models/users/user.model';
import jwt from 'jsonwebtoken';

export const generateTokenReponse = (user: DocumentDefinition<User>) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      isAdmin: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: '2d',
    },
  );
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    password: user.password,
    role: user.role,
    address: user.address,
  };
};