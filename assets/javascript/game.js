
var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

var randomLetter = allLetters[Math.floor(Math.random() * allLetters.length)];

var wins = 0;

var guessesLeft = 10;

var guessesSoFar = 0;

var losses = 0;


	// function addOne (num){
	// 	return num + 1 
	// }
	// var answer = addOne
	// answer(1)

	function counter(event){

		// var keyUserPressed = event.key;

		// if () {
		// 	document.getElementById("guessesLeft").innerText= 10-1 ;
		// }

		// if (counter == 10){
		// 	counter = 0;
			

		// }

		// TODO: see if key matches randomLetter
			// if yes, then win + 1
				// alert("you won")
		if (randomLetter == event.key){
			wins += 1;
			alert("you won")
		}
			
			// if no, then guesses left - 1, guesses so far + 1
		if (randomLetter !== event.key){
			guessesLeft-- ;
			guessesSoFar++ ;



		}
			// check if guesses left <= 0, if yes then lose + 1
			// reset everything

		if (guessesLeft <=0){
			losses++ ;
			guessesLeft = 10;
			guessesSoFar = 0;

		}

	document.getElementById("wins").innerText= wins ;
	// document.getElementById("losses").innerText= 0;
	document.getElementById("losses").innerText= losses ;
	// document.getElementById("guessesLeft").innerText= ;
	document.getElementById("guessesleft").innerText= guessesLeft;
	// document.getElementById("guessesSoFar").innerText= ;
	document.getElementById("your guesses so far").innerText= guessesSoFar;

	}

	
	// document.getElementById("wins").innerText= 1;
	// document.getElementById("guessesLeft").innerText= ;



	// assign *our* function to keypress
	document.onkeyup = counter;
