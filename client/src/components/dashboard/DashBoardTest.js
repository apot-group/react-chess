import React from 'react';
import VerticalBar from '../chart/bar/VerticalBar';
import Polar from '../chart/other/Polar';
// import LineChart from '../chart/line/LineChart';
import Box from '../box/Box';
// import {EuroCircleOutlined } from '@ant-design/icons'
import GameIcon from '../../assets/images/dashboard/Game.png'
import DeveloperIcon from '../../assets/images/dashboard/Developer.png'
import UserIcon from '../../assets/images/dashboard/User.png'
import IngameIcon from '../../assets/images/dashboard/Ingame.png'
import AdsIcon from '../../assets/images/dashboard/Ads.png'
import CurrencyIcon from '../../assets/images/dashboard/Currency.png'







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
                   <div className=''><Box name="Total Games" value = "154533" currency="" icon={GameIcon}/></div>
                   <div className='item'><Box name="Total Developer" value = "2" currency="" icon={DeveloperIcon}/></div>
                   <div className='item'><Box name="Total Users" value = "154533" currency="" icon={UserIcon}/></div>
                   <div className='item'><Box name="Time Playing" value = "904533" currency="s" icon={IngameIcon}/></div>
                   <div className='item'><Box name="Time Ads" value = "904533" currency="s" icon={AdsIcon}/></div>
                   <div className='item'><Box name="Total Revenues" value = "21050" currency="$" icon={CurrencyIcon}/></div>
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
