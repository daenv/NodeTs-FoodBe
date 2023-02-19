import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Secret } from "jsonwebtoken";
import { HTTP_BAD_REQUEST } from "../../constants/http_status";
import { User, UserModel } from "../../models/users/user.model";

export const SECRET_KEY: Secret = process.env.SECRET_KEY || "secret-key";
export interface CustomRequest extends Request {
  token: string | JwtPayload;
}
export const Auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error();
    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;
    next();
  } catch (error) {
    res.status(HTTP_BAD_REQUEST).json({ message: "'Please authenticate" });
  }
};
export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const adminUser = await UserModel.findOne({ email });
  if (adminUser.role !== true) {
    throw new Error("You are not an admin");
  } else {
    next();
  }
};
