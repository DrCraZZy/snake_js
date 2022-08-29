import { onSnake, expandSnake } from './snake.js';
import { Grid } from './Grid.js';
import { updateScore } from './score.js';

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
        updateScore();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition = null; 
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = Grid.randomGridPosition();
    }
    return newFoodPosition;
}