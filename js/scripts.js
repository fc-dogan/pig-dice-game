//business logic
function Player(name) {
    this.name = name;
    this.score = 0;
}






//user interface
var player1 = "";
var player2 = "";

$(document).ready(function() {
    $("form").submit(function() {
        event.preventDefault();
        player1 = new Player($("input#player1").val());
        player2 = new Player($("input#player2").val());
        $("#start-screen").hide();
        $("#play-screen").show();
        console.log(player2.name);
        console.log(player1.name);
    });

});