function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const isSolvable = (boardState) => {
    var inversion = 0;
    var i,j;
    for (i = 0; i < 8; i++) {
        for (j = i + 1; j < 8; j++) {
            if (boardState[i] && boardState[j] && boardState[i] > boardState[j]) {
                inversion++;
            }
        }
    }

    return ((inversion % 2) === 0);
}

const GenerateBoard = () => {
    while (true) {
        const titleCandidate = shuffle(Array.from(Array(9).keys()))

        if (isSolvable(titleCandidate)) {
            return titleCandidate;
        }
    }
}

 
export default GenerateBoard;