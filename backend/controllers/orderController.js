import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order using cod
const placeOrder = async(req,res)=>{
    try {
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:'Order Placed'})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})   
    }
} 
//placing order using stripe
const placeOrderStripe = async(req,res)=>{
    
} 
//placing order using razorpay
const placeOrderRazorpay = async(req,res)=>{
    
}

//all orders for admin panel
const allOrders = async(req,res)=>{
    
}
//user orders for frontend
const userOrders = async(req,res)=>{
    
}
//update order status from admin panel
const updateStatus = async(req,res)=>{
    
}
export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus}