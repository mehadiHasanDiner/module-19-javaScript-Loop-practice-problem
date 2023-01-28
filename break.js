// for loop break
// for (var i = 1; i <= 20; i++) {
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
// }

// while loop break
// var roastGive = 0;
// while (roastGive < 7) {
//   console.log("Roast den, git item ansi");
//   roastGive++;
//   if (roastGive > 4) {
//     break;
//   }
// }

// var items = ["bottle", "mouse", "sunglass", "pen", "notebook"];

// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   if (item == "pen") {
//     break;
//   }
//   console.log(item);
// }

// Continue
var numbers = [45, 64, 23, 78, 90, 47, 12, 100, 45];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 80) {
    continue;
  }
  console.log(number);
}
