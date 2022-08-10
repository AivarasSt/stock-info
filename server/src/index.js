const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const finnhubRouter = require('./routes/finnhub-router');

const server = express();
const { SERVER_PORT } = process.env

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use('/', finnhubRouter);

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on ${SERVER_PORT} port`)
});

