const dice = document.getElementById('dice-btn');

function diceGame() {
	//DICE 1
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "img/" + "dice-" + randomDice + ".jpg";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);

	//DICE 2
	var randomDice2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "img/" + "dice-" + randomDice2 + ".jpg";
	var img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = " &#128519; Player 1 Win !";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Player 2 Win ! &#128519; ";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "&#128512; Draw! &#128512;";
	}
	else {
		document.querySelector("h1").innerHTML = "Something Error!"
	}
	dice.innerHTML = "Play Again"
}

const audio = new Audio();
audio.src = "music.mp3";