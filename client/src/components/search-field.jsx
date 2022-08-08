import React, { useEffect, useState } from 'react';
import { Box, ClickAwayListener, FormHelperText, InputAdornment, styled, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const searchFieldWidth = "30vw";

const StyledTextField = styled(TextField)(() => ({
  minWidth: searchFieldWidth
}))

const StyledBox = styled(Box)(() => ({
  minWidth: searchFieldWidth,
  maxHeight: "300px",
  overflowY: "scroll",
  width: "300px",
  background: "#fdfffe",
}))

const SearchField = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [open, setOpen] = useState(fieldValue === '' ? false : true);
  const [isValid, setIsValid] = useState(true);
  const [isTooLong, setIsTooLong] = useState(false);

  const validate = (value) => {
    value.match(/^[a-zA-Z\s]*$/) ? setIsValid(true) : setIsValid(false)
    value.length <= 35 ? setIsTooLong(false) : setIsTooLong(true)
  }

  const handleClick = () => {
    setFieldValue('')
    setOpen(false)
  }

  useEffect(() => {
    if(fieldValue !== "") {
      validate(fieldValue)
    } else {
      setIsValid(true)
      setIsTooLong(false)
    }
  }, [fieldValue])

  return (
    <ClickAwayListener onClickAway={e => setOpen(false)}>
      <Box>
        <FormHelperText error sx={{ visibility: isValid ? 'hidden' : 'visible' }}>* Only letters and whitespace allowed</FormHelperText>
        <FormHelperText error sx={{ visibility: isTooLong ? 'visible' : 'hidden', pb: "5px" }}>* Too long, only 35 characters(whitespace incl.) allowed</FormHelperText>
        <StyledTextField
          id='search'
          label='Search stock'
          variant='outlined'
          value={fieldValue}
          onFocus={e => setOpen(true)}
          onInput={e => setFieldValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon onClick={handleClick} />
              </InputAdornment>
            ),
          }}
        />
        <StyledBox display={open ? 'block' : 'none'}>
          {fieldValue === "" ? <Typography>Search by stock symbol</Typography> : <Typography>Company list coming soon</Typography>}
        </StyledBox>
      </Box>
    </ClickAwayListener>
  )
}

export default SearchField;
