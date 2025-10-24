import express from 'express' 
import  userRoutes from './routes/userRoutes.mjs'
import productRoutes from './routes/productRoutes.mjs'
import connectDB from './config/dbConfing.mjs'
import { AppError } from './utilities/errorHandling.mjs'
import { errorHandler } from "./middleware/errorMiddleware.mjs";
import './middleware/authMiddleware.mjs'
import authRoutes from './routes/authRoutes.mjs';

import bodyParser from "body-parser";
const app = express() 
const port = 8000

import dotenv from 'dotenv'
dotenv.config()

connectDB()

app.use(express.json())
app.use(bodyParser.json());

app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use(errorHandler)


// if(process.env.NODE_ENV === "production") {
    app.listen(port, ()  => {
    console.log(`Server is listening on the port of http://localhost:${port}`)
})
//



export default app;