var count = 1;
var start_int, end_int;

start_int = parseInt(prompt("What integer would you like to start with?"));
end_int = parseInt(prompt("What integer would you like to end with?"))

while (start_int < end_int) {
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

