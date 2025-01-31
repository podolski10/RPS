function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
return choices[parseInt(Math.random() + 1)]; 
}

function getHumanChoice(){
    let choice = prompt("Rock , Paper or scissors ? : ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++;
    }
    else if(humanChoice === 'paper' && computerChoice ==='rock'){
        humanScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice ==='paper'){
        humanScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice ==='rock'){
        computerScore++;
    }
    else if(humanChoice === 'paper' && computerChoice ==='scissors'){
        computerScore++;
    }
    else if(humanChoice === 'rock' && computerChoice ==='paper'){
        computerScore++;
    }
    else if(humanChoice === 'rock' && computerChoice ==='scissors'){
    humanScore++;
    }
    if(humanScore > computerScore){
        console.log(`You lost ! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        console.log(`You lost ! ${humanChoice} beats ${computerChoice}`);
    } 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);