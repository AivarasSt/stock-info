import React from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';

const CandlestickChart = ({ stockCandleData }) => {

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      type: 'datetime',
      tickPlacement: 'on',
      labels: {
        formatter: function(val) {
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
    <Chart
              options={options}
              series={series}
              type="candlestick"
              width="800"
            />
  )
}

export default CandlestickChart;
