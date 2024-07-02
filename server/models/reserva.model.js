const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const ReservaSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    service: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Servicio"],
    },
    day: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Servicio"],
    },
    hour: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Servicio"],
    },
    cost: {
        type: Number,
        required: true,
        trim: true,
        minlength: [3, "Por Favor minimo 3 caracteres en el Servicio"],
    },
}, {
    timestamps: true,
});

ReservaSchema.index({ day: 1, hour: 1 }, { unique: true });

ReservaSchema.plugin(uniqueValidator)

const ReservaModel = mongoose.model('reserva', ReservaSchema);

module.exports = ReservaModel;