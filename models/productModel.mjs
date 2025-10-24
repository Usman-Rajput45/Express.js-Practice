import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String, 
    price: Number,
    description: String
})

console.log("Product Model")

export default mongoose.model("Product", productSchema)