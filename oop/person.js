class Person{
    constructor(fName,lName,age,likes){
      this.fName=fName;
      this.lName=lName;
      this.age=age;
      this.likes=likes;
    }
    getBio(){
      let bio=`the Name:${this.fName} ${this.lName} age:${this.age}`;
      this.likes.forEach(like=> bio+=` likes:${like}`);
  }
  setName(fullName){
    const names=fullName.split('');
    this.fName=names[0];
    this.lName=names[1];
  }
}
class Empolye extends Person{
  constructor(fName,lName,position,age,likes)
  {
    super(fName,lName,age,likes);
    this.position=position;
  }
  getBio(){
    return `${this.fName} ${this.lName} is a ${this.position}`;
  }
}
class Student extends Person{
  constructor(fName,lName,grade,age,likes){
    super(fName,lName,age,likes);
    this.grade=this.grade>=100 && this.grade<=0?grade:"not avl";
  }
     printStaus(){
        if(this.grade>=70) return `the ${this.fName} ${this.lName} is passing: ${this.grade}%`;
     }
    updataGrade(amount){
      this.grade+=amount;
    }
    getBio(){
      const status=this.grade>=70?'passing':'failed';
      return status;
    }
}
const person1=new Empolye("taha","shabaan","engineer",19,['studing','programing']);
console.log(person1.getBio())
const person2=new Empolye("abdo","shabaan","manger",17,['working','doing']);
console.log(person2.getBio());


// const Person=function(fName,lName,age,likes){
// this.fName=fName;
// this.lName=lName;
// this.age=age;
// this.likes=likes;
// }
// Person.prototype.getBio=function(){ 
//  let bio=`the Name:${this.fName} ${this.lName} age:${this.age}`;
//  this.likes.forEach(like => {
//    bio+=` likes:${like}`;
//  });
// return bio;
// }
// Person.prototype.setName=function(fullName){
//    const names=fullName.split('');
//    this.fName=names[0];
//    this.lName=names[1];
// }
// Person.prototype.location='theland';


//  class Shape{
//    constructor(name,sides=sidelenght,sidelenght=sides){
//      this.name=name;
//      this.sides=sides;
//      this.sidelenght=sidelenght;
//    }
//    calcPermeier(){
//         return 2*(this.sides+this.sidelenght)
//    }
//  }
