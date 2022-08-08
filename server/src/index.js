const express = require('express');
require('dotenv').config();
const finnhubRouter = require('./routes/finnhub-router');

const server = express();
const { SERVER_PORT } = process.env

server.use('/', finnhubRouter)

server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant ${SERVER_PORT} porto`)
});

