import mongoose from "mongoose";
export const validateMongoId = (id: any) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    throw new Error(`Invalid Mongo ID: ${id}`);
  }
};

