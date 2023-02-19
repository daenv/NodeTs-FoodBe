import mongoose from "mongoose";

export interface image {
  url: string;
  publicId: string;
  width: number;
  height: number;
}
export const imageSchema: mongoose.Schema<image> = new mongoose.Schema({
  url: { type: "string", required: true },
  publicId: { type: "string", required: true },
  width: { type: "number", required: true },
  height: { type: "number", required: true },
});
export interface Product extends mongoose.Document {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  sold: string;
  image: string;
  ratings: number;
  totalRating: string;
}
export const productSchema: mongoose.Schema<Product> = new mongoose.Schema(
  {
    id: { type: "string", required: true },
    title: { type: "string", required: true },
    slug: { type: "string", required: true },
    description: { type: "string", required: true },
    price: { type: "number", required: true },
    category: { type: "string", required: true },
    brand: { type: "string", required: true },
    sold: { type: "string", required: true },
    image: { type: "string", required: true },
    ratings: { type: "number", required: true },
    totalRating: { type: "string", required: true, default: "0" },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: "products",
  }
);
export const ProductModel = mongoose.model<Product>("Product", productSchema);
