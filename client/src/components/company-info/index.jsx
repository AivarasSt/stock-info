import { Box, Link, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CompanyService from '../../services/company-service';
import LogoBox from '../logo-box';

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '3vw',
  [theme.breakpoints.up('md')]: {
    fontSize: '2vw',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1vw',
  },
}));

const CompanyInfo = ({ company }) => {
  const [selectedCompany, setSelectedCompany] = useState('')
  const [companyProfile, setCompanyProfile] = useState([])

  useEffect(() => {
    setSelectedCompany(company)
  }, [company])


  const fetchCompanyProfile = async (symbol) => {
    const { data } = await CompanyService.getCompanyProfile(symbol)
    setCompanyProfile(data)
  }

  useEffect(() => {
    if (selectedCompany !== '') {
      fetchCompanyProfile(selectedCompany)
    }
  }, [selectedCompany])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: '1vw', p: '5px', borderBottom: '1px solid'}}>
      <StyledBox>
        <Typography sx={{ fontSize: { xs: '7vw', md: '3vw' }, lineHeight: '1.2'}}>{companyProfile.ticker}</Typography>
        <StyledTypography>{companyProfile.name}</StyledTypography>
      </StyledBox>
      <LogoBox imgUrl={companyProfile.logo}  />
      <StyledBox>
        <Link href={companyProfile.weburl}>{companyProfile.weburl}</Link>
        <StyledTypography sx={{ textAlign: 'end' }}>{companyProfile.country}</StyledTypography>
        <StyledTypography sx={{ textAlign: 'end' }}>{companyProfile.currency}</StyledTypography>
      </StyledBox>
    </Box>

  )
}

export default CompanyInfo;
