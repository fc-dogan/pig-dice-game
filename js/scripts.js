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
var turn = 1;

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
        $("#current-roll").text(currentRoll);
        if (currentRoll == 1) {
            if (turn == 1) {
                turn = 0;
                $("#player1-turn").removeClass("your-turn");
                $("#player2-turn").addClass("your-turn");
            } else{
                turn = 1;
                $("#player2-turn").removeClass("your-turn");
                $("#player1-turn").addClass("your-turn");
            }
            tempScore = 0;
            $("#temporary-score").text(tempScore);
        } else {
           tempScore += currentRoll;
           $("#temporary-score").text(tempScore);
        }
        console.log(tempScore);
    });
    //click function for hold
    $("#hold-button").click(function() {
        if (turn == 1) {
            player1.updateScore();
            $("#player1-score").text(player1.score);
                if ( player1.score >= 100){
                    $("#play-screen").hide();
                    $("#winner").text(player1.name);
                    $("#win-screen").show();
                } else { turn = 0;
                        $("#player1-turn").removeClass("your-turn");
                        $("#player2-turn").addClass("your-turn");
                        tempScore = 0;
                        $("#temporary-score").text(tempScore);
                        $("#current-roll").text(0);
                    }

        } else {
            player2.score += tempScore;
            $("#player2-score").text(player2.score);
                if (player2.score >= 100){
                    $("#play-screen").hide();
                    $("#winner").text(player2.name);
                    $("#win-screen").show();
                } else { 
                    turn = 1;
                    $("#player2-turn").removeClass("your-turn");
                    $("#player1-turn").addClass("your-turn");
                    tempScore = 0;
                    $("#temporary-score").text(tempScore);
                    $("#current-roll").text(0);
                    }
            
        }

    });

});