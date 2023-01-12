// fetch exisiting data from localstorage
const getSaveTodos=()=>{
 return(localStorage.getItem('keyTodos')?
         JSON.parse(localStorage.getItem('keyTodos')):[]);
}
// saveLocalStorage
const saveTodos=(todos)=>{
  localStorage.setItem('keyTodos',JSON.stringify(todos));
}
const reSaveTodos=(todo)=>{
  localStorage.keyTodos=JSON.stringify(todo);
}
const removeTodo=(todo,id)=>{
  const indexTodo=todo.findIndex((item)=>{
  return item.id==id;
  });
   if(indexTodo>-1) todo.splice(indexTodo,1);
}
 const toggleTodo=(rend,id)=>{
   const todo=rend.find((todo)=>{
    return todo.id=id;
  });
  if(todo !==undefined)
     todo.completed=!todo.completed;
     console.log(todo);
}
// generet todoDom
const generateTodoDom=(rend)=>{
  const Todos= document.querySelector(".todo");
  Todos.innerHTML="";
  rend.forEach((ele)=>{
  let rootDiv=document.createElement('div');
  let labelEle = document.createElement("label");
  let checkboxEle = document.createElement("input");
  let removeBtn = document.createElement("button");
   removeBtn.addEventListener('click',()=>{
      removeTodo(rend,ele.id);
      saveTodos(rend) ;  
      generateSummaryDom(rend);
      generateTodoDom(rend);
  });
  checkboxEle.addEventListener('change',(e)=>{
      toggleTodo(rend,ele.id);
      saveTodos(rend);
      generateSummaryDom(rend);
      generateTodoDom(rend);
  console.log(ele.id)
  });
   //set up rootElement
  Todos.appendChild(rootDiv);
  //set up input
  rootDiv.appendChild(checkboxEle);
  checkboxEle.setAttribute('type','checkbox');
  checkboxEle.checked=ele.completed;
  //set up label
  rootDiv.appendChild(labelEle);
  labelEle.textContent = ele.text;
  //set up removeElement
  rootDiv.appendChild(removeBtn);
  removeBtn.textContent="x";
  });
};
//renderTodos
   const renderTodo =(todos, filters)=>{
   const filterTodo = todos.filter((item) => {
      return item.text.toLowerCase().includes(filters.toLowerCase());
     });
  generateTodoDom(filterTodo);
  generateSummaryDom(filterTodo);
};
// getSummaryDom
const generateSummaryDom= (todo)=>{
   const bodyLeaft = document.querySelector(".leaft");
   const filterCompleted = todo.filter((ele)=>{
    return !ele.completed;
  });
  const headComple = `<h2>you have ${filterCompleted.length} leaft </h2>`;
  bodyLeaft.innerHTML=headComple;
}
// saveForm
const saveForm=(e)=>{
    e.preventDefault();
    let newId=0;
    let textVal=e.target.elements.addText.value;
    let keyObj={id:++newId,text:textVal,completed:true};
     if (e.target.elements.addText.value != "") {
         todos.push(keyObj);
         saveTodos(todos);
         e.target.elements.addText.value="";
}}