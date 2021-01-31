import React from 'react'

const returnAdjecentIndex = (index) => {

    switch (index) {
        case 0:
            return [1, 3];
        case 1:
            return [0, 2, 4];
        case 2:
            return [1, 5];
        case 3:
            return [0, 4, 6];
        case 4:
            return [1, 3, 5, 7];
        case 5:
            return [2, 4, 8];
        case 6:
            return [3, 7];
        case 7:
            return [4, 6, 8];
        case 8:
            return [5, 7];
        default:
            return [];
    }
}

const checkAdjecent = (emptyIdx, index) => {
    let adjecentIndex = returnAdjecentIndex(emptyIdx);
    for (let i = 0; i < adjecentIndex.length; i++) {
        if (adjecentIndex[i] === index) {
            return true;
        }
    }
    return false;
}

const Square = (props) => {
    if (props.value === 0) {
        return (
            <button className='puzzleBlank puzzlePiece '>{props.value}</button>
        );
    }
    else if (checkAdjecent(props.emptyIdx, props.index)) {
        return (
            <button className='puzzlePiece puzzleSlider' onClick={(e) => {props.onMove(Number(e.target.innerText))}}>
                {props.value}
            </button>
        );
    }
    else {
        return (
            <button className='puzzlePiece'>{props.value}</button>
        )
    }

}

export default Square;