function getSaveNotes(){
  const notesJson=localStorage.getItem('notes')
  return notesJson?JSON.parse(notesJson):[];
}
// function savaNotes
const saveNotes=()=>{
  localStorage.setItem("keyNotes",JSON.stringify(notes));
};
// render application notes


const renderFilter=(notes, filters)=>{
  const filterNotes = notes.filter((item)=>{
    return item.title.toLowerCase().includes(filters.toLowerCase());
  });
  showNotes.innerHTML = "";
  filterNotes.forEach((ele) => {
    let newEle = document.createElement("p");
    newEle.textContent = ele.title;
    showNotes.appendChild(newEle);
  });
};