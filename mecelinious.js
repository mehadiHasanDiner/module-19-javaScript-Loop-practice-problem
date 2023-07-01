// 24.

// var myMoney = 10000;

// if (myMoney >= 80000) {
//   console.log("I will buy Mac");
// } else if (myMoney >= 60000) {
//   console.log("I will buy Gaming Laptop");
// } else if (myMoney >= 40000) {
//   console.log("I will buy Lenovo Yoga Laptop");
// } else if (myMoney >= 20000) {
//   console.log("I will buy Old Laptop");
// } else {
//   console.log("I will buy Mobile");
// }

// // 25. while loop
// var emotion = 1;
// while (emotion <= 39) {
//   console.log(emotion + ". " + "Ajke amar mone valo nai");
//   emotion++;
// }

// // 26. For Loop
// for (var i = 1; i <= 39; i++) {
//   console.log(i + ". " + "Ajke amar mone valo");
// }

// // 29. For Loop
// for (var i = 58; i <= 98; i++) {
//   console.log(i);
// }

// // 30. even number (412-456)
// for (var i = 412; i <= 456; i += 2) {
//   console.log(i);
// }

// //31.  odd number (581-623)
// for (var i = 581; i <= 623; i += 2) {
//   console.log(i);
// }

// // 33.
// var totalLearnt = [
//   "html",
//   "css",
//   "js",
//   "array",
//   "loop",
//   "while loop",
//   "for loop",
// ];

// for (var i = 0; i < totalLearnt.length; i++) {
//   var singleLearnt = totalLearnt[i];
//   console.log(singleLearnt);
// }

// // 34.
// var brandOfMobileUsed = ["TCL", "Nokia", "Symphony", "Samsung", "Oppo", "Vivo"];
// var mobileUsed = 0;

// while (mobileUsed < brandOfMobileUsed.length) {
//   mobileUsed++;
//   console.log(brandOfMobileUsed[mobileUsed]);
// }

// // 35. Break
// for (var i = 30; i <= 86; i++) {
//   if (i >= 44) {
//     break;
//   }
//   console.log(i);
// }

// 36. books
var myBooks = [100, 120, 140, 160, 180, 200, 220, 240, 200, 189, 250];
for (var i = 0; i < myBooks.length; i++) {
  var book = myBooks[i];
  if (book >= 200) {
    continue;
  }
  console.log(book);
}
