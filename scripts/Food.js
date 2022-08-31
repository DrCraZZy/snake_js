import { onSnake, expandSnake } from './snake.js';
import { Grid } from './Grid.js';
import { Score } from './Score.js';

export class Food {

    static EXPANSION_RATE = 1;

    constructor() {
        this._food = this.#getRandomFoodPosition();
        this._scoreObj = new Score();
    }

    update() {
        if(onSnake( this._food)) {            
            expandSnake(Food.EXPANSION_RATE);
            this._food = this.#getRandomFoodPosition();
            this._scoreObj.updateScore();
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