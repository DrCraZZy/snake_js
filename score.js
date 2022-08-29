export class Score {

    static score = 0;
    static highScore = Score.getHighScore();
    static scoreElement = document.getElementById('score');
    

    updateScore() {
        Score.score += 1;
        this.setScoreLine();
    }

    saveScore() {
        if (Score.score > Score.highScore) {
            localStorage.setItem("snakeHighScore", `${Score.score}`);
        }
    }
    
    // set the line with score and high score in top of game board
    setScoreLine() {
        let scoreElementText = `Your score: ${Score.score}`;
        if (Score.highScore > 0) {
            scoreElementText += `  | High score: ${Score.highScore}`
        }
        Score.scoreElement.innerHTML = scoreElementText;
    }

    static getHighScore() {
        // + is cast to number
        let highScore = +localStorage.getItem("snakeHighScore");
        return highScore === null ? 0 : highScore;
    }

}