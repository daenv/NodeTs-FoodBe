import { OrderStatus } from "../../constants/order_status";
import mongoose from "mongoose";
import { Product, productSchema } from "../products/product.model";

//interface delivery address
export interface LatLng {
  lat: string;
  lng: string;
}
// schema delivery address
export const LatLngSchema: mongoose.Schema<LatLng> = new mongoose.Schema({
  lat: { type: "string", required: true },
  lng: { type: "string", required: true },
});
// interface Order Item
export interface OrderItem {
  product: Product;
  quantity: number;
  price: number;
}

// schema Order Item
export const OrderItemSchema: mongoose.Schema<OrderItem> = new mongoose.Schema({
  product: { type: productSchema, required: true },
  quantity: { type: "number", required: true },
  price: { type: "number", required: true },
});

//interface Order
export interface Order {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  name: string;
  address: string;
  addressLatLng: LatLng;
  paymentId: string;
  status: OrderStatus;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updateAt: Date;
}
export const orderSchema: mongoose.Schema<Order> = new mongoose.Schema(
  {
    id: { type: "string", required: true },
    items: { type: [OrderItemSchema], required: true },
    totalPrice: { type: "number", required: true },
    name: { type: "string", required: true },
    address: { type: "string", required: true },
    addressLatLng: { type: LatLngSchema, required: true },
    paymentId: { type: "string", required: true },
    status: { type: "string", required: true, default: OrderStatus.NEW },
    user: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    collection: "Orders",
  }
);

export const OrderModel = mongoose.model<Order>("Order", orderSchema);
