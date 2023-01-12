const product=new Object({
  name:"the war of art",
});
// product.name='abdo';
Object.prototype.someNewMethod=()=> 'this is the new function';
console.log(product.someNewMethod());
console.log(product);
// new array
const team=['taha','abdo'];
const teamNew=new Array();
console.log(team);
//arrow function
const getScore=()=>1;
console.log(getScore());
//do you want go to superMarket
// const request=new XMLHttpRequest();
// request.addEventListener('readystatechange',(e)=>{
//   if(e.target.readyState==4)
//   {
//     const data=JSON.parse(e.target.responseText);
//     console.log(data);
//   }
// });
// request.open('GET','http://puzzle.mead.io/puzzle')
// request.send();
const request=new XMLHttpRequest;
request.addEventListener('readystatechange',(e)=>{
     if(e.target.readyState==4){
       console.log(e.target.responseText);
     }
});
request.open('GET','http://puzzle.mead.io/puzzle');
request.send();