// string type variable
var bottle = "water";
var bottleColor = "yellow";

// number type variable
var sunglassPrice = 120;
var penColor = "blue";

// boolean type variable
var isExpensive = true;

var tableItems = ["bottle", "pen", "mouse", "sunglass", "paper"];

var item3 = tableItems[3];
console.log(item3);
tableItems[4] = "notebook";
var mouseIndex = tableItems.indexOf("mouse");
console.log(tableItems);
console.log(mouseIndex);

// conditionals
if (tableItems.length > 6) {
  console.log(tableItems);
} else if (tableItems[4] == "notebook") {
  console.log(tableItems);
} else {
  console.log("na item nai");
}
