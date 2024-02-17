var wins = 0;
var ties = 0;
var loses = 0;

function playgame() {
    // This is to ask the player for their choice.
    var userChoice = prompt("Enter R for Rock, P for Paper, or S for Scissors").toUpperCase();

    if (userChoice !== 'R' && userChoice !== 'P' && userChoice !== 'S'){
        alert("Invalid Choice, Please Pick R, P or S!"); 
        return;
    }

    // This is for the computer to generate its choice.
    var choices = ['R', 'P', 'S'];
    var random = Math.floor(Math.random()*choices.length); // Math.random Returns a pseudo-random number between 0 and 1 and then multiplying that by the choices.length which in this case there are 3 choices.
    var computerChoice = choices[random];

    alert("Computer chose " + computerChoice);
    
    // This is how we will determine the outcome.
    if (userChoice === computerChoice) {
        ties++
        alert("Its a tie.");
    } else if (
        (userChoice === 'R' && computerChoice === 'S') || // || is "or"
        (userChoice === 'P' && computerChoice === 'R') || // || is "or"
        (userChoice === 'S' && computerChoice === 'P')
    ) {
        wins++;
        alert("You Win!");
    } else {
        loses++;
        alert("You Lose lmao.");
    }

    // This alert is to show the score.
    alert("Wins: " + wins + ", Ties: " + ties + ", Losses: " + loses);

    // This section is to let the user choose if they want to play again.
    if (confirm("Double or Nothin'")) {
        playgame();
    } else {
        alert("I figured as much.")
    }
 }

playgame()