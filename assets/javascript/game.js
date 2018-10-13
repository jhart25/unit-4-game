$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 101 + 19);
    $("#randomNumber").text(randomNumber);
    console.log(randomNumber);

    var one = Math.floor(Math.random() * 11 + 1);
    var two = Math.floor(Math.random() * 11 + 1);
    var three = Math.floor(Math.random() * 11 + 1);
    var four = Math.floor(Math.random() * 11 + 1);

    var playerScore = 0;
    var wins = 0;
    var losses = 0;
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#playerScore").text(playerScore);

    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#randomNumber").text(randomNumber);
        one = Math.floor(Math.random() * 11 + 1);
        two = Math.floor(Math.random() * 11 + 1);
        three = Math.floor(Math.random() * 11 + 1);
        four = Math.floor(Math.random() * 11 + 1);
        playerScore = 0;
        $("#playerScore").text(playerScore);
    }

    function winner() {
        wins ++;
        $("#wins").text("Wins: " + wins);
        alert("You won!!!");
        reset();
    }
    function loser() {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("You lose, nerd!");
        reset();
    }

    $("#frank").on("click", function() {
        playerScore = playerScore + one;
        $("#playerScore").text(playerScore);
        
        if (playerScore === randomNumber) {
            winner();
        } else if (playerScore > randomNumber) {
            loser();
        }
    });
})