const express = require('express');
const finnhub = require('finnhub');
require('dotenv').config()

const router = express.Router();
const { API_KEY } = process.env

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY
const finnhubClient = new finnhub.DefaultApi();

router.get('/search', (req, res) => {
  const { searchTerm } = req.query
  finnhubClient.symbolSearch(searchTerm, (error, data, response) => {
    console.log(data)
    res.status(200).send(data)
  });
})

module.exports = router;
