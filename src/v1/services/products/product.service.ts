import { DocumentDefinition } from "mongoose";
import { Product, ProductModel } from "../../models/products/product.model";
import { generateTokenReponse } from "../../utils/token";

export const createProduct = async (product: DocumentDefinition<Product>): Promise<any> => {
  try {
    // create product
    await ProductModel.create(product);
    //send token request
      
  } catch (error) {
    throw error;
  }
};

/* export const getAllProduct = async (product: DocumentDefinition<Product>): Promise<any> => { 
    try {
        const result = await ProductModel.find();
        if(result.length > 0){
            return result;
        }
    } catch (error) {
        throw error
    }
} */
