//length
let name = "   kscjck   taha   yass   ";
console.log(name);
// convert uppercase
console.log(name.toUpperCase());
//used in search includes ->return true or false
let pass = "taha 7008";
console.log(pass.includes("009"));
// trim method used remove space in from string
console.log(name.trim());
// challenge
function isAvlPass(pass) {
  return pass.length >= 8 && !pass.includes("password");
}

console.log(isAvlPass("augsghghg"));
console.log(isAvlPass("password9777"));
