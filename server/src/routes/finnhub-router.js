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

router.get('/company/:symbol', (req, res) => {
  finnhubClient.companyProfile2({'symbol': `${req.params.symbol}`}, (error, data, response) => {
    console.log(data)
    res.status(200).send(data)
  });
})

router.get('/stock/candle', (req, res) => {
  const { symbol, resolution, from, to } = req.query
  console.log(req.query)
  finnhubClient.stockCandles(symbol, resolution, from, to, (error, data, response) => {
    console.log(data)
    res.status(200).send(data)
  });
})

module.exports = router;
