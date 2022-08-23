const express = require('express');
const finnhub = require('finnhub');
const dayjs = require('dayjs');
const insertNewLog = require('../logging/mongodb-logger');
require('dotenv').config()

const router = express.Router();
const { API_KEY } = process.env;

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = API_KEY;
const finnhubClient = new finnhub.DefaultApi();

router.get('/search', (req, res) => {
  const { searchTerm } = req.query
  finnhubClient.symbolSearch(searchTerm, (error, data, response) => {
    res.status(200).send(data)
  });
})

router.get('/company/:symbol', (req, res) => {
  finnhubClient.companyProfile2({ 'symbol': `${req.params.symbol}` }, (error, data, response) => {
    res.status(200).send(data)
    const title = "Get company profile";
    const timestamp = dayjs(Date.now()).format();
    const formatedData = {companyName: data.name}
    console.log(formatedData)
    insertNewLog(title, formatedData, timestamp).catch(console.dir);
  });
})

router.get('/stock/candle', (req, res) => {
  const { symbol, resolution, from, to } = req.query
  finnhubClient.stockCandles(symbol, resolution, from, to, (error, data, response) => {
    res.status(200).send(data)
    const title = "Get stock price info";
    const timestamp = dayjs(Date.now()).format();
    if (data.s === 'ok') {
      const candles = data.t.map((el, i) => ({ [dayjs.unix(el)]: { open: data.o[i], high: data.h[i], low: data.l[i], close: data.c[i] } }))
      const formatedData = { symbol: symbol, from: dayjs.unix(from).format('DD/MM/YY'), to: dayjs.unix(to).format('DD/MM/YY'), resolution: resolution, candleData: { candles }}
      console.dir(formatedData, { depth: null })
      insertNewLog(title, formatedData, timestamp).catch(console.dir);
    } else {
      console.dir(data)
      insertNewLog(title, "No data was returned", timestamp).catch(console.dir);
    }
  });
})

module.exports = router;
