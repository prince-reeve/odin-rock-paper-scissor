console.log("is it working?");
/*
    problem:
    rock,paper, scissor - game
    1. rules
        rock beats scissor, lose to paper
        paper beats rock, lose to scissor
        scissor beats paper, lose to rock.
    
    2. Understanding the problem
        i) this game is between user and a computer.
        ii) user enters value out of three (rock, paper, scissor)
        iii) computer generates value out of three (rock, paper, scissor)
        iv) table of winner and loser decided by rules mentioned above.

    3. Plan
        i) does it have user interface ? Yes, but not now. now the results are printed inside console.
        ii) inputs
            There are two inputs . one is from user using prompt, another is from computer using  getComputerChoice function.
            the inputs will be strings, (rock, paper, scissor)
        iii) the desired output will be winner. (user or computer out of 5) 
-----------------------------------------------------------------------------------------------------------------------------------
function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
-------------------------------------------------------------------------------------------------------------------------------
    4. Pseudo code
        i) write a function with two parameters (playerSelection, computerSelection) for a single round. it returns string that states, who beats who.(eg: rock beats scissor, you win or computer win).
        ii) 
         

*/
function playRound(){
    let playerSelection = prompt("Enter anyone out of three\nRock, Paper, Scissor");
    let computerSelection = prompt("Enter anyone out of three\nRock, Paper, Scissor");



    if (playerSelection === "rock" && computerSelection === "rock"){
        console.log(" the game is tie.");

    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("paper beats rock.Computer wins");
    }else if (playerSelection === "rock" && computerSelection === "scissor"){
        console.log("rock beats scissor. You win.");
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("paper beats rock. You win");
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("The game is tie");
    }else if(playerSelection === "paper" && computerSelection === "scissor"){
        console.log("scissor beats paper. Computer wins.");
    }else if (playerSelection === "scissor" && computerSelection === "rock"){
        console.log("rock beats scissor. Computer wins.");
    }else if(playerSelection === "scissor" && computerSelection === "paper"){
        console.log("scissor beats paper. You win");
    }else if (playerSelection === "scissor" && computerSelection === "scissor"){
        console.log("the game is tie.")
    }else{
        console.log("enter a valid prompt");
    }
}
playRound();