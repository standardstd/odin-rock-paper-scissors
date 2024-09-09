function getComputerChoice() {
    let choice = [ "rock", "paper", "scissors"]
    return choice[Math.floor(Math.random()*3)]; 
}

x = getComputerChoice();
console.log(x);