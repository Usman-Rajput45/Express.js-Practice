import express from "express";
import {getProducts, getProductId, createProduct, updateProduct, ProductDeleted} from "../controller/productController.mjs";
// import auth from "../middleware/authMiddleware.mjs"
// import { validateUser } from "../middleware/validationMiddleware.mjs";
const router = express.Router();


// router.post("/",  validateUser)
router.post("/",  createProduct)



router.get("/", getProducts)
router.get("/:id", getProductId)
// router.post("/")
router.put("/:id", updateProduct)
router.delete("/:id", ProductDeleted)


export default router