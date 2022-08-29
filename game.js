import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, snakeSpeed } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { setScoreLine, saveScore } from './score.js';
import { Grid } from './Grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

// write score line
setScoreLine();

// function for regular the speed of game
function main(currentTime) {
    if (gameOver) {
        saveScore();
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
    updateFood();
    updateSnake();
    checkGameOver();
}

// function for draw snake and food in game board
function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkGameOver() {
    gameOver = Grid.outSideGameBoard(getSnakeHead()) || snakeIntersection();
}