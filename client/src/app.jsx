import React from 'react';
import {
  Box,
  CssBaseline,
  Typography,
  Container,
  styled
} from '@mui/material';
import SearchField from './components/search-field';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const App = () => {

  return (
    <CssBaseline>
      <Container component='main' maxWidth='lg' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledBox  sx={{ pt: '5vh' }}>
          <Typography variant='h1'>Stock Market Info</Typography>
          <SearchField />
        </StyledBox >
      </Container>
    </CssBaseline>
  );
}

export default App;
