import React from 'react';
import { Box, styled } from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  height: '15vw',
  width: '15vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '10vw',
    width: '10vw',
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

const ImageBox = ({ imgUrl }) => {
  return (
    <StyledBox sx={{ backgroundImage: `url(${imgUrl})`}}></StyledBox>
  )
}

export default ImageBox;
