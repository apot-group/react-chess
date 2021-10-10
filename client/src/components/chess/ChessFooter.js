
import React from 'react';
import { Button, Radio } from 'antd';


const RadioGroup = Radio.Group;


const ChessFooter = (props)  => {
    return ( 
        <div className="chessfooter-wrapper">
            <Button type="primary" onClick={props.resetGame}>Start New Game</Button>
            <Button onClick={() => props.setOrientation('w')}>White</Button>
            <Button onClick={() => props.setOrientation('b')}>Black</Button>
            <RadioGroup onChange={e => props.onGameTypeSelected(e)} value={props.gameType}>
                <Radio value={'friends'}>Vs. Friends</Radio>
                <Radio value={'ai'}>Vs. AI</Radio>
            </RadioGroup>
            </div>
    );
}

export default ChessFooter;