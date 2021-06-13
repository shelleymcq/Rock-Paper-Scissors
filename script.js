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
        $("#results").removeClass("is-hidden");
        $("#results").text("Tie!")
    } else if (((localStorage.getItem("choice")) === "rock") && ((localStorage.getItem("computer")) === "scissors")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
    } else if (((localStorage.getItem("choice")) === "paper") && ((localStorage.getItem("computer")) === "rock")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
    } else if (((localStorage.getItem("choice")) === "scissors") && ((localStorage.getItem("computer")) === "paper")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
    } else {
        $("#results").removeClass("is-hidden");
        $("#results").text("Computer Wins!")
    }
    
}

// play again button/clear screen



// store scores?