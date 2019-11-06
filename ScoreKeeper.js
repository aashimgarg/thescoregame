var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var p1Score=0;
var p2Score=0;
var winningScore = 5;
var gameOver= false;
var winning = document.querySelector("p span");
var numInput = document.querySelector("input");



p1Button.addEventListener("click",function(){
    if (!gameOver){
        p1Score++;
        p1Display.textContent=p1Score; 
        console.log(p1Score , winningScore)
        if(p1Score===winningScore) {
        p1Display.style.color= "powderblue";
        gameOver = true;    
        }  
    }
})
p2Button.addEventListener("click",function(){
    if (!gameOver){
        p2Score++;
        p2Display.textContent=p2Score; 
        if(p2Score===winningScore){
        p2Display.style.color="powderblue";
        gameOver = true; 
        }     
    }
})
resetButton.addEventListener("click",function(){
    reset();

})
numInput.addEventListener("change",function(){
    winning.textContent=numInput.value;
    winningScore = Number(numInput.value);
    reset();
  }
  )
  function reset() {
    p1Score=0;
    p2Score=0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    gameOver=false;
  }
