import React from 'react';
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '15vw',
  width: '15vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    height: '8vw',
    width: '8vw',
  },
  [theme.breakpoints.up('md')]: {
    height: '7vw',
    width: '7vw',
  },
  [theme.breakpoints.up('lg')]: {
    height: '5vw',
    width: '5vw',
    margin: '5px',
  },
}));

const LogoBox = ({ imgUrl }) => {
  return (
    <StyledBox sx={{ backgroundImage: `url(${imgUrl})`}}></StyledBox>
  )
}

export default LogoBox;
