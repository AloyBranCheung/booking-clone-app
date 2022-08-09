import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getOneHotel,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms,
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

// route to get number of rooms
router.get("/room/:hotelid", getHotelRooms);

export default router;
