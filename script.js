// collect player's choice

$("button").click(function() {
    let playerChoice = $(this).attr('id');
    localStorage.setItem("choice", playerChoice)
    playGame();
})

// computer's choice

const choiceArr = ["rock", "paper", "scissors"]

let playGame = function() {
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    localStorage.setItem("computer", computerChoice)
}


// render choices to screen



// logic for winning



// render results to screen



// play again button



// store scores?