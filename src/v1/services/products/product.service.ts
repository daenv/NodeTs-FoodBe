import { DocumentDefinition } from "mongoose";
import { Product, ProductModel } from "../../models/products/product.model";
import { generateTokenReponse } from "../../utils/token";

export const createProduct = async (product: DocumentDefinition<Product>): Promise<any> => {
  try {
    //check id product
    const productExists = await ProductModel.findOne({ slug: product?.slug });
    if (productExists) {
      throw new Error("Product already exists");
    }
    // create product
    const newProduct = productExists ? undefined : await ProductModel.create(product);
    return newProduct;
  } catch (error) {
    throw error;
  }
};
export const updateProduct = async (product: DocumentDefinition<Product>, id : Object): Promise<any> => {
  try {
    // find and update product
    const productUpdate = await ProductModel.findOneAndUpdate({id: product.id}, product, {
      new: true,
    });
    if (!productUpdate) {
      throw new Error("Product does not found");
    }
    return productUpdate;
  } catch (error) {
    throw error;
  }
};

/* export const checkId = async (id: any, product: DocumentDefinition<Product>): Promise<any> => {
  try {
    if (!id || !product.id) {
      throw new Error("Product id is required");
      return;
    }
    if (id !== product.id) {
      throw new Error("Product id is not match");
      return;
    }
    return product;
  } catch (error) {}
}; */

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
