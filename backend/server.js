import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/suraj_cashew")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/contact", contactRoutes);
app.use("/api/order", orderRoutes);

app.listen(5000,()=>{
console.log("Server running on port 5000");
});