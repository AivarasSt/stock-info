import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CompanyService from '../../services/company-service';
import DatePicker from '../date-picker';
import ResolutionSelect from '../resolution-select';

import dayjs from 'dayjs';
import CandlestickChart from '../candlestick-chart';

const StockCandleChart = ({ company }) => {
  const date = new Date()
  const defaultFromValue = new Date(date.setMonth(date.getMonth() - 1))

  const [fromValue, setFromValue] = useState(defaultFromValue);
  const [toValue, setToValue] = useState(new Date());
  const [resolution, setResolution] = useState('60');
  const [selectedCompany, setSelectedCompany] = useState('')
  const [stockCandleData, setStockCandleData] = useState([]);

  const fetchCandle = async (searchData) => {
    const { data } = await CompanyService.getStockCandleData(searchData)
    const formatedCandleData = data.t.map((el, i) => [el, data.o[i], data.h[i], data.l[i], data.c[i]])
    setStockCandleData(formatedCandleData)
  }

  useEffect(() => {
    setSelectedCompany(company)
  }, [company])

  useEffect(() => {
    if (company !== '') {
      const candleData = {
        symbol: company,
        resolution: resolution,
        from: dayjs(fromValue).unix(),
        to: dayjs(toValue).unix(),
      }
      fetchCandle(candleData)
    }
  }, [selectedCompany, resolution, toValue, fromValue, company])

  const handleFromChange = (newValue) => {
    if (toValue && newValue > toValue) {
      alert("Choose a valid date")
    } else if (newValue > new Date()) {
      alert("You can not choose future date")
    } else {
      setFromValue(newValue)
    }
  }

  const handleToChange = (newValue) => {
    if (fromValue && newValue < fromValue) {
      alert("Choose a valid date")
    } else if (newValue > new Date()) {
      alert("You can not choose future date")
    } else {
      setToValue(newValue)
    }
  }

  const handleResolution = (value) => {
    setResolution(value)
  }

  

  return (
    <Box>
      <DatePicker handleFromChange={handleFromChange} handleToChange={handleToChange} fromValue={fromValue} toValue={toValue} />
      <ResolutionSelect handleResolution={handleResolution} resolution={resolution} />
      <CandlestickChart stockCandleData={stockCandleData} />
    </Box>

  )
}

export default StockCandleChart;
