const express = require("express");
const cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser'); // to be able to read cookies
require('dotenv').config(); // Import dotenv package to read .env file

app.use(cookieParser());

const corsOptions = {
    credentials: true, // Allow credentials (cookies) to be sent to/from origin
    origin: 'http://localhost:5173', // Allow only this origin
    methods: 'GET, POST, PUT, PATCH, DELETE', // Allow these methods
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");


const UserRouter = require("./routes/user.routes");
app.use("/api/auth", UserRouter);

const ReservaRouter = require("./routes/reserva.routes");
app.use("/api/reserva", ReservaRouter);

const ServiceRouter = require("./routes/service.routes");
app.use("/api/service", ServiceRouter);

const PORT = process.env.PORT || 8000; // Use the value from .env file or default to 3000

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));