import React, { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, ClickAwayListener, FormHelperText, InputAdornment, styled, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CompanyService from '../../services/company-service';

const searchFieldWidthXs = '70vw';
const searchFieldWidthMd = '30vw';


const StyledTextField = styled(TextField)(({ theme }) => ({
  width: searchFieldWidthXs,
  [theme.breakpoints.up('md')]: {
    width: searchFieldWidthMd
  },
}))

const StyledBox = styled(Box)(({ theme }) => ({
  width: searchFieldWidthXs,
  minHeight: '35px',
  maxHeight: '300px',
  overflowY: 'scroll',
  background: '#fdfffe',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  [theme.breakpoints.up('md')]: {
    width: searchFieldWidthMd
  },
}))

const SearchField = ({ handleCompanySelect }) => {
  const [fieldValue, setFieldValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [open, setOpen] = useState(fieldValue === '' ? false : true);
  const [isValid, setIsValid] = useState(true);
  const [isTooLong, setIsTooLong] = useState(false);

  const validate = (value) => {
    if (value.match(/^[a-zA-Z\s]*$/)) {
      setIsValid(true)
      if (value.length <= 35) {
        return value
      } else {
        setIsTooLong(true)
      }
    } else {
      setIsValid(false)
    }
  }

  const fetchCompanies = async (value) => {
    if(value){
      setLoading(true)
      const { result } = await CompanyService.getCompanies(value)
      setCompanies(result)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (fieldValue !== '') {
      fetchCompanies(validate(fieldValue))
    }
  }, [fieldValue])

  const handleClick = () => {
    setFieldValue('')
    setOpen(false)
  }

  const handleFieldChange = (value) => {
    setFieldValue(value)
  }

  const handleCompanyClick = (company) => {
    handleCompanySelect(company)
    setFieldValue(company.symbol)
    setOpen(false)
  }

  useEffect(() => {
    validate(fieldValue)
  }, [fieldValue])

  return (
    <ClickAwayListener onClickAway={e => setOpen(false)}>
      <Box sx={{ width: { xs: searchFieldWidthXs, md: searchFieldWidthMd } }}>
        <FormHelperText error sx={{ visibility: isValid ? 'hidden' : 'visible' }}>* Only letters and whitespace allowed</FormHelperText>
        <FormHelperText error sx={{ visibility: isTooLong ? 'visible' : 'hidden', pb: '5px' }}>* Too long, only 35 characters allowed</FormHelperText>
        <StyledTextField
          id='search'
          label='Search stock'
          variant='outlined'
          value={fieldValue}
          onFocus={e => setOpen(true)}
          onInput={e => handleFieldChange(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <CloseIcon onClick={handleClick} />
              </InputAdornment>
            ),
          }}
        />
        <StyledBox display={open ? loading ? 'flex' : 'block' : 'none'} sx={{ position: 'absolute' }} >
          {loading ? <CircularProgress sx={{ alignSelf: 'center', width: '30px', height: '30px' }} /> : fieldValue === '' ? <Typography sx={{ m: '5px' }}>Search by stock symbol</Typography> : companies.filter(company => company.type === 'Common Stock').map(company => <Button onClick={e => handleCompanyClick(company)} sx={{ width: '100%', justifyContent: 'start' }} key={company.displaySymbol}>{company.displaySymbol} | {company.description}</Button>)}
        </StyledBox>
      </Box>
    </ClickAwayListener>
  )
}

export default SearchField;
