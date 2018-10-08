const express = require('express');
const bodyParser = require('body-parser');
const mongoDB = require('express-mongo-db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(mongoDB("mongodb://localhost/lista"));

app.get('/produtos', (req, res) => {
  req.db.collection('compras').find().toArray((erro, dados) => {
    if(!erro){
      res.send({produtos: dados});
    }
    return res.status(500).send({erro: erro});
  })
});

// app.post();

// app.delete();

app.listen(5000, erro => {
  if(!erro){
    return console.log("Aplicação de backend iniciada");
  }
  return console.log(`ERRO: ${erro}`);
});
