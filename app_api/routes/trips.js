const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

router.get('/', tripsController.tripsList);
router.get('/:tripCode', tripsController.tripsFindByCode);
router.post('/', tripsController.tripsAddTrip);
router.put('/:tripCode', tripsController.tripsUpdateTrip);
router.delete('/:tripCode', tripsController.tripsDeleteTrip);

module.exports = router;