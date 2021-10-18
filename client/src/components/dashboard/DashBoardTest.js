import React from 'react';
import VerticalBar from '../chart/bar/VerticalBar';

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
               <div className='total'>
                    total general here
               </div>
               <div className='user-pay'>
                   <VerticalBar/>
               </div>
            </div>
        );
    }
}
