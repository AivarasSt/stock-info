import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import CompanyService from '../../services/company-service';
import DatePicker from '../date-picker';
import ResolutionSelect from '../resolution-select';
import dayjs from 'dayjs';
import CandlestickChart from '../candlestick-chart';

const StockCandleChart = ({ company }) => {
  const date = new Date()
  const defaultFromValue = new Date(date.setDate(date.getDate() - 1))

  const [fromValue, setFromValue] = useState(defaultFromValue);
  const [toValue, setToValue] = useState(new Date());
  const [resolution, setResolution] = useState('60');
  const [selectedCompany, setSelectedCompany] = useState('')
  const [stockCandleData, setStockCandleData] = useState([]);

  const fetchCandle = async (searchData) => {
    const { data } = await CompanyService.getStockCandleData(searchData)
    if (data.s === 'ok') {
      const formatedCandleData = data.t.map((el, i) => [el, data.o[i], data.h[i], data.l[i], data.c[i]])
      setStockCandleData(formatedCandleData)
    } else {
      setStockCandleData([])
    }
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
  }, [selectedCompany])

  const isFirstRun = useRef(true);

  useEffect (() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (company !== '') {
      const candleData = {
        symbol: company,
        resolution: resolution,
        from: dayjs(fromValue).unix(),
        to: dayjs(toValue).unix(),
      }
      fetchCandle(candleData)
    }
  }, [resolution, toValue, fromValue]);


  const handleFromChange = (newValue) => {
    if (toValue && newValue > toValue) {
      setToValue(newValue)
    } else if (newValue > new Date()) {
      alert("You can not choose future date")
    }
    setFromValue(newValue)
  }

  const handleToChange = (newValue) => {
    if (fromValue && newValue < fromValue) {
      setFromValue(newValue)
    } else if (newValue > new Date()) {
      alert("You can not choose future date")
    }
    setToValue(newValue)
  }

  const handleResolution = (value) => {
    setResolution(value)
  }

  return (
    <Box sx={{ width: { xs: '90vw', sm: '80vw', md: '70vw' }, height: { xs: '90vh', lg: '55vh' }, display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, alignItems: 'center', justifyContent: 'space-around', m: '2vw' }}>
        <DatePicker handleFromChange={handleFromChange} handleToChange={handleToChange} fromValue={fromValue} toValue={toValue} />
        <ResolutionSelect handleResolution={handleResolution} resolution={resolution} />
      </Box>
      <CandlestickChart stockCandleData={stockCandleData} />
    </Box>
  )
}

export default StockCandleChart;
