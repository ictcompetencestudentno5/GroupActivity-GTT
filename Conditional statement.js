let difficulty = "normal";


// convert the number to string
function numberChoice(num) {
    if (num === 1) return "Rock";
    if (num === 2) return "Paper";
    if (num === 3) return "Scissors";
    return "Invalid";
}

// Enemy pick based sa difficulty
function enemyPlay(playerNum) {
    if (difficulty === "normal") {
        // 70% chance enemy will lose
        if (Math.random() < 0.7) {
            return playerNum === 1 ? 3 : playerNum === 2 ? 1 : 2;
        }
        return Math.floor(Math.random() * 3) + 1;
    }

    if (difficulty === "hard") {
        // Enemy always wins
        return playerNum === 1 ? 2 : playerNum === 2 ? 3 : 1;
    }

    // Easy mode: random choice
    return Math.floor(Math.random() * 3) + 1;
}

// Determine winner 
function getResult(playerChoice, enemyChoice) {
    if (playerChoice === "Invalid") {
        return { text: "Invalid number! Please enter 1, 2, or 3.", color: "orange" };
    }
    if (playerChoice === enemyChoice) {
        return { text: "It's a draw!", color: "gray" };
    }
    
    const wins = [
        playerChoice === "Rock" && enemyChoice === "Scissors",
        playerChoice === "Paper" && enemyChoice === "Rock",
        playerChoice === "Scissors" && enemyChoice === "Paper"
    ];
    
    if (wins.some(w => w)) {
        return { text: "You win!", color: "green" };
    }
    return { text: "You lost!", color: "red" };
}

// Set difficulty from dropdown
function setDifficulty() {
    difficulty = document.getElementById("difficultySelect").value;
    const messages = {
        "easy": "Difficulty: EASY (random)",
        "normal": "Difficulty: NORMAL (70% win rate)",
        "hard": "Difficulty: HARD (enemy always wins)"
    };
    document.getElementById("difficultyText").innerHTML = messages[difficulty];
}

// Main game function
function playGame() {
    const inputEl = document.getElementById("choiceInput");
    let playerNum = parseInt(inputEl.value);

    // pag wrong eto lalabas
    if (isNaN(playerNum)) {
        document.getElementById("result").innerHTML = "Please enter a number (1-3).";
        document.getElementById("result").style.color = "crimson";
        inputEl.focus();
        return; // stop until user enters a valid number
    }

    if (playerNum < 1) {
        // If too low then eto lalabas
        inputEl.value = 1;
        document.getElementById("result").innerHTML = "Value too low — set to 1. Press Play again.";
        document.getElementById("result").style.color = "crimson";
        inputEl.focus();
        return;
    }

    if (playerNum > 3) {
        // If too high then eto lalabas
        document.getElementById("result").innerHTML = "Value too high — enter 1, 2, or 3.";
        document.getElementById("result").style.color = "crimson";
        inputEl.focus();
        return;
    }

    const enemyNum = enemyPlay(playerNum);
    const playerChoice = numberChoice(playerNum);
    const enemyChoice = numberChoice(enemyNum);
    const gameResult = getResult(playerChoice, enemyChoice);

    // Disable Play button while waiting for result
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.disabled = true;

    // Show waiting messages
    document.getElementById("waitTime").innerHTML = "enemy is thinking.";

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking..";
    }, 700); // 0.7 sec after start

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking...";
    }, 800); 
    
    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking....";
    }, 900);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking.....";
    }, 1000);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking........";
    }, 1200);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking...........";
    }, 1300);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking...................";
    }, 1400);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking......................................";
    }, 1500);
    
    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking............................................................................";
    }, 1600);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking.......................................................................................................................................................";
    }, 1700);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking..................................................................................................................................................................................................................................................";
    }, 1800);

    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "enemy is thinking..................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................";
    }, 1900);


    // Show results
    setTimeout(() => {
        document.getElementById("waitTime").innerHTML = "";
        document.getElementById("PlEnResult").innerHTML = 
            "You chose: " + playerChoice + "<br>Enemy chose: " + enemyChoice;

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "Result: " + gameResult.text;
        resultDiv.style.color = gameResult.color;

        // Re-enable Play button once the result is shown
        if (playBtn) playBtn.disabled = false;

        if (gameResult.text !== "It's a draw!" && gameResult.text !== "Invalid number! Please enter 1, 2, or 3.") {
            setTimeout(() => {
                inputEl.value = "";
                document.getElementById("PlEnResult").innerHTML = "";
                document.getElementById("result").innerHTML = "";
            }, 5000); // 5 sec delay b4 reset
        }
    }, 3000);// 3 sec delay 
}
