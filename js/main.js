
      let button = document.getElementsByClassName("btn");
      let dice1 = document.getElementsByClassName("dice");
      let player2 = document.getElementsByClassName("player1");
      let player1 = document.getElementsByClassName("player0");
      let helptext=document.getElementsByClassName("modal-content-en");
      let isplaying=true;
      

      let currentScore = 0;
      let activePlayer = 0;

      
      button[0].addEventListener('click', function () {

       if(isplaying){
         for (let i = 0; i < dice1.length; i++) {
          dice1[i].classList.add("hidden");
        }
        let random = parseInt(Math.random() * 6);
        dice1[random].classList.remove("hidden");
      
        if ((random + 1) > 1) {
          currentScore += (random + 1);
          document.querySelector(`.current-score${activePlayer}`).textContent = currentScore;
        } else {
          currentScore = 0;
          document.querySelector(`.current-score${activePlayer}`).textContent = 0;
          switchPlayer();
        }
       }
        
      });
    
      // دکمه Hold
      button[1].addEventListener('click', function () {
        if(isplaying){
          let score=document.querySelector(`.total${activePlayer}`)
        score.textContent =Number(score.textContent) + currentScore;
        currentScore = 0;
        document.querySelector(`.current-score${activePlayer}`).textContent = 0
        if(score.textContent>=10){
          document.querySelector(`.player${activePlayer}`).classList.add("player--winer");
          document.querySelector(`.player-title${activePlayer}`).innerHTML="you win!!"
          for (let i = 0; i < dice1.length; i++) {
          dice1[i].classList.add("hidden");
          isplaying=false;
        }
        button[0].classList.add("hidden");
        button[1].classList.add("hidden");


         }
        switchPlayer();
        }
      });

        // دکمه Reset
      button[2].addEventListener('click', function (){
        document.querySelector(".current-score0").textContent = 0
        document.querySelector(".current-score1").textContent = 0
        document.querySelector(".total0").textContent=0
        document.querySelector(".total1").textContent=0
        document.querySelector(`.player0`).classList.remove("player--winer");
        document.querySelector(`.player1`).classList.remove("player--winer");
        isplaying=true
        button[0].classList.remove("hidden");
        button[1].classList.remove("hidden");
      })
       button[3].addEventListener('click', function (){
       alert(helptext[0].innerHTML)
       })


      // تابع تغییر نوبت
      function switchPlayer() {
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1[0].classList.toggle("active-player");
        player1[0].classList.toggle("deactive-player");
        player2[0].classList.toggle("active-player");
        player2[0].classList.toggle("deactive-player");
      }
      


  
