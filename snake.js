import { getInputDirection } from "./input.js";

export let snakeSpeed = 2;  //this variable can regular the speed of game (the bigger the faster)
const snakeBody = [{x:11, y:11}];
let newSegment = 0;

export function update() {
    addSegment();    
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    });
}

// needs to controls grow behavior
// if snake eat food how many segments comes additional to the snake
export function expandSnake(amount){
    newSegment += amount;
    increaseSpeed();   
}

// this function return true if food has the same position
// like one of the snake peaces
// position - is a position to check 
// ignoreHead (boolean) - is true when we check for snakeIntersection
//            here we check that head position equals to one of body element position
//            but head is also a peace of body, and with the parameter we can ignore this
export function onSnake(position, ignoreHead = false){
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position);
    });
}

// return coordinate of snake head
export function getSnakeHead() {
    return snakeBody[0];
}

// check of collision with own body
export function snakeIntersection() {
    return onSnake(snakeBody[0], true);
}

function increaseSpeed() {
    if (snakeBody.length % 2 === 0) {
        snakeSpeed *= 10;
    }
}

// equals two points 
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

// function for growing of snake
// snake grows of EXPANSION_RATE from food module
function addSegment() {
    for(let i = 0; i < newSegment; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]});
    }

    // if you don't set to 0 it will grows infinite
    newSegment = 0;
}

