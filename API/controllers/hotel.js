'use strict'

const Hotel = require('../models/hotel');

function getHotel (req, res) {
    let hotelId = req.params.hotelId;

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
        if (!hotel) return res.status(404).send({ message: `El hotel no existe` });

        res.status(200).send({ hotel });
    })
}

function getHotels (req, res) {
    Hotel.find({}, (err, hotels) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
        if (!hotels) return res.status(404).send({ message: `No existen hoteles` });

        res.status(200).send({ hotels });
    })
}

function saveHotel (req, res) {
    console.log('POST /api/hotel');
    console.log(req.body);

    let hotel = new Hotel();
    hotel.name = req.body.name;
    hotel.picture = req.body.picture;
    hotel.price = req.body.price;
    hotel.category = req.body.category;
    hotel.description = req.body.description;

    hotel.save((err, hotelStored) => {
        if (err) res.status(500).send({ message: `Error al salvar en la base de datos: ${err}`});

        res.status(200).send({ hotel: hotelStored});
    })
}

function updateHotel (req, res) {
    let hotelId = req.params.hotelId;
    let update = req.body;

    Hotel.findByIdAndUpdate(hotelId, update, (err, hotelUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el hotel: ${err}`});

        res.status(200).send({ hotel: hotelUpdated });
    })
}

function deleteHotel (req, res) {
    let hotelId = req.params.hotelId;

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) res.status(500).send({ message: `Error al borrar el hotel: ${err}`});

        hotel.remove(err => {
            if (err) res.status(500).send({ message: `Error al borrar el hotel: ${err}`});
            res.status(200).send({ message: `El hotel ha sido eliminado`});
        })
    })
}

module.exports = {
    getHotel,
    getHotels,
    saveHotel,
    updateHotel,
    deleteHotel
}