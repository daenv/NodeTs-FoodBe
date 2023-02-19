import { Router } from "express";
import * as productController from "../../controllers/products/product.controller";
const router = Router();

router.post("/create", productController.createProduct);
//router.get("/:id", getaProduct);
//router.put("/wishlist", authMiddleware, addToWishlist);
//router.put("/rating", authMiddleware, rating);

//router.put("/:id", authMiddleware, isAdmin, updateProduct);
//router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

/* router.get("/", productController.getAllProducts); */

module.exports = router;
