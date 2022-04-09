var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
image1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").src = image1;
document.querySelector(".img2").src = image2;

var msg;
if(randomNumber1>randomNumber2){
    msg = "Player 1 wins!!";
}
else if(randomNumber2>randomNumber1){
    msg = "Player 2 wins!!";
}
else{
    msg = "Draw !! ";
}

document.querySelector(".container h1").textContent = msg;
