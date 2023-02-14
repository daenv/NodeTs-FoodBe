import { DocumentDefinition } from "mongoose";
import { User, UserModel } from "../../models/users/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateTokenReponse } from "../../utils/token";
import { sample_users } from "../../data/data";

export const register = async (user: DocumentDefinition<User>): Promise<void> => {
  try {
    const userFound = await UserModel.findOne({ username: user.username });
    if (userFound) {
      throw new Error("usename or email already exists");
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
export const login = async (user: DocumentDefinition<User>) => {
  try {
    const foundUser = UserModel.findOne({ username: user.username });
    if (!foundUser) {
      throw new Error(`Not found ${user.username}`);
    }
    const isMatch = await bcrypt.compare(user.password, (await foundUser).password);
    // check isMatch
    if (isMatch) {
      const token = jwt.sign(
        { _id: (await foundUser)._id?.toString(), username: (await foundUser).username },
        process.env.ACCESS_TOKEN_PRIVATE_KEY,
        {
          expiresIn: "2 days",
        }
      );
      console.log(token);
    } else {
      throw new Error("Password is not correct");
    }
    return foundUser;
  } catch (error) {
    throw error;
  }
};
export const send = async () => {
  try {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
      throw new Error("User already exists");
    }
    const sendData = await UserModel.create(sample_users);
    console.log(sendData);
    return sendData;
  } catch (error) {
    throw error;
  }
};
