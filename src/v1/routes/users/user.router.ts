import { Router } from "express";
import * as userControllers from "../../controllers/users/user.controller";
import { Auth } from "../../middlewares/auth/authentication";
const router = Router();

router.post("/register", Auth, userControllers.register);
router.get("/login", Auth, userControllers.login);
module.exports = router;
