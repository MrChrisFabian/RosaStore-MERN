const ReservaModel = require('../models/reserva.model');

module.exports = {
    createNewReserva: (req, res) => {

        ReservaModel.create(req.body)
            .then(newlyCreatedReserva => res.status(201).json({ Reserva: newlyCreatedReserva }))
            .catch((err) => {
                if (err.message.includes('reserva validation failed')) {
                    res.status(400).json({ message: 'Ya existe una reserva con ese día y hora' })
                }
                else {
                    res.status(400).json({ message: `Algo salio mal al crear la reserva, intente de nuevo por favor o contactenos`, error: err.message })
                }
            })

    },
    getAllReservas: (req, res) => {
        ReservaModel.find()
            .populate('user')
            .then((allReservas) => res.status(200).json({ Reserva: allReservas }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOneReservaById: (req, res) => {
        ReservaModel.findOne({ _id: req.params.id })
            .populate('user')
            .then((OneElement) => res.status(200).json({ Reserva: OneElement }))
            .catch((err) => res.status(400).json({ message: "Algo no funciono correctamente", error: err }))
    },
    updateReserva: (req, res) => {
        ReservaModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) // si no le ponemos el new:true te devuelve el anterior
            .then((UpdatedReserva) => res.json({ Reserva: UpdatedReserva }))
            .catch((err) =>
                res.status(400).json({ message: "Algo no funciono como se esperaba", error: err }))
    },
    deleteReservaById: (req, res) => {
        ReservaModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ message: 'Algo no funciono correctamente :(', error: err }))
    },
}