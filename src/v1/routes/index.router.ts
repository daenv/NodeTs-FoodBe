import { Router } from 'express';
const userRouter = require('./users/user.router')
const orderRouter = require('./orders/order.router');
const productRouter = require('./products/product.router');
const routes = Router();

routes.use('/api/v1/users', userRouter);
routes.use('/api/v1/foods', productRouter);
routes.use('/api/v1/orders', orderRouter);
module.exports = routes;
