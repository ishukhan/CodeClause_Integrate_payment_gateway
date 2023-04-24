
import { log } from "console";
import { instance } from "../server.js"
import crypto from "crypto"
import {payment} from "../models/PaymentModel.js"

export const checkout = async (req, res) => {

  const options = {
    amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
    currency: "INR"
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: "true",
    order
  })
};


export const paymentverification = async (req, res) => {
  const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id

 const generateSignature = crypto
  .createHmac("sha256",process.env.RAZORPAY_API_SECRET)
  .update(body.toString())
  .digest("hex")

  const isAuthenticate = generateSignature=== razorpay_signature;

  if(isAuthenticate){

    // Save in DataBase
    await payment.create({
      razorpay_payment_id, 
      razorpay_order_id, 
      razorpay_signature
    })

    // and then redirect page on
    res.redirect(
      `http://localhost:3000/paymentSuccess?reference=${razorpay_order_id}`
      );

  }else{
    res.status(400).json({
      success: "false",
    })
  }

}