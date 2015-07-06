//Declare variables
var age, age2;

//Get user age
age = prompt("What is your age?");

//Test user age in conditionals. Output strings.
if (age >= 25) {
  alert("You can rent a car.");
}

if (age >= 21 ) {
  alert("Please don't drink and drive.")
}

if (age >=16 ) {
  alert("You're eligible for a driver's license.");
}

if ((age < 16) && (age >= 0 )) {
  alert("You can't drive yet, but you will be able to in a few years.");
}

if (age < 0) {
  alert("You're not even born yet.");
}

if (isNaN(age)) {
  alert("Sorry, that's not a number.");
}