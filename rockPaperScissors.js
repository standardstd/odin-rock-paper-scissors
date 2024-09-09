let humanScore, computerScore = 0;
let choice = [ "rock", "paper", "scissors"]

// Computer's choice
function getComputerChoice() {
    return choice[Math.floor(Math.random()*3)]; 
}

// Human choice
function getHumanChoice() {
    let choice = [ "rock", "paper", "scissors"]
    let humanEntry;
    let text = `What is your choice:
                    * Rock
                    * Paper
                    * Scissors
    Please make a choice only between those three elements:  `

    do
    {
        humanEntry = prompt(text).toLowerCase();
    }
    while(choice.findIndex((data) => (data == humanEntry)) === -1);
     
    return humanEntry; 
}



function playRound(humanChoice, computerChoice) {
    if(humanChoice > computerChoice) return;
}




const computerChoice = getComputerChoice(); 
console.log(computerChoice);
const humanChoice = getHumanChoice();
console.log(humanChoice);  