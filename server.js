//Importações
const express = require("express");

//Iniciando o App
const app = express();
app.use(express.json());

//Rotas
app.use("/light", require("./src/routes"));

//Escuta muda portaas requisições
console.log(process.env.PORT);
app.listen(process.env.PORT || 3000);
