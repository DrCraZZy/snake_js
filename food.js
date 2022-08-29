import { onSnake, expandSnake } from './snake.js';
import { Grid } from './Grid.js';
import { updateScore } from './score.js';

export class Food {

    static EXPANSION_RATE = 1;

    constructor() {
        this._food = this.#getRandomFoodPosition();
    }

    update() {
        if(onSnake( this._food)) {
            expandSnake(Food.EXPANSION_RATE);
            this._food = this.#getRandomFoodPosition();
            updateScore();
        }
    }

    draw(gameBoard) {
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart =  this._food.y;
        foodElement.style.gridColumnStart =  this._food.x;
        foodElement.classList.add('food');
        gameBoard.appendChild(foodElement);
    }

    #getRandomFoodPosition() {
        let newFoodPosition = null; 
        while(newFoodPosition == null || onSnake(newFoodPosition)) {
            newFoodPosition = Grid.randomGridPosition();
        }
        return newFoodPosition;
    }
}