 let min=4,max=100,winningNum=5,guessesLeft=3;
let guessesLeftCopy=guessesLeft;
//UI Element
const game=document.querySelector('#game'),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessInput=document.querySelector('#guess-input'),
      guessBtn=document.querySelector('#guess-btn'),
      message=document.querySelector('.message'),
      playAgainBtn=document.querySelector('.playagain');
      console.log(playAgainBtn);
minNum.textContent=min;
maxNum.textContent=max;
//listen for guess
guessBtn.addEventListener('click',(e)=>{

  let guess=parseInt(guessInput.value);
validate(guess);
});


function validate(guess){

  if (isNaN(guess) || guess<min || guess>max) {
    message.style.display='block';
    setMessage(`Please Enter a Number between ${min} and ${max}`,'red');
  }
  else if(guess===winningNum){
    won();
  }
  else{
    //wrong number
    guessesLeftCopy--;
    if(guessesLeftCopy===0){
      lose();
    }
    else{
      guessLeftMsg(guessesLeftCopy);
    }
  }
}


function lose(){
  guessInput.disabled=true;
  setMessage(`You lose the game, the correct number was ${winningNum}`,'red');
  playAgain();
}
function won(){
  guessInput.disabled=true;
  setMessage(`You won, the correct number was ${winningNum}`,'green');
  guessInput.style.border='1px solid green';
  playAgain();
}
function playAgainSpoof(){
  playAgainBtn.style.display='block';
  console.log(playAgainBtn);
  guessesLeftCopy=guessesLeft;
  console.log(guessesLeftCopy);
  guessInput.disabled=false;
  message.style.display='none';
  guessInput.value='';
  validate(guessInput.value);
}
function playAgain(){
  playAgainBtn.style.display='block';
  playAgainBtn.addEventListener('click',playAgainSpoof);
}
function guessLeftMsg(guessesLeftCopy){
  if(guessInput.value > winningNum)
    setMessage(`${guessesLeftCopy} chances are left, ${guessInput.value} was not a correct number. You have guessed a higher number. `,'blue');
  else
    setMessage(`${guessesLeftCopy} chances are left, ${guessInput.value} was not a correct number. You have guessed a lower number. `,'blue');
}
function setMessage(msg,color){
  message.style.color=color;
  message.textContent=msg;
}
