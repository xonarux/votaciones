const express = require("express");
const votaciones = require("./votaciones/router");


const api= express();

api.use("/votaciones", votaciones);

module.exports = api;