import { Card } from 'antd';
import * as React from 'react';
import GameStatus from './GameStatus'
import ChessBoard from '../chess/ChessBoard'
import ChessFooter from '../chess/ChessFooter'


const RoomDetails = (props) => {
    return (
      <Card
        title={
            <GameStatus
              message={props.gameStatus.message}
              type={props.gameStatus.type}
              showIcon={props.gameStatus.showIcon}
            />
          }
      >
        <div className="roomdetails-wrapper">
          <div>
            <ChessBoard
              isReset={props.isReset}
              fen={props.fen}
              onMoveCallback={props.onMoveCallback}
              afterUpdateCallback={props.afterUpdateCallback}
              orientation={props.orientation}
            />
            <ChessFooter 
              onGameTypeSelected={props.onGameTypeSelected}
              setOrientation={props.setOrientation}
              resetGame={props.resetGame}
              gameType={props.gameType}
            />
          </div>
          {/* <div className="roomdetails--mid-pane">
            <p className="roomdetails--mid-pane-title">Users</p>
            <div className="roomdetails--mid-pane-users">
              {props.roomUsers.map( (user, i) => <p className="roomdetails--mid-pane-user" key={i}>{user}</p>)}
            </div>
          </div> */}
          {/* <ChatClient sendMessage={props.sendMessage} messagesArray={props.messagesArray} /> */}
        </div>
      </Card>
    );
  };
  
  export default RoomDetails;