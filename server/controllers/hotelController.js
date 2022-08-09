import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// POST - Create hotel Controller
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

// PUT - Update hotel Controller
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

// DELETE - Delete hotel controller
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    next(error);
  }
};

// GET - Get ONE hotel
export const getOneHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

// GET - Get ALL hotels
export const getAllHotels = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      others,
      cheapestPrice: { $gt: min || 1, $lt: max || 99999999 },
    }).limit(4);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
// GET - Count by city
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    // Promise.all > iterable array of promises .map is an array of promises from .countDocuments
    const list = await Promise.all(
      cities.map((city) => {
        const count = Hotel.countDocuments({ city: city });
        return count;
      })
    );

    const citiesCount = cities.map((city, index) => {
      return { city: city, count: list[index] };
    });

    res.status(200).json(citiesCount);
  } catch (error) {
    next(error);
  }
};

// GET - Count by type
export const countByType = async (req, res, next) => {
  try {
    const propArr = [];
    const propertyTypes = await Hotel.distinct("type");
    for (const property of propertyTypes) {
      const count = await Hotel.countDocuments({ type: `${property}` });
      propArr.push({
        type: property,
        count: count,
      });
    }
    res.status(200).json(propArr);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.hotelid);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
