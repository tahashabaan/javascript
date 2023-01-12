const todos = [
  {
    value: "buy food",
  },
  {
    value: "clean kitchen",
  },
  {
    value: "order cat food",
  },
  {
    value: "do work",
  },
  {
    value: "excrisise",
  },
];
const deleteTodo = function (todo, val) {
  let index = todo.findIndex((item) => {
    return item.value == val.toLowerCase();
  });
  if (index > -1) {
    todo.splice(index, 1);
  }
};
// deleteTodo(todos, "do work");
// console.log(todos);
// deleteTodo(todos, "buy food");
// console.log(todos);
const getThingsTodo = function (todo, val) {
  return todo.filter((item) => {
    return item.value !== val.toLowerCase();
  });
};
// let filArr = getThingsTodo(todos, "do work");
// console.log(filArr);

const sortTodo = function (todo) {
  return todo.sort((a, b) => {
    if (a.value.toLowerCase() < b.value.toLowerCase()) return -1;
    if (a.value.toLowerCase() > b.value.toLowerCase()) return 1;
    else return 0;
  });
};
console.log(todos);
sortTodo(todos);
console.log(todos);
