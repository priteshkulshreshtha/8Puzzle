import React from 'react';
import Board from './Board';
import CheckWin from './CheckWin';
import WinStatus from './WinStatus';


const GameBoard = (props) => {
    return (
        <div>
            <Board boardState={props.boardState} emptyIndex={props.boardState.indexOf(0)} onMove={props.onMove} />
            {!props.ai && <WinStatus boardState={props.boardState} emptyIndex={props.boardState.indexOf(0)} ai={props.ai} />}
            {props.ai && CheckWin(props.boardState) && <h1 className='win-message'>Solved it for you</h1>}
        </div>);
}

export default GameBoard;
