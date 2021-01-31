function Node(parent, initialMatrix, blankX, blankY, cost, level) {
    this.parent = parent;
    this.initialMatrix = initialMatrix;
    this.blankX = blankX;
    this.blankY = blankY;
    this.level = level;
    this.cost = cost;
}


function newNode(initialMatrix, blankX, blankY, newX, newY, level, parent) {
    let node = new Node();
    node.parent = parent;
    node.initialMatrix = JSON.parse(JSON.stringify(initialMatrix));

    node.initialMatrix[blankX][blankY] = node.initialMatrix[newX][newY];
    node.initialMatrix[newX][newY] = 0;
    node.cost = Infinity;

    node.level = level;

    node.blankX = newX;
    node.blankY = newY;

    return node;
}

let row = [1, 0, -1, 0];
let col = [0, -1, 0, 1];

function calculateCost(initialMatrix) {
    let count = 0;
    let finalMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 0]
    ]
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (initialMatrix[i][j] && initialMatrix[i][j] !== finalMatrix[i][j])
                count++;
        }
    }
    return count;
}

function isSafe(x, y) {
    return (x >= 0 && x < 3 && y >= 0 && y < 3);
}

function solve(initialMatrix, blankX, blankY) {
    let pr = [];
    let root = newNode(initialMatrix, blankX, blankY, blankX, blankY, 0, null);
    root.cost = calculateCost(initialMatrix);

    pr.push(root);
    let k = 0
    while (pr && k<10000) {
        k++;
        let min = pr[0];
        pr.splice(0, 1);
        if (min.cost === 0) {
            return min;
        }

        for (let i = 0; i < 4; i++) {
            if (isSafe(min.blankX + row[i], min.blankY + col[i])) {
                let child = newNode(min.initialMatrix, min.blankX, min.blankY, min.blankX + row[i], min.blankY + col[i],
                    min.level + 1, min);
                child.cost = calculateCost(child.initialMatrix);

                pr.push(child);
                pr.sort(function (a, b) {
                    return a.cost - b.cost;
                });
            }
        }
    }
}


const solver = (props) => {

    let emptyIndex = props.indexOf(0);
    let blankX = Math.floor(emptyIndex / 3);
    let blankY = emptyIndex % 3;
    let boardState = [props.slice(0, 3), props.slice(3, 6), props.slice(6, 9)];
    return solve(boardState, blankX, blankY)
}

export default solver;
