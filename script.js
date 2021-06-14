// collect player's choice on click and disable buttons
$(".play-button").click(function() {
    let playerChoice = $(this).attr('id');
    localStorage.setItem("choice", playerChoice)
    $(".play-button").attr("disabled", true)
    playGame();
})

// make computer's random choice
const choiceArr = ["rock", "paper", "scissors"]

let playGame = function() {
    let computerChoice = choiceArr[Math.floor(Math.random()*choiceArr.length)];
    localStorage.setItem("computer", computerChoice)
    renderChoice();
}

// render computer's choice to screen, determine winner, and display play again button
let renderChoice = function() {
    $("#computer-choice").text("Computer chose " + localStorage.getItem("computer"));
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

// refresh page on play again click
$("#play-again").click(function() {
    location.reload();
})

// go further:
// store and display scores for session
// input initials and display history of scores