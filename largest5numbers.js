var num1 = 3;
var num2 = 4;
var num3 = 55;
var num4 = 66;
var num5 = 8;

if (num1 > num2) {
  if (num1 > num3) {
    if (num1 > num4) {
      if (num1 > num5) {
        console.log("number 1 is big");
      }
    }
  }
} else if (num2 > num3) {
  if (num2 > num4) {
    if (num2 > num5) {
      console.log("number 2 is big");
    }
  }
} else if (num3 > num4) {
  if (num3 > num5) {
    console.log("number 3 is big");
  }
} else if (num4 > num5) {
  console.log("number 4 is big");
} else {
  console.log("number 5 is big");
}
