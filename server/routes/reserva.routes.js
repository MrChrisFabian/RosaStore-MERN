const express = require("express");

const { createNewReserva,deleteReservaById,getAllReservas,getOneReservaById,updateReserva } = require('../controllers/reserva.controller');
const { authenticate } = require("../config/jwt.config");

const ReservaRouter = express.Router();

ReservaRouter.post("/", authenticate, createNewReserva); //authenticate= only for logged in users
ReservaRouter.get("/", authenticate, getAllReservas);
ReservaRouter.get("/:id", authenticate, getOneReservaById);
ReservaRouter.put("/:id", authenticate, updateReserva)
ReservaRouter.delete("/:id", authenticate, deleteReservaById)
module.exports = ReservaRouter;