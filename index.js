const express = require('express');
const bodyParser = require('body-parser');
const mongoDB = require('express-mongo-db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(mongoDB("mongodb://localhost/lista"));

app.listen(5000, erro => {
  if(!erro){
    return console.log("Aplicação de backend iniciada");
  }
  return console.log(`ERRO: ${erro}`);
});
