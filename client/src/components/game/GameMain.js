
import React from 'react';
import Menu from '../menu/Menu';
import RoomDetails from './RoomDetails';


export default class GameMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameType: 'friends',
            roomId: '113',
            roomUsers: ['duy', 'gai'],
            currentUser: 'duy',
            gameStatus: {
                message: 'Welcome to React Chess. Please press Start New Game to begin.',
                type: 'info',
                showIcon: false
            }
           
        }
        this.subscribeUser = this.subscribeUser.bind(this)

    }

    subscribeUser(userName){
        this.setState({currentUser: userName})

        return {currentUser: this.state.currentUser, roomId: this.state.roomId}
    }
   

    render() {
        return ( 
            <div className="game-main">
                <Menu
                    roomId={this.state.roomId}
                    roomUsers={this.state.roomUsers}
                    currentUser={this.state.currentUser}
                    subscribeUser={this.subscribeUser}
                />
                <RoomDetails
                    // onGameTypeSelected={this.onGameTypeSelected}
                    // setOrientation={this.setOrientation}
                    // resetGame={this.resetGame}
                    // gameType={this.state.gameType}
                    // isReset={this.state.isReset}
                    // fen={this.state.fen}
                    // afterUpdateCallback={this.afterUpdateCallback}
                    // onMoveCallback={this.onMoveCallback}
                    gameStatus={this.state.gameStatus}
                    // orientation={this.state.orientation}
                    // roomUsers={this.state.roomUsers}
                    // sendMessage={this.sendMessage}
                    // messagesArray={this.state.messagesArray}
                />
            </div>
        );
    }
}