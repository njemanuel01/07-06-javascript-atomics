//Declare variables
var side1, side2, side3;
var condition = 1;

while (condition == 1) {
  //Get user values for sides of triangles
  side1 = parseFloat(prompt("Enter the first side of the triangle."));
  side2 = parseFloat(prompt("Enter the first side of the triangle."));
  side3 = parseFloat(prompt("Enter the first side of the triangle."));

  //Test to see if sides make a triangle and outputs result
  if ((isNaN(side1)) || (isNaN(side2)) || (isNaN(side3))) {
    alert("Invalid entry. Must enter numbers.")
  } else if ((side1 < 0) || (side2 < 0) || (side3 < 0)) {
    alert("Sides must have a positive length.")
  } else {
    if (((side1 + side2) <= side3) || ((side2 + side3) <= side1) || ((side1 + side3) <= side2)) {
      alert("Not a triangle.");
    } else {
      alert("It's a  triangle");
      condition = 0;
    }
  }
}

