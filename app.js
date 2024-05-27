require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

// const cors = require('cors')

// app.use(cors({
//     origin: ['http://localhost:5005', 'http://localhost:5173']
// }))

require("./config")(app)

require("./routes")(app)

require("./error-handling")(app);

module.exports = app;
