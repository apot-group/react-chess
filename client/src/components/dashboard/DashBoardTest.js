import React from 'react';
import VerticalBar from '../chart/bar/VerticalBar';
import Polar from '../chart/other/Polar';
import LineChart from '../chart/line/LineChart';
import Box from '../box/Box';

export default class DashBoardTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
      
    }
    render(){
        return (
            <div className='dashboard'>
                <div className='filter'></div>
               <div className='total'>
                   <div className=''><Box name="Total Games"/></div>
                   <div className='item'><Box name="Total Developer"/></div>
                   <div className='item'><Box name="Total Users"/></div>
                   <div className='item'><Box name="Time Playing"/></div>
                   <div className='item'><Box name="Time Ads"/></div>
                   <div className='item'><Box name="Total Revenues"/></div>
               </div>
              
               <div className='col-one'>
                    <div className='item'>
                        <VerticalBar/>
                    </div>
                    <div className='item'>
                        <VerticalBar/>
                    </div>
                    <div className='item'>
                        <Polar />
                    </div>
               </div>
               {/* <div className='pay-time'>
                   <LineChart/>
               </div> */}
            </div>
        );
    }
}
