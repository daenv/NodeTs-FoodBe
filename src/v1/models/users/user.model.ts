import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
export interface User extends mongoose.Document {
  id: string;
  username: string;
  email: string;
  password: string;
  role: boolean;
  address: string;
}

export const userSchema: mongoose.Schema<User> = new mongoose.Schema(
  {
    id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, minlength: [8, 'Minimum password lenght is 8 characters '] },
    role: { type: Boolean, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    collection: 'users',
  },
);

export const UserModel = mongoose.model<User>('user', userSchema);
