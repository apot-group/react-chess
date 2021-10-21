import React from 'react';


export default class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            value: this.props.value,
            currency: this.props.currency,
            icon: this.props.icon
        }
       
    }
    render(){
        return(
            <div className='box'>
                <div className='box-title'>
                    <h1>{this.state.name}</h1>  
                </div>
                <div className='box-avatar'>
                    <img src={this.state.icon} alt={this.state.icon}></img>
                </div>
                <div className='box-value'>
                    <h1>{this.state.value}{this.state.currency}</h1>
                </div>
            
            </div>
        );
    }
}
