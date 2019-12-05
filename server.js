//Importações
const express = require("express");

//Iniciando o App
const app = express();
app.use(express.json());

//Rotas
app.use("", require("./src/routes"));

//Escuta muda portaas requisições
console.log(`Porta -> ${process.env.PORT}`);
app.listen(process.env.PORT || 80);
