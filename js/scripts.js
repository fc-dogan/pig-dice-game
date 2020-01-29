//business logic
function Player(name) {
    this.name = name;
    this.score = 0;
}

Player.prototype.updateScore = function() {
    this.score += tempScore
}

function getNumber() {
   return Math.floor(Math.random() * 6 + 1);
}



//user interface
var player1 = "";
var player2 = "";
var tempScore = 0;

$(document).ready(function() {
   //click function for start screen
    $("form").submit(function() {
        event.preventDefault();
        player1 = new Player($("input#player1").val());
        player2 = new Player($("input#player2").val());
        $("#start-screen").hide();
        $("#play-screen").show();
    });
    //click function for roll
    $("#roll").click(function() {
        var currentRoll = getNumber();
        console.log(currentRoll);
        // if ( currentRoll == 1 ) {
        //     //switch the player
        //     tempScore = 0;
        // } else {
        //    return tempScore += currentRoll;
        // }
    });
    //click function for hold
});