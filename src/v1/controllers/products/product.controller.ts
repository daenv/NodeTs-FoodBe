import slugify from "slugify";
import { Request, Response } from "express";
import {
  HTTP_BAD_REQUEST,
  HTTP_SUCCESS,
  HTTP_INTERNAL_SERVER_ERROR,
} from "../../constants/http_status";
import { getErrorMessage } from "../../utils/errorMessage";
import * as productService from "../../services/products/product.service";
import { generateTokenReponse } from "../../utils/token";
import { validateMongoId } from "../../utils/validateMongoDbId";
import { ProductModel } from "../../models/products/product.model";

export const createProduct = async (req: Request, res: Response): Promise<any> => {
  try {
    const createdProduct = await productService.createProduct(req.body);
    if (!createdProduct) {
      res.status(HTTP_BAD_REQUEST).json({ message: "Product not created" });
    }
    res.status(HTTP_SUCCESS).json({ message: "Product created", product: createdProduct });
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: getErrorMessage(error) });
  }
};
export const updateProduct = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  validateMongoId(id);
  console.log(typeof id);
  try {
    const product = await productService.updateProduct(req.body, id);
    if (!product) {
      res.status(HTTP_BAD_REQUEST).json({ message: "Product not updated" });
    }
    res.status(HTTP_SUCCESS).json({ message: "Product updated", product: product });
  } catch (error) {
    res.status(HTTP_INTERNAL_SERVER_ERROR).json({ message: getErrorMessage(error) });
  }
};

/* export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProduct(req.body);
        if (products) {
            res.status(HTTP_BAD_REQUEST).json({ message: "No products found" });
        }
        res.status(HTTP_SUCCESS).json({ message: "Products found", products });
  } catch (error) {
    res.status(HTTP_BAD_REQUEST).json({ message: getErrorMessage(error) });
  }
};
 */
