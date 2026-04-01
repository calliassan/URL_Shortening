const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");
const server = express();
dotEnv.config();
const PORT = process.env.PORT;
const userroute = require("./Routes/userroute");
const urlroute = require("./Routes/urlroute");
const dashboardroute = require("./Routes/dashboardroute");
server.use(express.json());
server.use(cors());
server.use("/user", userroute);
server.use("/url", urlroute);
server.use("/dashboard", dashboardroute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB connected successfully");
    server.listen(PORT, () => {
      console.log("Listening to port", PORT);
    });
  })
  .catch(() => {
    console.log("unable to connect to db");
  });
