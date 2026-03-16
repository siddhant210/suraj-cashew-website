import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async(req,res)=>{

try{

const contact = new Contact(req.body);
await contact.save();

res.json({message:"Contact saved successfully"});

}catch(error){

res.status(500).json(error);

}

});

export default router;