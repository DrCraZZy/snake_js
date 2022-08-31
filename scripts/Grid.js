export class Grid {

    static GRID_SIZE = 21;

    static randomGridPosition() {
        return {
            x: Math.floor(Math.random() * Grid.GRID_SIZE) + 1,
            y: Math.floor(Math.random() * Grid.GRID_SIZE) + 1
        };
    }

    static outSideGameBoard(headPosition) {
        return (
            headPosition.x < 1 || headPosition.y < 1 || headPosition.x > Grid.GRID_SIZE || headPosition.y > Grid.GRID_SIZE
        );
    }
}