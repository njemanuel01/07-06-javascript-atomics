//Declare variables
var age;

//Get user age
age = prompt("What is your age?");

//Test user age in conditionals. Output strings.
if (age >= 25) {
  alert("You can rent a car.");
} else if ((age >= 21 ) && (age < 25)) {
  alert("Please don't drink and drive.")
} else if ((age >=16 ) && (age < 21)) {
  alert("You're eligible for a driver's license.");
} else if ((age < 16) && (age >= 0 )) {
  alert("You can't drive yet, but you will be able to in a few years.");
} else if (age < 0) {
  alert("You're not even born yet.");
} else if (isNaN(age)) {
  alert("Sorry, that's not a number.");
}