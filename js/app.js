$(document).ready(function() {

var counter = 1;
var newButton = $('a.new');
// array of guesses.
var previousGuesses = [];
// secretNumber for the game
var secretNumber = Math.floor((Math.random() * 100) + 1);


    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

			// First starting
     newGame();
    //event handlers
     newButton.click(newGame);

		 $("#guessButton").on('click', function(e) {
			 e.preventDefault();
         if (($("#userGuess").val() > 0) && ($("#userGuess").val() < 100) && ($("#userGuess").val() !== null)  && !$.isNumeric()){
			 guessCount();
			 trackGuessToList();
			 feedback(secretNumber);
      }
      else {
        $("#feedback").html("Please enter a number between 1 and 100.")
      }
     })

    // resets game.
    function newGame() {

        //clear out number of guesses
        $("#count").html("0");
				counter = "1";

       // clears out text box
				$(".text").val("");

        // clear out numbers guessed.
        $(".guessBox li").remove();

        $("#feedback").html("Make your Guess!");

				// secretNumber for the game
				var secretNumber = Math.floor((Math.random() * 100) + 1);

    }


    //takes users guess and tells how close you are to correct number
    function feedback(secretNumber) {
      if (($("#userGuess").val() > 0) && ($("#userGuess").val() < 100) && ($("#userGuess").val() !== null)  && !$.isNumeric()){
        if ($("#userGuess").val() == secretNumber){
          winner();
        }
          else if($("#userGuess").val() > secretNumber){
            $("#feedback").html("Too high!")
          }
          else if ($("#userGuess").val() < secretNumber){
            $("#feedback").html("Too low!")
          }
      }
      else {
        $("#feedback").html("Please enter a number between 1 and 100.")
      }

    }

		function winner(){
			$("#feedback").html(" You guessed it! Click new game to play again!")
		}

		//keep track of the users past guesses
		function trackGuessToList(){
			var guess = $("#userGuess").val();
  	$("#guessList").append("<li>" + guess + "</li>");
}



		//keep track of guess count
		function guessCount(){
        	$("#count").html(counter++);
		}




});
