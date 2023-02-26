let userScore = 0;
let computerScore = 0;



 function check() 
 {
    let userRock = document.getElementsByClassName("input")[0].value
    let userPaper = document.getElementsByClassName("input")[1].value
    let userScissors = document.getElementsByClassName("input")[2].value
    
    let a=Math.random()
	   let out=Math.floor(a*3)
         //alert(out)
         if(out == 0)
         {
          let computerOut = "rock"
          
            console.log("Same option")
            document.getElementById("image").src="https://media.tenor.com/oslAUCxTbO4AAAAC/rock-sus.gif"
            document.getElementById("Compout").innerHTML="I Rock!"
         

         }
         else if( out == 1 )
         {
          computerOut = "paper"
          console.log("Computer Wins")
          computerScore++;
          
          document.getElementById("image").src="https://m.media-amazon.com/images/I/61LpGWsUaLL._SL1500_.jpg"
          document.getElementById("Compout").innerHTML="Here,have some Paper!"
         }
        else {
         computerOut = "scissors"
         console.log("Computer Loses")
         userScore++;
        
         document.getElementById("image").src="https://i.redd.it/zkf5jfp0ul441.png"
         document.getElementById("Compout").innerHTML="I'll cut it!"
         
        }
        document.getElementsByClassName("ushow")[0].innerHTML = userScore
        document.getElementsByClassName("cshow")[0].innerHTML = computerScore
        scoreCheck();
 }

 function check1() 
 {
  
    let a=Math.random()
	   let out=Math.floor(a*3)
         //alert(out)
         if(out == 0)
         {
          let computerOut = "rock"
          
            console.log("Computer Loses")
            userScore++;
            document.getElementById("image").src="https://media.tenor.com/oslAUCxTbO4AAAAC/rock-sus.gif"
            document.getElementById("Compout").innerHTML="I Rock!"
         

         }
         else if( out == 1 )
         {
          computerOut = "paper"
          console.log("Same Option")
          document.getElementById("image").src="https://m.media-amazon.com/images/I/61LpGWsUaLL._SL1500_.jpg"
          document.getElementById("Compout").innerHTML="Here,have some Paper!"
          
         }
        else {
         computerOut = "scissors"
         console.log("Computer Wins")
         computerScore++;
         document.getElementById("image").src="https://i.redd.it/zkf5jfp0ul441.png"
         document.getElementById("Compout").innerHTML="I'll cut it!"
         
        }
        document.getElementsByClassName("ushow")[0].innerHTML = userScore
        document.getElementsByClassName("cshow")[0].innerHTML = computerScore;
        scoreCheck();
 }
 
 function check2() 
 {
  
    let a=Math.random()
	   let out=Math.floor(a*3)
         //alert(out)
         if(out == 0)
         {
          let computerOut = "rock"
          
            console.log("Computer loses")
            computerScore++;
            document.getElementById("image").src="https://media.tenor.com/oslAUCxTbO4AAAAC/rock-sus.gif"
            document.getElementById("Compout").innerHTML="I Rock!"
         

         }
         else if( out == 1 )
         {
          computerOut = "paper"
          console.log("Computer wins")
          
          userScore++;
          document.getElementById("image").src="https://m.media-amazon.com/images/I/61LpGWsUaLL._SL1500_.jpg"
          document.getElementById("Compout").innerHTML="Here,have some Paper!"
          
         }
        else {
         computerOut = "scissors"
         console.log("Same Option")
         
         document.getElementById("image").src="https://i.redd.it/zkf5jfp0ul441.png"
         document.getElementById("Compout").innerHTML="I'll cut it!"
         
        }
        document.getElementsByClassName("ushow")[0].innerHTML = userScore
        document.getElementsByClassName("cshow")[0].innerHTML = computerScore;
        scoreCheck();
 }
 function scoreCheck() {

 
 if(computerScore >= 3 && userScore < 3)
 {
   document.getElementById("image").src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
    document.getElementById("Compout").innerHTML="Game Over! You lose :("
    document.getElementsByClassName("input")[0].classList.add("disable");
    document.getElementsByClassName("input")[1].classList.add("disable");
    document.getElementsByClassName("input")[2].classList.add("disable");

    
 }

 if(userScore >= 3 &&  computerScore< 3)
 {
   document.getElementById("image").src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"
   document.getElementById("Compout").innerHTML="Game Over! You Win :)"
   document.getElementsByClassName("input")[0].classList.add("disable");
   document.getElementsByClassName("input")[1].classList.add("disable");
   document.getElementsByClassName("input")[2].classList.add("disable");
   
 }

}
 function change() {
 userScore=0;
 computerScore=0;
 document.getElementsByClassName("ushow")[0].innerHTML = userScore
 document.getElementsByClassName("cshow")[0].innerHTML = computerScore;
 document.getElementById("Compout").innerHTML=""
 document.getElementById("image").src="https://media.tenor.com/tkYDskXjHbYAAAAM/question-mark-animation.gif"
 document.getElementsByClassName("input")[0].classList.remove("disable");
 document.getElementsByClassName("input")[1].classList.remove("disable");
 document.getElementsByClassName("input")[2].classList.remove("disable");

        
 }
 