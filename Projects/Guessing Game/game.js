var secretNumber= 7;
var string = prompt("guess the number");
var guess = Number(string);
if(guess === secretNumber) {
    alert("you got it right");
}
else if(guess > secretNumber) {
    alert("too high, try again");
} 
else {
    alert("too low, try again");
}