const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const ServiceSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Nombre del service"],
        maxlength: [50, "Máximo 50 caracteres en el Nombre del service"]
    },
    cost: {
        type: Number,
        required: true,
        trim: true,
        minlength: [3, "Por favor ingresar un valor valido"],
    },
}, {
    timestamps: true,
});

ServiceSchema.plugin(uniqueValidator)
const serviceModel = mongoose.model('service', ServiceSchema);

module.exports = serviceModel;