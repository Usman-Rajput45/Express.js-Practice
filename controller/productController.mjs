import { Router } from "express";
import Product from "../models/productModel.mjs";
// import * as All from "../models/productModel.mjs";
// console.log(All);




export const getProducts = async (req, res) => {
    try{
   const product = await Product.find()
   res.status(200).json({message: "Product got successfully", product})
   console.log(req.body)
    }
    catch(err) {
     res.status(500).json({message: "Internal Server Error", err})
    }
}

export const getProductId = async (req, res) => {
    try{
        
   const product = await Product.findById(req.params.id)
   if(!product)
    return res.status(404).json({message: "Product not found"})
   res.status(200).json({message: "Product got successfully",product})
    }
    catch(err) {
   res.status(500).json({message: "Internal Server Error", err})
    }
    console.log(req.body)
}

export const createProduct = async (req, res) => {
    try{
  const product = await Product.create(req.body) 
    res.status(201).json({message: "Product created successfully", product})
    console.log(req.body)
    }
    catch(err) {
    res.status(500).json({message: "Internal Server Error", err})
    }
    console.log(req.body)
}

export const updateProduct = async (req, res) => {
  try{
      const product = await Product.findByIdAndUpdate(req.params.id, req.body,  { new: true, runValidators: true })
    if(!product) {
        return res.status(404).json({message: "Product not found"})
    }
    res.status(200).json({message: "Product updated successfully", product})
  }
  catch(err) {
    res.status(500).json({message: "Internal Server Error", err})
  }
  console.log(req.body)
}


export const ProductDeleted = async (req, res) => {
try{
        const product = await Product.findByIdAndDelete(req.params.id)
    if(!product) {
        return res.status(404).json({message: "Product not Found", product})
    }
    res.status(200).json({message: "Product deleted successfully", product})
}
catch(err) {
    res.status(500).json({message: "Internal Server Error", err})   
}
console.log(req.body)
}

