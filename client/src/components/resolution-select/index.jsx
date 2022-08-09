import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const ResolutionSelect = ({ handleResolution, resolution }) => {
  return (
    <FormControl sx={{ width: '150px' }}>
      <InputLabel id="resolution-select-label">Resolution</InputLabel>
      <Select
        labelId="resolution-select-label"
        id="resolution-select"
        value={resolution}
        label="Resolution"
        onChange={e => handleResolution(e.target.value)}
      >
        <MenuItem value={"60"}>1 hour</MenuItem>
        <MenuItem value={"D"}>1 day</MenuItem>
        <MenuItem value={"W"}>1 week</MenuItem>
        <MenuItem value={"M"}>1 month</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ResolutionSelect;
