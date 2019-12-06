//Importações
const express = require("express");

//Iniciando o App
const app = express();
app.use(express.json());

//Rotas
app.use("", require("./src/routes"));

//Escuta requisições
console.log("Rodando...");
app.listen(80);
