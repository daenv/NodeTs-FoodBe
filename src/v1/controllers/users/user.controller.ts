import { Request, Response } from "express";
import {
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
  HTTP_SUCCESS,
  HTTP_INTERNAL_SERVER_ERROR,
} from "../../constants/http_status";
import { getErrorMessage } from "../../utils/errorMessage";
import * as userService from "../../services/users/user.service";
import { generateTokenReponse } from '../../utils/token';

export const register = async (req: Request, res: Response) => {
  try {
    //import information of the user service
    const user = await userService.register(req.body);
    res.status(HTTP_SUCCESS).json({ message: "User register successfully", user });
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: getErrorMessage(error) });
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    // Get data from request and assigned to foundUser (username and password)
    const foundUser = await userService.login(req.body);
    if (!foundUser) {
      res.status(HTTP_BAD_REQUEST).json({ message: "Invalid username or password" }).send(generateTokenReponse(foundUser));
    }
    res.status(HTTP_SUCCESS).json({ message: "Login successful" });
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: getErrorMessage(error) });
  }
};
