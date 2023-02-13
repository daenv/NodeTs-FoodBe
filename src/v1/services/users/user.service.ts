import { DocumentDefinition } from 'mongoose';
import { Request, Response } from 'express';
import { User, UserModel } from '../../models/users/user.model';
import { HTTP_BAD_REQUEST } from '../../constants/http_status';
import bcrypt from 'bcrypt';
import { generateTokenReponse } from '../../utils/token';

export const register = async (user: DocumentDefinition<User>): Promise<void> => {
  try {
    const userFound = await UserModel.findOne({ username: user.username });
    if (userFound) {
      throw new Error('usename or email already exists');
    }
    // hashing passwords
    const hashedPassword = await bcrypt.hash(user.password, 8);
    const newUser = {
      id: user.id,
      username: user.username,
      email: user.email.toLowerCase(),
      password: hashedPassword,
      role: user.role,
      address: user.address,
    };
    //create a new user object
    const dbUser = await UserModel.create(newUser);

    //send token requeste
    generateTokenReponse(dbUser);
  } catch (error) {
    throw error;
  }
};
export const login = async (user: DocumentDefinition<User>): Promise<void> => {
  try {
    const foundUser = UserModel.findOne({ username: user.username });
    if (!foundUser) {
      throw new Error(`Not found ${user.username}`);
    }
    
  } catch (error) {
    throw error;
  }
};
