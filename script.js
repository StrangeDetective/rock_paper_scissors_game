function computerSelection() {
    let random = Math.random();
    if (random <= 0.3) {
        console.log('Rock')
        return 'Rock'}
    else if (random >= 0.6) {
        console.log('Paper')
        return 'Paper'}
    else {
        console.log('Scissors')
        return 'Scissors'}
}


const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = computerSelection();
    let result=""

    if (playerChoice === computerChoice){
        result='Draw'}
    else if (playerChoice == 'Rock' && computerChoice == 'Paper'){
            result='Earned a point, player!'}
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
            result='Earned a point, player!'}
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
            result='lost a point, player!'}

    else if (playerChoice == 'Paper' && computerChoice == 'Scissors'){
            result='lost a point, player!'}

    else if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
            result='lost a point, player!'}

    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
            result='Earned a point, player!'}

playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;

resultDisplay.classList.remove('greenText','redText');

switch(result){
    case 'Earned a point, player!':
        resultDisplay.classList.add('greenText');
        playerScore = playerScore + 1;
        playerScoreDisplay.textContent = playerScore;
        break;
    case 'lost a point, player!':
        resultDisplay.classList.add('redText');
        computerScore = computerScore + 1;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
};

