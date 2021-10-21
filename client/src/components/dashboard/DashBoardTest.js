import React from 'react';
import VerticalBar from '../chart/bar/VerticalBar';
import Polar from '../chart/other/Polar';
import Box from '../box/Box';
import GameIcon from '../../assets/images/dashboard/Game.png'
import DeveloperIcon from '../../assets/images/dashboard/Developer.png'
import UserIcon from '../../assets/images/dashboard/User.png'
import IngameIcon from '../../assets/images/dashboard/Ingame.png'
import AdsIcon from '../../assets/images/dashboard/Ads.png'
import CurrencyIcon from '../../assets/images/dashboard/Currency.png'
import HorizontalBar from '../chart/bar/HorizontalBar';
import MultiAxisLine from '../chart/line/MultiAxisLine';
import { Button, DatePicker  } from 'antd';


export default class DashBoardTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
      
    }
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render(){
        return (
            <div className='dashboard'>
                <div className='view'>
                    <Button type="primary" ghost>Report User</Button>
                    <Button type="primary" ghost>Report System</Button>

                </div>
               <div className='filter'>
                    <DatePicker onChange={this.onChange} picker="month" size="large"/>
               </div>
               <div className='total'>
                   <div className=''><Box name={"Total Games"} value = {7} currency={""} icon={GameIcon} isIncrease = {true} increaseValue = {33}/></div>
                   <div className='item'><Box name="Total Developer" value = "20" currency="" icon={DeveloperIcon} isIncrease = {true} increaseValue = {33}/></div>
                   <div className='item'><Box name="Users Active" value = "140.1" currency="K" icon={UserIcon} isIncrease = {false} increaseValue = {12}/></div>
                   <div className='item'><Box name="Time Playing - Min" value = "24.2" currency="K" icon={IngameIcon} isIncrease = {true} increaseValue = {53}/></div>
                   <div className='item'><Box name="Time Ads - Min" value = "12.6" currency="K" icon={AdsIcon} isIncrease = {true} increaseValue = {27}/></div>
                   <div className='item'><Box name="Total Revenues - $" value = "21.1" currency="M" icon={CurrencyIcon} isIncrease = {false} increaseValue = {15}/></div>
               </div>
              
               <div className='col-one'>
                    <div className='item'>
                        <HorizontalBar name = "Top 10 Spenders"/>
                    </div>
                    <div className='item'>
                        <VerticalBar name = 'Top 10 Hard Working Players'/>
                    </div>
                    <div className='item'>
                        <Polar name = 'Top Selling Games'/>
                    </div>
               </div>
               
               <div className='pay-time'>
                   <MultiAxisLine name = 'Cash Flow'/>
               </div>
            </div>
        );
    }
}
