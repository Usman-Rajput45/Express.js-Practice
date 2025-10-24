// import { Router } from "express";
// import User from "../models/userModel.mjs";




// export const getUsers = async (req, res) => {
//     try{
//    const user = await User.find()
//    res.status(200).json({message: "User got successfully", user})
//    console.log(req.body)
//     }
//     catch(err) {
//      res.status(500).json({message: "Internal Server Error", err})
//     }
// }

// export const getUserId = async (req, res) => {
//     try{
        
//    const user = await User.findById(req.params.id)
//    if(!user)
//     return res.status(404).json({message: "User not found"})
//    res.status(200).json({message: "User got successfully",user})
//     }
//     catch(err) {
//    res.status(500).json({message: "Internal Server Error", err})
//     }
//     console.log(req.body)
// }

// export const createUser = async (req, res) => {
//     try{
//   const user = await User.create(req.body) 
//     res.status(201).json({message: "User created successfully", user})
//     console.log(req.body)
//     }
//     catch(err) {
//     res.status(500).json({message: "Internal Server Error", err})
//     }
//     console.log(req.body)
// }

// export const updateUser = async (req, res) => {
//   try{
//       const user = await User.findByIdAndUpdate(req.params.id, req.body,  { new: true, runValidators: true })
//     if(!user) {
//         return res.status(404).json({message: "User not found"})
//     }
//     res.status(200).json({message: "User updated successfully", user})
//   }
//   catch(err) {
//     res.status(500).json({message: "Internal Server Error", err})
//   }
//   console.log(req.body)
// }


// export const userDeleted = async (req, res) => {
// try{
//         const user = await User.findByIdAndDelete(req.params.id)
//     if(!user) {
//         return res.status(404).json({message: "User not Found", user})
//     }
//     res.status(200).json({message: "User deleted successfully", user})
// }
// catch(err) {
//     res.status(500).json({message: "Internal Server Error", err})   
// }
// console.log(req.body)
// }




import User from "../models/userModel.mjs";

// Get all users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: "User got successfully", users }); // <-- changed to users
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// Get user by ID
export const getUserId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User got successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// Create user
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: "User created successfully", user });
    } catch (err) {
        res.status(400).json({ message: "Bad Request", error: err.message });
    }
};

// Update user
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

// Delete user
export const userDeleted = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not Found" });
        }
        res.status(200).json({ message: "User deleted successfully", user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};