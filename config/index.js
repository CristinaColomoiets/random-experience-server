const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const SERVER_URL = process.env.ORIGIN || "http://localhost:5005";
const CLIENT_URL = 'http://localhost:5173'

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: [SERVER_URL, CLIENT_URL]
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
