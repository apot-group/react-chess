import React from 'react';
import { LikeOutlined } from '@ant-design/icons';

import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

export default class Box extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div className='box'>
                <div className='title'>
                     <h1>{this.props.name}</h1>  
                </div>
            
            </div>
        );
    }
}
