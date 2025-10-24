import express from "express";
import {getUsers, getUserId, createUser, updateUser, userDeleted} from "../controller/userController.mjs";
// import auth from "../middleware/authMiddleware.mjs";
import { validateUser } from "../middleware/validationMiddleware.mjs";
const router = express.Router();

// router.post("/", validateUser)
router.post("/",validateUser, createUser)


router.get("/", getUsers)
router.get("/:id", getUserId)
// router.post("/")
router.put("/:id", updateUser)
router.delete("/:id", userDeleted)


export default router


