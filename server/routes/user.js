import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user_controllers.js";

/**
 * get :200
 * post:201
 * error:404
 *
 */
/** Always use proper status code  */

const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
