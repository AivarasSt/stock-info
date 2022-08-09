import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Typography,
  Container,
  styled,
  ThemeProvider
} from '@mui/material';
import SearchField from './components/search-field';
import CompanyInfo from './components/company-info';
import StockCandleChart from './components/stock-candle-data';
import darktheme from './style/theme';

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
    <ThemeProvider theme={darktheme}>
      <CssBaseline>
        <Container component='main' maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StyledBox sx={{ pt: '5vh' }}>
            <Typography variant='h1'>Stock Market Info</Typography>
            <SearchField handleCompanySelect={handleCompanySelect} />
            <Box display={company ? 'block' : 'none'}>
              <CompanyInfo company={company} />
              <StockCandleChart company={company} />
            </Box>
          </StyledBox >
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
