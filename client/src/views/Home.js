import React from 'react';
// import SpinLoading from '../components/loading/SpinLoading';
import AntHeader from '../components/header/AntHeader';


export default class Home extends React.Component{
    constructor(props){
    super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                {/* <SpinLoading />
                 */}
                 <AntHeader/>

            </div>
        );
        
    }
}

