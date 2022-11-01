
    var player1 = 'player1';
    var player2 = "Player2";
    var score1 = 0;
    var score2 = 0;
   export function rollTheDice() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        document
          .querySelector(".img1")
          .setAttribute("src", "/Dice" + randomNumber1 + ".png");

        document
          .querySelector(".img2")
          .setAttribute("src", "/Dice" + randomNumber2 + ".png");

        score1 = score1 + randomNumber1;
        document.getElementById("scr1").innerHTML = score1;
        score2 = score2 + randomNumber2;
        document.getElementById("scr2").innerHTML = score2;
        if (score1 >= 25 || score2 >= 25){
          document.getElementById("myBtn").disabled = true;
        }

        if (score1 === score2) {
          document.getElementById("result").innerHTML = "Draw!";
        } else if (score1 < score2) {
          document.getElementById("result").innerHTML = player2 + " WINS!";
        } else {
          document.getElementById("result").innerHTML = player1 + " WINS!";
        }
      }
     export function resetTheDice() {
        document.getElementById("myBtn").disabled = false;

        document
          .querySelector(".img1")
          .setAttribute("src", "Dice" + 1 + ".png");
        document
          .querySelector(".img2")
          .setAttribute("src", "Dice" + 1 + ".png");
        document.getElementById("result").innerHTML= "let's start";
        document.getElementById("scr1").innerHTML= "score1";  
        document.getElementById("scr2").innerHTML= "score2"; 
          score1 = 0;
          score2 = 0;

      }
    
    
