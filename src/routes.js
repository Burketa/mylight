//Importações
const express = require("express");
const routes = express.Router();

const LightController = require("./controllers/LightController");

//Rotas
routes.get("/on", LightController.turnOn);
routes.get("/off", LightController.turnOff);
routes.get("/breathe", LightController.breathe);
routes.get("/random", LightController.random);

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
