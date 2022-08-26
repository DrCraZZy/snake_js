let score = 0;
let highScore = getHighScore();
const scoreElement = document.getElementById('score');

export function updateScore() {
    score += 1;
    setScoreLine();
}

export function saveScore() {
    if (score > highScore) {
        localStorage.setItem("snakeHighScore", `${score}`);
    }
}

function getHighScore() {
    // + is cast to number
    let highScore = +localStorage.getItem("snakeHighScore");
     return highScore === null ? 0 : highScore;
}

// set the line with score and high score in top of game board
export function setScoreLine() {
    let scoreElementText = `Your score: ${score}`;
    if (highScore > 0) {
        scoreElementText += `  | High score: ${highScore}`
    }
    scoreElement.innerHTML = scoreElementText;
}

