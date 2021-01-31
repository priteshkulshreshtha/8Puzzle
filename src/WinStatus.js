import CheckWin from './CheckWin';

const WinStatus = (props) => {
    if (CheckWin(props.boardState)){
        return (
            <h1 className='win-message'>You Won</h1>
        )
    }
    else{
        return (
            <h1 className='not-won'>You Won</h1>
        )
    }
    
}
 
export default WinStatus;