import { Request, Response } from "express";
import { HTTP_BAD_REQUEST, HTTP_SUCCESS } from '../../constants/http_status';
import { getErrorMessage } from "../../utils/errorMessage";
import * as productService from "../../services/products/product.service";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProduct();
        /* if (products) {
            res.status(HTTP_BAD_REQUEST).json({ message: "No products found" });
        } */
        res.status(HTTP_SUCCESS).json({ message: "Products found", products });
  } catch (error) {
    res.status(HTTP_BAD_REQUEST).json({ message: getErrorMessage(error) });
  }
};
