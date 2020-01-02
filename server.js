// importações
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// inicia o app
const app = express();

// permite o envio dados em formato JSON
app.use(express.json());

// habilita o CORS
app.use(cors());

// inicia o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// require dos models
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

// irá escutar a porta 3001
app.listen(3001);