let myAcount = {
  name: "taha shabaan",
  expenses: 0,
  income: 0,
};
function addIncome(acount, income) {
  return (acount.income += income);
}
function addExpense(acount, expense) {
  return (acount.expenses += expense);
}
function restAcount(acount, name, exp, income) {
  acount.name = name;
  acount.income = income;
  acount.expenses = exp;
}
function getSummaryAcount(acount) {
  return `the name acount : ${acount.name} 
  is balance ${acount.income - acount.expenses} 
  income${acount.income} expense ${acount.expenses}`;
}
addExpense(myAcount, 2500);
addIncome(myAcount, 5050);
console.log(getSummaryAcount(myAcount));
