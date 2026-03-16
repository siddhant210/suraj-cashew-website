import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

firstName:String,
lastName:String,
email:String,
phone:String,

street:String,
city:String,
state:String,
pincode:String,

product:String,
quantity:Number,
total:Number

},{timestamps:true});

export default mongoose.model("Order",orderSchema);