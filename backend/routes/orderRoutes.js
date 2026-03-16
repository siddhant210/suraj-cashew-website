import express from "express"
import Order from "../models/Order.js"

const router = express.Router()

// SAVE ORDER
router.post("/", async (req,res)=>{

  try{

    const order = new Order(req.body)

    await order.save()

    res.json({message:"Order saved successfully"})

  }catch(error){

    res.status(500).json({message:"Error saving order"})

  }

})


// GET ALL ORDERS (FOR ADMIN DASHBOARD)
router.get("/", async (req,res)=>{

  try{

    const orders = await Order.find().sort({createdAt:-1})

    res.json(orders)

  }catch(error){

    res.status(500).json({message:"Error fetching orders"})

  }

})

export default router