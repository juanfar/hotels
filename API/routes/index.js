'use strict'

const express = require('express');
const api = express.Router();
const hotelCtrl = require('../controllers/hotel');


api.get('/hotel', hotelCtrl.getHotels);
api.get('/hotel/:hotelId', hotelCtrl.getHotel);
api.post('/hotel', hotelCtrl.saveHotel);
api.put('/hotel/:hotelId', hotelCtrl.updateHotel);
api.delete('/hotel/:hotelId', hotelCtrl.deleteHotel);

module.exports = api;