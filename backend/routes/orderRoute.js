import express from 'express'
import { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';


const orderRouter = express.Router()

//admin fetures
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.put('/status', adminAuth, updateStatus);

//paymet features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/stripe', authUser, placeOrderStripe);

//user feature
orderRouter.get('/userorders', authUser, userOrders);

export default orderRouter;
