// Continue
var numbers = [45, 64, 23, 78, 10, 47, 112, 90, 45];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
