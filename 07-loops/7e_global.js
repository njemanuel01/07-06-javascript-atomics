//Basic for loop
var x;

for (x = 1; x < 11; x++) {
  console.log(x);
}

//Basic for loop with input
var count, start_int, end_int, increment;

start_int = parseInt(prompt("What number do you want to start at?"));
end_int = parseInt(prompt("What number do you want to end with?"));
increment = parseInt(prompt("By how much do you want to increment?"));

for (count = start_int; count <= end_int; count += increment) {
  console.log(start_int);
  start_int += increment;
}

//Long for loop
var count;

for (count = 99; count > 1; count--) {
  console.log(count + " bottles of beer on the wall");
  console.log(count + " bottles of beer.")
  console.log("You take one off, pass it around.")
  if (count > 1) {
    console.log(count + " bottles of beer on the wall.")
  }
}

console.log("1 bottle of beer on the wall.")
console.log("1 bottle of beer on the wall.")
console.log("1 bottle of beer.")
console.log("You take it off, pass it around.")
console.log("And now you pass out.")


//Fizz for loop
var count;
var start_int, end_int;

start_int = parseInt(prompt("What integer would you like to start with?"));
end_int = parseInt(prompt("What integer would you like to end with?"))

for (count = start_int; count <= end_int; count++) {
  if ((start_int % 15) == 0) {
    console.log("FizzBuzz");
  } else if ((start_int % 5) == 0){
    console.log("Buzz");
  } else if ((start_int % 3) == 0) {
    console.log("Fizz");
  } else {
    console.log(start_int);
  }
  start_int++;
}

