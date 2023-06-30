// // for loop break
// for (var i = 0; i <= 20; i++) {
//   console.log(i);
//   if (i > 10) {
//     break;
//   }
// }

// // while loop break
// var roastGiven = 0;
// while (roastGiven < 10) {
//   console.log("roast den, gift item ansi");
//   roastGiven++;
//   if (roastGiven > 4) {
//     break;
//   }
// }

// //  break in string array
// var items = [
//   "bottle",
//   "mouse",
//   "sunglass",
//   "pen",
//   "notebook",
//   "book",
//   "pencil",
//   "eraser",
//   "pencil-cutter",
// ];

// for (var i = 0; i < items.length; i++) {
//   var item = items[i];
//   if (items[i] == "pencil") {
//     break;
//   }
//   console.log(item);
// }

// Continue
var numbers = [45, 64, 23, 78, 10, 47, 112, 90, 45];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number >= 100) {
    break;
  }
  console.log(number);
}
