import React from 'react';
import { Box, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({handleFromChange, handleToChange, fromValue, toValue }) => {

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
