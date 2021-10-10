
import React from 'react';
import Menu from '../menu/Menu';
import RoomDetails from './RoomDetails';
import initialiseChessBoard from '../../logic/chess/init-chessboard';


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
            },
            squares: initialiseChessBoard(),
           
        }
        this.subscribeUser = this.subscribeUser.bind(this)
        this.onGameTypeSelected = this.onGameTypeSelected.bind(this)

    }

    subscribeUser(){return {currentUser: this.state.currentUser, roomId: this.state.roomId}}
    onGameTypeSelected(e){console.log(e); this.setState({gameType: e.target.value}); return this.state.gameType}
    onClick(i){ return i}

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
                    gameStatus={this.state.gameStatus} // status for of game
                    onGameTypeSelected={(e) => this.onGameTypeSelected} // footer select type of game
                    gameType={this.state.gameType}
                    squares = {this.state.squares} // make sent to board squares array now
                    onClick = {this.onClick}
                    // setOrientation={this.setOrientation}
                    // resetGame={this.resetGame}
                    // isReset={this.state.isReset}
                    // fen={this.state.fen}
                    // afterUpdateCallback={this.afterUpdateCallback}
                    // onMoveCallback={this.onMoveCallback}
                    // orientation={this.state.orientation}
                    // roomUsers={this.state.roomUsers}
                    // sendMessage={this.sendMessage}
                    // messagesArray={this.state.messagesArray}
                />
            </div>
        );
    }
}