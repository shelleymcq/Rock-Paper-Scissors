// collect player's choice

$(".play-button").click(function() {
    let playerChoice = $(this).attr('id');
    localStorage.setItem("choice", playerChoice)
    $(".play-button").attr("disabled", true)
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
    $("#player-choice").text(localStorage.getItem("choice"))
    $("#computer-choice").text(localStorage.getItem("computer"))
    $("#show").removeClass("is-hidden");
    // logic for winning
    if((localStorage.getItem("choice")) === (localStorage.getItem("computer"))) {
        $("#results").removeClass("is-hidden");
        $("#results").text("Tie!")
        $("#play-again").removeClass("is-hidden");
    } else if (((localStorage.getItem("choice")) === "rock") && ((localStorage.getItem("computer")) === "scissors")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
        $("#play-again").removeClass("is-hidden");
    } else if (((localStorage.getItem("choice")) === "paper") && ((localStorage.getItem("computer")) === "rock")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
        $("#play-again").removeClass("is-hidden");
    } else if (((localStorage.getItem("choice")) === "scissors") && ((localStorage.getItem("computer")) === "paper")) {
        $("#results").removeClass("is-hidden");
        $("#results").text("You Win!")
        $("#play-again").removeClass("is-hidden");
    } else {
        $("#results").removeClass("is-hidden");
        $("#results").text("Computer Wins!")
        $("#play-again").removeClass("is-hidden");
    }
}

$("#play-again").click(function() {
    location.reload();
})
