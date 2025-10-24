import exrpess from "express";
import joi from "joi";
const app = exrpess()

app.use(exrpess.json())

const userSchema = joi.object({
    name:joi.string().min(3).max(30).required(),
    email:joi.string().required(),
    age: joi.string().min(18).max(120).required()
})


export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Validation Error", error: error.details[0].message });
  }
  next();
};