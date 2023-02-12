import { Router } from 'express';
import * as userControllers from '../../controllers/users/user.controller';
import { UserModel } from '../../models/users/user.model';
const router = Router();

router.post('/register', userControllers.register);
router.get('/login', userControllers.login);
module.exports = router;
