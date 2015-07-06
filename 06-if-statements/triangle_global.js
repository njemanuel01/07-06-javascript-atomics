//Declare variables
var side1, side2, side3;

//Get user values for sides of triangles
side1 = parseFloat(prompt("Enter the first side of the triangle."));
side2 = parseFloat(prompt("Enter the first side of the triangle."));
side3 = parseFloat(prompt("Enter the first side of the triangle."));

//Test to see if sides make a triangle and outputs result
if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side1 + side3) <= side2)) {
  alert("Not a triangle.")
} else {
  alert("It's a  triangle")
}
