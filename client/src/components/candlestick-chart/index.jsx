import React from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

const CandlestickChart = ({ stockCandleData }) => {

  const options = {
    chart: {
      id: "basic-bar"
    },
    noData: {
      text: 'No data for selected period available',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '14px',
      }
    },
    xaxis: {
      type: 'datetime',
      tickPlacement: 'on',
      labels: {
        formatter: function (val) {
          return dayjs.unix(val).format('MMM DD HH:mm')
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  const series = [
    {
      name: "series-1",
      data: stockCandleData
    }
  ]

  return (
    <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '80%', mx: 'auto' }}>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        />
        </Box>
    </Box>
  )
}

export default CandlestickChart;
