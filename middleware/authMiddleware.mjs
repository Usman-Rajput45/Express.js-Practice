// import jwt from "jsonwebtoken";

// const auth = async (req, res, next) => {
//     const token = req.header("Authorization").split(" ")[1]
//     if(!token) return res.status(401).json({message: "Access Denied"})
//         try{ 
//        const verified = jwt.verify(token, process.env.MY_SECRET_KEY)
//        req.user = verified 
//        next()
//     }
//     catch(err) {
//     res.status(500).json({message: "Internal Server Error", err})
//     }
// }

// export default auth;