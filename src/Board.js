import React from 'react'
import Square from './Square'

const Board = (props) => {
    return (
        <div className="board">
            {props.boardState.map((value, index) => {
                return (
                    <Square key={value} value={value} index={index} emptyIdx={props.emptyIndex} onMove={props.onMove}/>
                );
            })}            
        </div>
    );
}
 
export default Board;
