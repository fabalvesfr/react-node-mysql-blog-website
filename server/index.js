const express = require("express");
const cors = require("cors");

// API INITIALIZATION
const api = express();

// MIDDLEWARES
api.use(express.json());
api.use(cors());

// ROUTES
const postRoute = require("./routes/post");
api.use("/posts", postRoute);

// SERVER-DB SYNCHRONISATION
const db = require("./models");
db.sequelize.sync().then(() => {
  api.listen("3001", () => {
    console.log("Server running on port 3001!");
  });
});
