const todos=getSaveTodos();
const btnSearch = document.querySelector("#search-text");
// const renderElement=generateTodoDom(todos)
btnSearch.addEventListener("input",function (e) {
  renderTodo(todos, e.target.value);
});
// renderTodo
renderTodo(todos, btnSearch.value);

const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
  saveForm(e);
  generateSummaryDom(todos);
  generateTodoDom(todos)
  });
