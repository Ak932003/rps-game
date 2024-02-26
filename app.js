let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score')
const compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const msgStyle = () => {
    msg.style.backgroundColor = '#fff';
    msg.style.color = '#00f'
}

const drawGame = () =>{
    msg.innerText = 'Game was Draw, Play again...';
    document.body.style.backgroundColor = '#ff0';
    msgStyle();
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        document.body.style.backgroundColor = '#0f0';
        msgStyle();
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        document.body.style.backgroundColor = '#f0f';
        msgStyle();
    }
}

const playGame = (userChoice) => {
    // generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock'){
            // scissor, paper
            userWin = compChoice === 'paper' ? false : true;
        } else if(userChoice === 'paper'){
            // scissors, rock
            userWin = compChoice === 'scissors' ? false : true;
        }else {
            // rock , paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        playGame(userChoice);
    })
})

