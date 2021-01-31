import React from 'react';
import AutoSolve from "./AutoSolve";
import GameBoard from './GameBoard';
import GenerateBoard from './GenerateBoard'
import solver from './Solver';
import getHistory from './getHistory';
import CheckWin from './CheckWin';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardState: GenerateBoard()
        }
        this.handleMove = this.handleMove.bind(this);
        this.handleMoveAI = this.handleMoveAI.bind(this);
    }

    handleMove(value) {
        const moveIndex = this.state.boardState.indexOf(value);
        const emptyIndex = this.state.boardState.indexOf(0);
        const newBoard = this.state.boardState;
        newBoard[emptyIndex] = value;
        newBoard[moveIndex] = 0;
        this.setState({
            ai: false,
            impossible: false,
            boardState: newBoard
        })

    }

    handleMoveAI() {
        let solvedNode = solver(this.state.boardState);
        if (solvedNode) {
            let history = getHistory(solvedNode);
            this.render(
                <h1> Cannot be Solved </h1>
            )
            for (let i = 0; i < history.length; i++) {
                let time = 500 * ((i) * 2)
                setTimeout(
                    () => this.setState({
                        boardState: history[i]
                    }),
                    time
                );
            }
        }
        else {
            this.setState({
                ai: true,
                impossible: true
            })
        }

    }

    render() {
        return (
            <div>
                {<GameBoard boardState={this.state.boardState} emptyIndex={this.state.boardState.indexOf(0)}
                    onMove={this.handleMove} ai={this.state.ai} />}

                <div className='solvediv'>
                    {!this.state.ai && !CheckWin(this.state.boardState) && <AutoSolve boardState={this.state.boardState} onMove={this.handleMoveAI} />}
                    {this.state.ai && !this.state.impossible && !CheckWin(this.state.boardState) && <h1 className='sol'>Solving</h1>}
                    {this.state.ai && this.state.impossible && <h1 className='sol'>Cannot solve it, trying simplifying it</h1>}
                </div>
            </div>
        );
    }
}

export default Game;