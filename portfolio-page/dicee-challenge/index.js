//array of dice image file names
var diceImages = [
"images/dice1.png",
"images/dice2.png",
"images/dice3.png",
"images/dice4.png",
"images/dice5.png",
"images/dice6.png"];

//This functions generates a random number. The range of numbers is based on the length of the diceImages array.
function generateRandomNumber() {
    var randNum = [Math.floor(Math.random()*diceImages.length)];
    return randNum;
}

//These variables store the random number generated in the functions and assign that number to an index in the array. 
var grabDiceImageP1 = diceImages[generateRandomNumber()];
var grabDiceImageP2 = diceImages[generateRandomNumber()];

//Here I use the DOM to insert the new dice images each time the page is refreshed. 
document.querySelector(".img1").setAttribute("src", grabDiceImageP1);
document.querySelector(".img2").setAttribute("src", grabDiceImageP2);

//The conditional statement that determines which message to display based on the the index of the dice image. 
if (grabDiceImageP1 == grabDiceImageP2){
    document.querySelector("h1").innerHTML = "Draw!"
}else if (grabDiceImageP1 > grabDiceImageP2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
};