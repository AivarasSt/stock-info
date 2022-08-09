import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = () => {
  const date = new Date()
  const defaultFromValue = new Date(date.setMonth(date.getMonth() - 1))

  const [fromValue, setFromValue] = useState(defaultFromValue);
  const [toValue, setToValue] = useState(new Date());

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

  return (
    <Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date From"
              inputFormat="dd/MM/yyyy"
              value={fromValue}
              onChange={handleFromChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="Date To"
              inputFormat="dd/MM/yyyy"
              value={toValue}
              onChange={handleToChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
  )
}

export default DatePicker;
