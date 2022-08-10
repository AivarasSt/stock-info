import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ResolutionSelect = ({ handleResolution, resolution }) => {
  return (
    <FormControl sx={{ width: { xs:'30vw', sm: '15vw', lg: '10vw' }, flexGrow: {xs: '0', lg: '1' }}}>
      <InputLabel id="resolution-select-label">Resolution</InputLabel>
      <Select
        labelId="resolution-select-label"
        id="resolution-select"
        value={resolution}
        label="Resolution"
        size='small'
        onChange={e => handleResolution(e.target.value)}
      >
        <MenuItem value={"60"}>1H</MenuItem>
        <MenuItem value={"D"}>1D</MenuItem>
        <MenuItem value={"W"}>1W</MenuItem>
        <MenuItem value={"M"}>1M</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ResolutionSelect;
