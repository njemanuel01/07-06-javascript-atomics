var start_int, end_int, increment;

start_int = parseInt(prompt("What number do you want to start at?"));
end_int = parseInt(prompt("What number do you want to end with?"));
increment = parseInt(prompt("By how much do you want to increment?"));

while (start_int <= end_int) {
  console.log(start_int);
  start_int += increment;
}