import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CompanyService from '../../services/company-service';

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
    <Box>
      <Typography>{companyProfile.name}</Typography>
      <Typography>{companyProfile.country}</Typography>
      <Typography>{companyProfile.currency}</Typography>
      <Typography>{companyProfile.ticker}</Typography>
      <Typography>{companyProfile.weburl}</Typography>
    </Box>
  )
}

export default CompanyInfo;
