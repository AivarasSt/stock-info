const express = require('express');
const finnhub = require('finnhub');
const dayjs = require('dayjs')
require('dotenv').config()

const router = express.Router();
const { API_KEY } = process.env

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY
const finnhubClient = new finnhub.DefaultApi();

router.get('/search', (req, res) => {
  const { searchTerm } = req.query
  finnhubClient.symbolSearch(searchTerm, (error, data, response) => {
    res.status(200).send(data)
  });
})

router.get('/company/:symbol', (req, res) => {
  finnhubClient.companyProfile2({ 'symbol': `${req.params.symbol}` }, (error, data, response) => {
    console.log({companyName: data.name})
    res.status(200).send(data)
  });
})

router.get('/stock/candle', (req, res) => {
  const { symbol, resolution, from, to } = req.query
  finnhubClient.stockCandles(symbol, resolution, from, to, (error, data, response) => {
    if (data.s === 'ok') {
      const candles = data.t.map((el, i) => ({ [dayjs.unix(el)]: { open: data.o[i], high: data.h[i], low: data.l[i], close: data.c[i] } }))
      const formatedData = { symbol: symbol, from: dayjs.unix(from).format('DD/MM/YY'), to: dayjs.unix(to).format('DD/MM/YY'), resolution: resolution, candleData: { candles }}
      console.dir(formatedData, { depth: null })
    }
    res.status(200).send(data)
  });
})

module.exports = router;
