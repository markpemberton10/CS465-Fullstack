const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsFindCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true }
    ).exec();

    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json(err);
  }
};

const tripsDeleteTrip = async (req, res) => {
  try {
    await Trip.deleteOne({ code: req.params.tripCode }).exec();
    res.status(204).send();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  tripList,
  tripsFindCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};