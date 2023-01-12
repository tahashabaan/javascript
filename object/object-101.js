// challenge
let person = {
  name: "taha",
  age: 19,
  city: "Ben suef",
};
console.log(`the Name :${person.name} 
   alive :${person.city} age :${person.age}`);
person.age = ++person.age;
console.log(`the Name :${person.name} 
   alive :${person.city} age :${person.age}`);

let myBook = {
  title: "1984",
  author: "groge orwell",
  pageCount: 326,
};
// show value obj
console.log(myBook);
// show value every key in obj use (.)
console.log(myBook.title);
// show value every key in obj use (.) with string use template string
console.log(`title:${myBook.title}`);
// want updata any key in object used assimgent operator such
myBook.title = "taha shabaan";
// show value obj
console.log(myBook);
