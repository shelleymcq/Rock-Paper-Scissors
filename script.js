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
    renderChoices();
}

// render choices to screen

let renderChoices = function() {
    const player = $("#player-choice").text(localStorage.getItem("choice"))
    const computer = $("#computer-choice").text(localStorage.getItem("computer"))
    // logic for winning
    if((localStorage.getItem("choice")) === (localStorage.getItem("computer"))) {
        console.log("tie");
    } else if (((localStorage.getItem("choice")) === "rock") && ((localStorage.getItem("computer")) === "scissors")) {
        console.log("win");
    } else if (((localStorage.getItem("choice")) === "paper") && ((localStorage.getItem("computer")) === "rock")) {
        console.log("win");
    } else if (((localStorage.getItem("choice")) === "scissors") && ((localStorage.getItem("computer")) === "paper")) {
        console.log("win");
    } else {
        console.log("lose");
    }
    
}





// render results to screen
// remove class 'is-hidden'
// add text "You Win!" or "Computer Wins!"



// play again button/clear screen



// store scores?