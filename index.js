var number = Math.floor(Math.random() * 6) + 1;
var dice = "dice" + number + ".png";
var source = "images/" + dice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", source);

var number2 = Math.floor(Math.random() * 6) + 1;
var source2 = "images/dice" + number2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", source2);

if (number > number2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (number2 > number) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
