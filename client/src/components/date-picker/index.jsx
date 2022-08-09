import React from 'react';
import { Box, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';

const DatePicker = ({ handleFromChange, handleToChange, fromValue, toValue }) => {

  return (
    <Box sx={{ flexGrow: '2' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ width: '10vw', height: '100%', display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', flexGrow: 1, justifyContent: 'space-evenly' }}>
          <DesktopDatePicker
            label="Date From"
            inputFormat="yyyy/MM/dd/"
            value={fromValue}
            onChange={handleFromChange}
            disableFuture
            renderInput={(params) => <TextField {...params} />}
          />
          <DesktopDatePicker
            label="Date To"
            inputFormat="yyyy/MM/dd/"
            value={toValue}
            onChange={handleToChange}
            disableFuture
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <Box sx={{ width: '30vw', display: { xs: 'flex', lg: 'none' }, flexDirection: 'column', justifyContent: 'space-around' }}>
          <MobileDatePicker
            label="Date From"
            inputFormat="yy/MM/dd/"
            value={fromValue}
            onChange={handleFromChange}
            disableFuture
            renderInput={(params) => <TextField {...params} />}
          />
          <MobileDatePicker
            label="Date To"
            inputFormat="yy/MM/dd/"
            value={toValue}
            onChange={handleToChange}
            disableFuture
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </LocalizationProvider>
    </Box>
  )
}

export default DatePicker;
