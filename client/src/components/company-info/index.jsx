import { Box, Link, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CompanyService from '../../services/company-service';
import LogoBox from '../logo-box';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', m: '1vw', p: '5px', borderBottom: '1px solid'}}>
      <StyledBox>
        <Typography sx={{ fontSize: '3vw' }}>{companyProfile.ticker}</Typography>
        <Typography>{companyProfile.name}</Typography>
      </StyledBox>
      <LogoBox imgUrl={companyProfile.logo}  />
      <StyledBox>
        <Link href={companyProfile.weburl}>{companyProfile.weburl}</Link>
        <Typography sx={{ textAlign: 'end' }}>{companyProfile.country}</Typography>
        <Typography sx={{ textAlign: 'end' }}>{companyProfile.currency}</Typography>
      </StyledBox>
    </Box>

  )
}

export default CompanyInfo;
