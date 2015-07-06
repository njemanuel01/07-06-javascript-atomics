//Declare and assign variables
var user_password;
var password = "password";

//Get user password
user_password = prompt("What is the password?");

//Test equality and output string
if (user_password == password) {
  alert("Correct.");
}
else {
  alert("Incorrect. The password is actuall " + password);
}