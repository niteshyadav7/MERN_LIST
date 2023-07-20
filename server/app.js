/**
 * 1. Create the server on PORT :8080;
 * 2. Connect it to the database
 */

/** without ES6   */
// const express = require("express");
// const dotenv = require("dotenv");

/** with ES6   */
import express from "express";
import morgan from "morgan";
import { config } from "dotenv"; // import dotenv from "dotenv";

/** local imports */
import ConnectionDatabase from "./config/db.js";
import router from "./controllers/user.js";

const app = express();

app.use(express.json());

/**this is the third-party middleware */
app.use(morgan("dev"));

app.use("/api", router);

/** this is used to require the .env files */
config(); // dotenv.config();

ConnectionDatabase(process.env.MONGO_URL);

try {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`server runnning ${process.env.HOST_NAME}:${process.env.PORT}`);
  });
} catch (err) {
  console.log(`Error occusrs due to ${err}`);
}
