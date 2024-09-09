// Computer's choice
function getComputerChoice() {
    let choice = [ "rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*3)]; 
}

// Human choice
function getHumanChoice() {
    let choice = [ "rock", "paper", "scissors"]
    let text = `What is your choice:
                    0: Rock
                    1: Paper
                    2: Scissors
    Please make a choice between 0 and 2:  `

    let humanEntry = parseInt(prompt(text));
    return choice[humanEntry]; 
}



let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice); 