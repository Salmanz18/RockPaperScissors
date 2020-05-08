
const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select = document.getElementById('user_select');
const comp_select = document.getElementById('comp_select');
const winner = document.getElementById('winner');


const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

reset.addEventListener('click', () => {
    //Show the selection|Hide Main
    main.style.display = 'flex';
    selection.style.display = 'none';
});

function checkWinner() {
    const compChoice = pickRandomChoice();

    //Update The View
    updateSelection(user_select, userChoice);
    updateSelection(comp_select, compChoice);


    if (userChoice === compChoice) {
        //Draw
        winner.innerText = 'draw';
    } else if (
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        //User Win
        updateScore(1);
        winner.innerText = 'win';
    } else {
        //User Lose
        updateScore(-1);
        winner.innerText = 'lost';
    }

    //Show the selection|Hide Main

    main.style.display = 'none';
    selection.style.display = 'flex';
}


function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function updateSelection(selectionEl, choice) {
    //Class Reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-rock');
    selectionEl.classList.remove('btn-scissors');

    //Update the img
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}
