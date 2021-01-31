const getHistory = (node) => {
    let history = [node.initialMatrix.flat()]
    while (node.parent) {
        node = node.parent
        history.splice(0, 0, node.initialMatrix.flat())
    }
    return history

}

export default getHistory;