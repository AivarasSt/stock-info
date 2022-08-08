const express = require('express');
require('dotenv').config()

const server = express();
const { SERVER_PORT } = process.env

server.listen(SERVER_PORT, () => {
  console.log(`serveris veikia ant ${SERVER_PORT} porto`)
});

