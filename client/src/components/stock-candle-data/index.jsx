import { Box } from '@mui/material';
import React, { useState } from 'react'
import DatePicker from '../date-picker';
import ResolutionSelect from '../resolution-select';

const StockCandleChart = () => {
  const date = new Date()
  const defaultFromValue = new Date(date.setMonth(date.getMonth() - 1))

  const [fromValue, setFromValue] = useState(defaultFromValue);
  const [toValue, setToValue] = useState(new Date());
  const [resolution, setResolution] = useState('');

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
    </Box>

  )
}

export default StockCandleChart;
