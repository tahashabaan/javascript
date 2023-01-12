// scope of function
// 1- global scope(cel)   2-local scope((far) in this it)
let cel = function (far) {
  return (5 / 9) * (far - 32);
};
console.log(cel(32));
console.log(cel(68));
console.log(cel(68));
