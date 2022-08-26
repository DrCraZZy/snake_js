const GRID_SIZE = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

export function outSideGameBoard(headPosition) {
    return (
        headPosition.x < 1 || headPosition.y < 1 || headPosition.x > GRID_SIZE || headPosition.y > GRID_SIZE
    );
}