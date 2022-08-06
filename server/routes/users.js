import express from "express";
import {
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Authentication Test
// // GET - check auth
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in.");
// });

// // GET - check user is user and authenticated
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account");
// });

// // GET - check is Admin
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send(
//     "Hello admin:user, you are logged in and you can delete all accounts"
//   );
// });

// UPDATE verifyUser = if cookie is user or admin
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getOneUser);

// GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;
