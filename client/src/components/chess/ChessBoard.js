
import React from 'react';

import Square from '../../logic/chess/square';

export default class ChessBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.renderSquare = this.renderSquare.bind(this)

    }
    // define render square
    renderSquare(i, squareShade) {
        return <Square 
        piece = {this.props.squares[i]} 
        style = {this.props.squares[i]? this.props.squares[i].style : null}
        shade = {squareShade}
        onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        const board = []

        for(let i = 0; i < 8; i++){
            const squareRows = [];
            for(let j = 0; j < 8; j++){
                const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
                squareRows.push(this.renderSquare((i*8) + j, squareShade));
            }
            board.push(<div className="board-row">{squareRows}</div>)
        }
        return ( 
            <div>
                <div className="chessboard"
                    style={{ width: this.props.boardSize || '639px' }}
                >
                    {board}
                </div>
          </div>
        );
    }
}

function isEven(num){
    return num % 2 === 0
}