let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
 return Math.round(Math.random() * 10)
};

function compareGuesses(human, computer, target){
  let humanAndTarget = human > target? human - target :  target - human;
  let computerAndTarget = computer > target? computer - target : target - computer;
  return humanAndTarget >= computerAndTarget
}

function updateScore(param){
  if(param === 'human') ++humanScore;
  else computerScore++;
}

function advanceRound(){
  currentRoundNumber++;
}