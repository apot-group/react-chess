
import React from 'react';
import Menu from '../menu/Menu';
import RoomDetails from './RoomDetails';
import initialiseChessBoard from '../../logic/chess/init-chessboard';
import SocketIo from '../../services/socket';


export default class GameMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameType: 'friends',
            roomId: '',
            roomUsers: [],
            currentUser: '',
            gameStatus: {
                message: 'Welcome to React Chess. Please press Start New Game to begin.',
                type: 'info',
                showIcon: false
            },
            squares: initialiseChessBoard(),
            messagesArray: [{from: 'chatbot', message: '', userName: 'BoT'}],
        }


        // this.newUserListener = this.newUserListener.bind(this)
        // this.subscribeUser = this.subscribeUser.bind(this)
        this.onGameTypeSelected = this.onGameTypeSelected.bind(this)

    }
    componentDidMount(){

        SocketIo.emit("joinRoom", { userName: 'duy', roomId: '1' });
        SocketIo.on("message", (data) => {
            if (data.from !== 'bot') {
                let array = this.state.messagesArray;
                array.push({from: data.userName, message: data.text, userName: data.userName})
            }
            this.setState({roomUsers: [data.username], roomId: data.roomId, currentUser: data.userId})
        })

    }
 
    // newMessageListener(messageObj){
    //     if (messageObj.userName === this.state.currentUser) {
    //         messageObj.from = 'self';
    //       }
    //       this.setState({
    //         messagesArray: [...this.state.messagesArray, messageObj]
    //       });
    // }
    // newUserListener(newUserObj){
    //     this.setState({
    //         roomId: newUserObj.roomId,
    //         roomUsers: newUserObj.roomUsers
    //       });
    // }
    // subscribeUser(userInfo){
    //     console.log(userInfo)
    //     this.setState({currentUser: userInfo.userName});


    //     // return {currentUser: this.state.currentUser, roomId: this.state.roomId}
    // }

    onGameTypeSelected(e){console.log(e); this.setState({gameType: e.target.value}); return this.state.gameType}
    onClick(i){ return i}
    sendMessage(message){
        console.log(message)
        if (message !== '') SocketIo.emit('chat', message)
    }

    render() {
        return ( 
            <div className="game-main">
                <Menu
                    roomId={this.state.roomId}
                    roomUsers={this.state.roomUsers}
                    currentUser={this.state.currentUser}
                    // subscribeUser={(e) => this.subscribeUser(e)}
                />
                <RoomDetails
                    gameStatus={this.state.gameStatus} // status for of game
                    onGameTypeSelected={(e) => this.onGameTypeSelected} // footer select type of game
                    gameType={this.state.gameType}
                    squares = {this.state.squares} // make sent to board squares array now
                    onClick = {this.onClick} // sent status of location click now
                    sendMessage={this.sendMessage} // message sent from client on chat box
                    messagesArray={this.state.messagesArray} // array of total chat mess
        

                />
            </div>
        );
    }
}