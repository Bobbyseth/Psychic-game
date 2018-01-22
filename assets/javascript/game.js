// Steps to make the Psychic Game.
// Purpose of the Psychic Game: The program will compare two values a-z (one the JS chooses and one the user chooses), if they match, then wins gets a point, if not losses gets a point. The program will keep track of the scores as well as what choices have been made by user.
// What's needed to make this happen:
  // An event that listens for key strokes and compares to a random choice of the JS.


//Define all my variabls here:
var ltrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var rand = ltrs[Math.floor(Math.random() * ltrs.length)];
var wins = 0;
var losses = 0;
var attempts = 0;
var guesses = [];
var CC = rand;
var UC = prompt("What letter am I thinking of?");
UC = UC.toLowerCase();
//console.log our variable to see what's happening.
console.log(CC);
console.log(UC);
console.log(attempts);
console.log(guesses);

//.innerHTML's to link variabls into the html
document.getElementsByClassName("wins").innerHTML = wins;
document.getElementsByClassName("losses").innerHTML = losses;
document.getElementsByClassName("attempts").innerHTML = attempts;
document.getElementsByClassName("guesses").innerHTML = guesses;

      if (UC !== CC)
          for (i = 0; i < 10; i++) {
            UC = prompt ("Sorry, try again"); // If incorrect guess, says so and asks for another.
            attempts++; // decrement attempts
            guesses.push(UC); // add UC to the guesses array
            if (UC == CC) {
              wins++; //+ to wins
              attempts = 0; //reset attempts to 10
              guesses = []; // reset guesses array to empty
              alert("You da winna!!!"); //alert you da winna
              break;
              }
              else if (attempts === 10) { //what happens if you get down to 0
              losses++; // add one to the losses
              alert("You da loossa!"); // alert you da loossa
              attempts = 0; // reset attempts to 10
              guesses = []; // reset guesses array to empty
              }
          }
