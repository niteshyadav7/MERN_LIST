import express from "express";
import User from "../models/userSchema.js";

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        user,
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: "success",
      results: user.length,
      data: {
        user,
      },
    });
  } catch (err) {
    res.json({
      status: "fail",
      message: err,
    });
  }
};

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);

export default router;
