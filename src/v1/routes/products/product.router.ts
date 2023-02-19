import { Router } from "express";
import * as productController from "../../controllers/products/product.controller";
const router = Router();

router.post("/create", productController.createProduct);
router.put("/update/:id", productController.updateProduct);
//router.get("/:id", getaProduct);
//router.put("/wishlist", authMiddleware, addToWishlist);
//router.put("/rating", authMiddleware, rating);

//router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

/* router.get("/", productController.getAllProducts); */

module.exports = router;
