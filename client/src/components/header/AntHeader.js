import React from "react";
// import { Layout } from 'antd';
import { Link } from "react-router-dom";


export default class AntHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="ant-header-page">
                <header className="header-final">
                    <div className="header-avatar">
                        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="[ WAREHOUSE ]"></img>
                    </div>
                    <nav className="header-content">
                        <ul className="header-left-menu">
                            <li>
                                <Link className='link-menu' to="/">Home</Link>
                            </li>
                            <li>
                                <Link className='link-menu' to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link className='link-menu' to="/project">Project</Link>
                            </li>
                        </ul>
                        <ul className="header-right-menu">
                            <li>Search</li>
                            <li>Help</li>
                            <li>Account</li>
                            <li>
                            </li>

                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}