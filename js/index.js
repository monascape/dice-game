var randomNumber1 = Math.floor(Math.random() * 6) + 1; //number from 1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png" ; //chooses the image for the first image

var image1 = document.querySelectorAll("img")[0]; //selects the first image with the tag "img"

image1.setAttribute("src", randomImageSource); //sets the image to the right dice on p1

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //number from 1-6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png" ; //chooses the image for the second image

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //sets the image to the right dice on p2

//if player 1 wins
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} //if player 2 wins
else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} //else it's a draw
else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}

