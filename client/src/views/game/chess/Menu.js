
import React from 'react';
import { Input, Button } from 'antd';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomIdInput: '',
        }
        this.onRoomIdInput = this.onRoomIdInput.bind(this)
        this.joinNewRoom = this.joinNewRoom.bind(this)

    }

    onRoomIdInput = (e) => {
        this.setState({ roomIdInput: e.target.value });
    }

    //  join new room
    joinNewRoom = () => {
        if (this.state.roomIdInput === '') {
          return;
        }
        this.props.subscribeUser({
          userName: this.props.currentUser,
          roomId: this.state.roomIdInput
        });
        this.setState({
          roomIdInput: ''
        });
    }

    render() {
        return ( 
            <div className="menu-wrapper">
                <div className="menu-header">
                    <p className="menu-header-room-text">Current Room ID:</p>
                    <p className="menu-header-room-id">{this.props.roomId}</p>
                    <span className="menu-header-room-text">Current users: {this.props.roomUsers.length}</span>
                </div>
                <div className="menu-content">
                    <div className="menu-content-item">
                        <Input 
                            placeholder="new room ID"
                            value={this.state.roomIdInput}
                            onChange={this.onRoomIdInput}
                        />
                        <Button onClick={this.joinNewRoom} type="primary" className="menu-content-join-btn">Join</Button>
                    </div>
                </div>
            </div>
        );
    }
}