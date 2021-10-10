import { Card } from 'antd';
import * as React from 'react';
import GameStatus from './GameStatus'
import ChessBoard from '../chess/ChessBoard'
import ChessFooter from '../chess/ChessFooter'


export default class RoomDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: this.props.squares,
      gameStatus: this.props.gameStatus,
      onGameTypeSelected: this.props.onGameTypeSelected,
      gameType: this.props.gameType
    }
  }
  render(){
    return(
      <Card
        title={
          <GameStatus
            message={this.state.gameStatus.message}
            type={this.state.gameStatus.type}
            showIcon={this.state.gameStatus.showIcon}
          />
        }
      >
        <div className="roomdetails-wrapper">
          <div>
             <ChessBoard
              squares = {this.state.squares}
               onClick={this.props.onClick}
              //  fen={props.fen}
              //  onMoveCallback={props.onMoveCallback}
              //  afterUpdateCallback={props.afterUpdateCallback}
              //  orientation={props.orientation}
             />
             <ChessFooter 
               onGameTypeSelected={this.state.onGameTypeSelected}
              //  setOrientation={props.setOrientation}
              //  resetGame={props.resetGame}
               gameType={this.state.gameType}
             />
          </div>
        </div>
      </Card>
    )
  }
}




//           {/* <div className="roomdetails--mid-pane">
//             <p className="roomdetails--mid-pane-title">Users</p>
//             <div className="roomdetails--mid-pane-users">
//               {props.roomUsers.map( (user, i) => <p className="roomdetails--mid-pane-user" key={i}>{user}</p>)}
//             </div>
//           </div> */}
//           {/* <ChatClient sendMessage={props.sendMessage} messagesArray={props.messagesArray} /> */}
//         </div>
//       </Card>
//     );
//   };
  
//   export default RoomDetails;