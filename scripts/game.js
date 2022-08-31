import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, snakeSpeed } from './snake.js';
import { Food } from './Food.js';
import { Score } from './Score.js';
import { Grid } from './Grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

const foodObj = new Food();
const scoreObj = new Score();

// write score line
scoreObj.setScoreLine();

// function for regular the speed of game
function main(currentTime) {
    if (gameOver) {
        scoreObj.saveScore();
        if (confirm('GAME OVER, press ok to restart the game.')) {
            // refresh the window
            window.location = '/';
        }
        return;
    }

    // update the animation on screen
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) {
        return;
    }

    lastRenderTime = currentTime;

    // game data
    update();

    // draw game objects
    draw();

    // check for game over
    checkGameOver();
}

window.requestAnimationFrame(main);

// function for update snake and food date
function update() {
    foodObj.update();
    updateSnake();
    checkGameOver();
}

// function for draw snake and food in game board
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    foodObj.draw(gameBoard);
}

function checkGameOver() {
    gameOver = Grid.outSideGameBoard(getSnakeHead()) || snakeIntersection();
}