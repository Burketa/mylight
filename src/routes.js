//Importações
const express = require("express");
const routes = express.Router();

const LightController = require("./controllers/LightController");

//Rotas
routes.get("/light/:state", LightController.light);
routes.get("/light/hue/:value", LightController.hue);

//Exportando as rotas para serem usadas no server.js
module.exports = routes;
