const mongoose = require("mongoose");
require('dotenv').config(); // Import dotenv package to read .env file
const db_name = process.env.SERVER;

mongoose.connect(`mongodb://localhost/${db_name}`)
    .then(() => { console.log(`Conexión Establecida con el servidor ${db_name}`) })
    .catch((err) => { console.log(`La conexión Falló con el servidor ${db_name}`, err) })