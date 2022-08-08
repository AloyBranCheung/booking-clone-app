import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getOneHotel,
  updateHotel,
  countByCity,
  countByType,
} from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getOneHotel);

// GET ALL
router.get("/", getAllHotels);

// route to get number of properties by city
router.get("/countByCity", countByCity);

// route to get number of property types
router.get("/countByType", countByType);

export default router;
