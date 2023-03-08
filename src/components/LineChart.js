import React, { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function LineChart(props) {
    console.log(props);
  const ref = useRef();

  const data = {
    labels: props.itemData.years,
    datasets: [
      {
        label: 'Maxium sold Price',
        data: props.itemData.prices,
        fill: false,
        borderColor: '#742774',
      },
    ],
  };

  return (<div style={{padding: '10px',margin: 'auto', height:'50%',width:'50%', alignContent : 'center'}}>
            <Line ref={ref} data={data} />
        </div>)
};