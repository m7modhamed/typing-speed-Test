

//Array od words

const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing"
];


  // setting levels

  const levels={
    "Easy": 6,
    "Normal": 3,
    "Hard": 2,
  };

  //Default level

  let defaultLevel="Normal";
  let defaultLevelSeconde=levels[defaultLevel];

  //set level
  const urlParams = new URLSearchParams(window.location.search);
  const levelValue = urlParams.get('level');
   defaultLevel=levelValue;
   defaultLevelSeconde=levels[defaultLevel];

  //catch selectors

  let lvlNameSpan =document.querySelector(".message .lvl");
  let secondsSpan =document.querySelector(".message .seconds");
  let startButton =document.querySelector(".start");
  let theWord =document.querySelector(".the-word");
  let input =document.querySelector("input");
  let upcomingWords =document.querySelector(".upcoming-words");
  let timeLeft =document.querySelector(".time span");
  let ScoreGot =document.querySelector(".score .got");
  let scoreTotal =document.querySelector(".score .total");
  let finishMessage =document.querySelector(".finish");

  // set the words
  function setWords(){
    upcomingWords.innerHTML='';
    for(let i=0;i<words.length;i++){
    upcomingWords.innerHTML+=`
    <div>${words[i]}</div>
    `;
    }
};

  //set level name + second + score

  lvlNameSpan.innerHTML=defaultLevel;
  secondsSpan.innerHTML=defaultLevelSeconde;
  scoreTotal.innerHTML=words.length;
  ScoreGot.innerHTML=0;
  timeLeft.innerHTML=defaultLevelSeconde;

  //disable past event

  input.onpaste=function(){
    return false;
  }

  // start Game

  startButton.onclick=function () {
    this.remove();
    input.focus();
     //Generate Word Function
     generateWord();
  }


  // Generate Word Function
  function generateWord(){
    // get random word from array
    let randomWord=words[Math.floor(Math.random() * words.length)]
    theWord.innerHTML=randomWord;
    //get word index
    let wordIndex=words.indexOf(randomWord);
    //remove eord from array
    words.splice(wordIndex,1);
    //update the words on screen after deletion
    setWords();
    //Call start play function
    startPlay();
  }

function startPlay(){

    let start=setInterval(()=>{
        timeLeft.innerHTML--;
        if(timeLeft.innerHTML === "0"){
            clearInterval(start);
            //compare words
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                //empty input field
                input.value='';
                //incease score
                ScoreGot.innerHTML++;
                if(words.length > 0){
                    //generate new word
                    generateWord();
                    //reset time left
                    timeLeft.innerHTML=defaultLevelSeconde;
                }else{
                    finishMessage.innerHTML=`
                    <div class='good' style="color:green;" >congratulations</div>
                    <br>
                    <span class='good'>You Are Win!</span>
                    `;
                    genButton();
                }
                
            }else{
                finishMessage.innerHTML=`
                <span class='bad'>GAME OVER</span>
                `;
                genButton();
            }
        }
    },1000);
    


}

// generate Replay button

function genButton(){

  document.querySelector(".btnReplay").style="display:block";

}