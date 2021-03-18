var dice1 = document.querySelector(".player1Dice");
var dice2 = document.querySelector(".player2Dice");
var heading = document.querySelector(".heading");

function rollDice() {
    var d1 = Math.floor(Math.random() * 6 + 1);
    var d2 = Math.floor(Math.random() * 6 + 1);
    if (d1 > d2) {
        heading.textContent = "Player 1 Won! try again?";
    } else if (d2 > d1) {
        heading.textContent = "Player 2 Won! try again?";
    } else {
        heading.textContent = "Its a Draw! try again?";
    }
    dice1.src = "images/dice" + d1 + ".png";
    dice2.src = "images/dice" + d2 + ".png";
}