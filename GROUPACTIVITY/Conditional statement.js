function numberChoice(num) {
    if (num === 1) return "Rock";
    else if (num === 2) return "Paper";
    else if (num === 3) return "Scissors";
    else return "Invalid";
}

function playGame() {
    let playerNum = parseInt(document.getElementById("choiceInput").value);
    let enemyNum = Math.floor(Math.random() * 3) + 1;

    let playerChoice = numberChoice(playerNum);
    let enemyChoice = numberChoice(enemyNum);

    let result = "";
    let color = ""; 
    

    if (playerChoice === "Invalid") {
        result = "Invalid number! Please enter 1, 2, or 3.";
        color = "orange"; 
    } else if (playerChoice === enemyChoice) {
        result = "It's a draw!";
        color = "gray"; 
    } else if (
        (playerChoice === "Rock" && enemyChoice === "Scissors") ||
        (playerChoice === "Paper" && enemyChoice === "Rock") ||
        (playerChoice === "Scissors" && enemyChoice === "Paper")
    ) {
        result = "You win!";
        color = "green"; 
    } else {
        result = "You lost!";
        color = "red"; 
    }

    const Result = document.getElementById("PlEnResult");
    Result.innerHTML = "you choose" + playerChoice + "<br>" +
    "enemy choose" + enemyChoice;


    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Result: " + result;
    

    resultDiv.style.color = color;
}
