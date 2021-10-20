import React from 'react';
import { Line } from 'react-chartjs-2';


export default class LineChart extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  }
  render(){
    return(
      <div className='line-chart'>
      <div className='header'>
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line data={this.state.data} options={this.state.options} />
      </div>
    )
  }
}
