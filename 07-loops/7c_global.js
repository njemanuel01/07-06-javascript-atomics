var count = 99;

while (count > 1) {
  console.log(count + " bottles of beer on the wall");
  console.log(count + " bottles of beer.")
  console.log("You take one off, pass it around.")
  count--;
  if (count > 1) {
    console.log(count + " bottles of beer on the wall.")
  }
}

console.log("1 bottle of beer on the wall.")
console.log("1 bottle of beer on the wall.")
console.log("1 bottle of beer.")
console.log("You take it off, pass it around.")
console.log("And now you pass out.")