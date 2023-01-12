let num = 103.927;
console.log(num);
// toFixed(num) fraction
console.log(num.toFixed(2));
// math Propertitys
Math.round(num); // down
Math.ceil(num); // up
Math.random(num); // both up and down
let min = 10;
let max = 20;
let rand = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);

function randomNum(num, min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`randNum:${rand} Num:${num}`);
  return rand == num;
}
console.log(randomNum(2, 1, 5));
