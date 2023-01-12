let myAcount = {
  name: "taha shabaan",
  expenses: [],
  incomes: [],
  addIncome: function (des, amount) {
    let incomObj = { descripton: des, incom: amount };
    this.incomes.push(incomObj);
  },
  addExpense: function (des, amount) {
    let expenseObj = { descripton: des, expense: amount };
    this.expenses.push(expenseObj);
  },
  getExpenseSummary: function () {
    let totalExp = 0;
    let total;
    this.expenses.forEach((item) => {
      totalExp += item.expense;
    });
    total = totalExp;
    return total;
  },
  getIncomSummary: function () {
    let totalIncom = 0,
      total;
    this.incomes.forEach((item) => {
      totalIncom = totalIncom + item.incom;
    });
    total = totalIncom;
    return total;
  },
  getAcountSummary: function () {
    let balance = 0;
    const Incom = this.getIncomSummary();
    const Exp = this.getExpenseSummary();
    balance = Incom - Exp;
    return `the ${this.name} has balance:${balance}
     has${Incom}$ incoms and ${Exp}$ expense`;
  },
};
myAcount.addExpense("tea", 23);
myAcount.addExpense("cofee", 276);
myAcount.addIncome("job", 1000);
console.log(myAcount.getAcountSummary());
