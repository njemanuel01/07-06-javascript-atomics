//Declar and assign variables
var userNum;
var secretNum = 23;

//Get user number
userNum = prompt("What is your number?");

//Test equality and return a string
if (userNum == secretNum) {
  alert("Correct.");
}
else {
  alert("Incorrect. The number was " + secretNum);
}

