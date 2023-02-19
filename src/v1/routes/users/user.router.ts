import { Router } from "express";
import * as userControllers from "../../controllers/users/user.controller";
import { Auth } from "../../middlewares/auth/authentication";
const router = Router();

router.post("/register", Auth, userControllers.register);
router.get("/login", Auth, userControllers.login);
/* router.get("/send",  userControllers.send); */
module.exports = router;
