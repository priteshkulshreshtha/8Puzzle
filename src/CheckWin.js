const CheckWin = (boardState) => {
    const winBoard = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    return ( JSON.stringify(winBoard)===JSON.stringify(boardState) );
}


 
export default CheckWin;