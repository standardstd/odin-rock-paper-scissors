// Computer's choice
function getComputerChoice() {
    let choice = [ "rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*3)]; 
}

// Human choice
function getHumanChoice() {
    let choice = [ "rock", "paper", "scissors"]
    let humanEntry;
    let text = `What is your choice:
                    0: Rock
                    1: Paper
                    2: Scissors
    Please make a choice between 0 and 2:  `

    do
    {
        humanEntry = prompt(text);
    }
    while(isNaN(humanEntry));
     
    return choice[parseInt(humanEntry)]; 
}



const computerChoice = getComputerChoice(); 
console.log(computerChoice);
const humanChoice = getHumanChoice();
console.log(humanChoice);  