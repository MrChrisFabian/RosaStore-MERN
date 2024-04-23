const express = require("express");

const { createNewService, deleteServiceById, getAllServices, getOneServiceById, getOneServiceByTitulo, updateService } = require('../controllers/service.controller');
const { authenticate } = require("../config/jwt.config");

const ServiceRouter = express.Router();

ServiceRouter.post("/", authenticate, createNewService) //authenticate= only for logged in users
ServiceRouter.get("/", authenticate, getAllServices)
ServiceRouter.get("/:id", authenticate, getOneServiceById)
ServiceRouter.put("/:id", authenticate, updateService)
ServiceRouter.delete("/:id", authenticate, deleteServiceById)
ServiceRouter.get("/titulo/:titulo", authenticate, getOneServiceByTitulo)
module.exports = ServiceRouter;