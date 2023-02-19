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
    else {
      const newProduct = new ProductModel(product);
      await newProduct.save();
      return newProduct;
    }
  } catch (error) {
    throw error;
  }
};
export const updateProduct = async (product: DocumentDefinition<Product> ): Promise<any> => {
    
    try {
        const productFound = await ProductModel.findOne({ id: product.id });
        if (!productFound) {
            throw new Error("Product does not found");
        }
  } catch (error) {}
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
