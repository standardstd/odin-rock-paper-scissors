let humanScore = computerScore = 0;
let choice = ["paper", "scissors", "rock"]  //In natural order of winning. Exception are treated consequently.

// Computer's choice
function getComputerChoice() {
    return choice[Math.floor(Math.random() * 3)];
}

// Human choice
function getHumanChoice() {
    // let choice = ["paper", "scissors", "rock"] 
    let humanEntry;
    let text = `What is your choice:
                    * Rock
                    * Paper
                    * Scissors
    Please make a choice only between those three elements:  `

    do {
        humanEntry = prompt(text).toLowerCase();
    }
    while (choice.findIndex((data) => (data == humanEntry)) === -1);


    return humanEntry;
}

function playRound(humanChoice, computerChoice) {
    
    //Tie
    if ((choice.indexOf(humanChoice)) === (choice.indexOf(computerChoice))) {
        printRoundWinner("", humanChoice, computerChoice, 1);
        return;
    }
    //Tests if human win
    if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        printRoundWinner("win", humanChoice, computerChoice, 0);
        return;
    }

    if ((computerChoice === "paper") && (humanChoice === "rock")) {
        computerScore++;
        printRoundWinner("loose", computerChoice, humanChoice, 0);
        return;
    }

    if ((choice.indexOf(humanChoice)) > (choice.indexOf(computerChoice))) {
        humanScore++;
        printRoundWinner("win", humanChoice, computerChoice, 0);
        return;
    }
    
    //Computer win
    printRoundWinner("loose", computerChoice, humanChoice, 0);
    computerScore++;
    return;
}

function printRoundWinner (result, winner, looser, tie) {
    if(tie === 1) {
        console.log("No one win");
        
    }else{
        console.log(`You ${result}, ${winner} beats ${looser}  `);
    }
}


function playGame() {

    let round = 0;
    let result;
    while (round < 5) {
        const computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);
        const humanChoice = getHumanChoice();
        console.log("human: " + humanChoice);
        playRound(humanChoice, computerChoice);
        round++;
    }

    result = ` Human: ${humanScore} + Computer: ${computerScore}`
 
    if (humanScore > computerScore) {
        console.log ("You win the game!: " + result )
    } else if (computerScore > humanScore) {
        console.log ("You loose the game! " + result)
        
    } else {
        console.log ("No one win the game! " + result)
    }   
}

playGame();

