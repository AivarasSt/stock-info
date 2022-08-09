import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Typography,
  Container,
  styled
} from '@mui/material';
import SearchField from './components/search-field';
import CompanyInfo from './components/company-info';
import StockCandleChart from './components/stock-candle-data';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const App = () => {
  const [company, setCompany] = useState('')

  const handleCompanySelect = ({ symbol }) => {
    setCompany(symbol)
  }

  return (
    <CssBaseline>
      <Container component='main' maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledBox sx={{ pt: '5vh' }}>
          <Typography variant='h1'>Stock Market Info</Typography>
          <SearchField handleCompanySelect={handleCompanySelect} />
          <Box display={company ? 'block' : 'none' }>
            <CompanyInfo company={company} />
            <StockCandleChart />
          </Box>
        </StyledBox >
      </Container>
    </CssBaseline>
  );
}

export default App;
