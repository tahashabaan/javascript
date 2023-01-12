let myBook = {
  title: "1984",
  author: "groge orwell",
  pageCount: 326,
};
let otherBook = {
  title: "a people history",
  author: "howard zinn",
  pageCount: 726,
};
function getSummary(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} ${book.pageCount}`,
  };
}
let Summary = getSummary(myBook);
let otherSummary = getSummary(otherBook);
console.log(summary.summary);
console.log(otherSummary.otherSummary);
//challenge
function getTemp(far) {
  return {
    far: far,
    cel: (5 / 9) * (far - 32),
    kel: ((far + 459.67) * 5) / 9,
  };
}
let farTemp = getTemp(74);
console.log(farTemp);
