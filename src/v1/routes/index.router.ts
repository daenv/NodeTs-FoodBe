import { Router } from 'express';
const userRouter = require('./users/user.router')
const orderRouter = require('./orders/order.router');
const foodRouter = require('./foods/food.router');
const routes = Router();

routes.use('/api/v1/users', userRouter);
routes.use('/api/v1/foods', foodRouter);
routes.use('/api/v1/orders', orderRouter);
module.exports = routes;
