const ServiceModel = require('../models/servicio.model');

module.exports = {
    createNewService: (req, res) => {
        ServiceModel.create(req.body)
            .then(newlyCreatedService => res.status(201).json({ Service: newlyCreatedService }))
            .catch(err => res.status(400).json({ message: "Something went wrong creating the Service", error: err })
            );
    },
    getAllServices: (req, res) => {
        ServiceModel.find()
            .then((allServices) => res.status(200).json({ Service: allServices }))
            .catch((err) =>
                res.status(400).json({ message: "Something went wrong", error: err })
            );
    },
    getOneServiceById: (req, res) => {
        ServiceModel.findOne({ _id: req.params.id })
            .then((OneElement) => res.status(200).json({ Service: OneElement }))
            .catch((err) => res.status(400).json({ message: "Algo no funciono correctamente", error: err }))
    },
    getOneServiceByTitulo: (req, res) => {
        ServiceModel.findOne({ titulo: req.params.titulo })
            .then((OneElement) => res.status(200).json({ Service: OneElement }))
            .catch((err) => res.status(400).json({ message: "Algo no funciono correctamente al encontrar", error: err }))
    },
    updateService: (req, res) => {
        ServiceModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }) // si no le ponemos el new:true te devuelve el anterior
            .then((UpdatedService) => res.json({ Service: UpdatedService }))
            .catch((err) =>
                res.status(400).json({ message: "Algo no funciono como se esperaba", error: err }))
    },
    deleteServiceById: (req, res) => {
        ServiceModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ message: 'Algo no funciono correctamente :(', error: err }))
    },
}