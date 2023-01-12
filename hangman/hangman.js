// http (hyper tetx transfer protocol)
// request
// response
const Hangman=function(word,remainingGuesses){
this.word=word.toLowerCase().split('');
this.remainingGuesses=remainingGuesses;
this.guestLetters;
};
Hangman.prototype.getGuess=function(guess){
  // you can used push instead splite
  const isUnigue=!this.guestLetters.includes(guess);
  const badGuess=!this.word.includes(guess);
  if(isUnigue) this.guestLetters=guess.toLowerCase().split('');
  
  if(badGuess&&isUnigue) this.remainingGuesses--;
}
Hangman.prototype.getPuzzle=function(){
  let puzzle='';
   this.word.forEach((letter)=> {
     if(this.guestLetters.includes(letter) || letter==' ' ) 
        puzzle+=letter;
     else puzzle+='*';
  });
  return puzzle;
 }

const game1=new Hangman("cat",2);
game1.getGuess('caw')
const puzzle=document.querySelector(".puzzle");
puzzle.innerHTML=`<h2>${game1.getPuzzle()}</h2>
                 <h2>${this.remainingGuesses}</h2>`;
// const game2=new Hangman("abdo",4);
// console.log(game2.getPuzzle());
window.addEventListener('keypress',(e)=>{
  console.log(e);
})