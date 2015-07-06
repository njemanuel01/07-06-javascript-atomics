//Declare variables
var input_1, input_2, input_3;
var int_1, int_2, int_3;
var sum, difference, product, quotient, power, absolute, max_int;
var test, test_int;

//Get input for the three numbers
input_1 = prompt("Enter your first number:");
input_2 = prompt("Enter your second number:");
input_3 = prompt("Enter your third number:");
test = "404 Error";

//Turn input into integers
int_1 = parseInt(input_1);
int_2 = parseInt(input_2);
int_3 = parseInt(input_3);
test_int = parseInt(test);

//Do math calculations
sum = int_1 + int_2 + int_3;
difference = int_1 - int_2 - int_3;
product = int_1 * int_2 * int_3;
quotient = int_1 / int_2;
power = Math.pow(int_2, int_3)
absolute = Math.abs(int_1)
int_1++;
int_2--;
int_1 += 2;

//Output to alert
alert("Sum is " + sum);
alert("Difference is " + difference);
alert("Product is " + product);
alert("Quotient is " + quotient);
alert("Increment is " + int_1);
alert("Decrement is " + int_2);
alert(int_2 + 1 + " to the " + int_3 + " is " + power)
alert("The absolute value of " + (int_1 - 3) + " is " + absolute)
alert(Math.max(1,2,3,4,5))
alert(test_int);

//Output to console
console.log("Sum is " + sum);
console.log("Difference is " + difference);
console.log("Product is " + product);
console.log("Quotient is " + quotient);
console.log("Increment is " + int_1);
console.log("Decrement is " + int_2);
console.log(test_int);





