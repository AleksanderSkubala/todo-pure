var countdownNumberEl = document.getElementById('countdown-number');
var countdownInitial = 25*60;
var countdown = countdownInitial;

var play = document.querySelector('#buttonStart');
var reset = document.querySelector('#buttonReset');
var circle = document.querySelector('#circle');
circle.style.webkitAnimationPlayState = "paused";

play.onclick = ()=>{
  if(circle.style.webkitAnimationPlayState === "paused") {
    clearInterval(interval);
    countdown = countdownInitial;
    circle.style.webkitAnimationPlayState = "running";

    var min = Math.round(countdown/60);
    var sec = countdown%60;
    countdownNumberEl.textContent = `${min}:${sec}`;

    var interval = setInterval(function() {
      if(countdown <= 1) clearInterval(interval);

      countdown = --countdown <= 0 ? countdownInitial : countdown;

      min = Math.floor(countdown/60);
      sec = countdown%60;
      countdownNumberEl.textContent = `${min}:${sec}`;
    }, 1000);
  }
};

reset.onclick = ()=>{
  if(circle.style.webkitAnimationPlayState === "running") {
    circle.style.webkitAnimationPlayState = "paused";
    clearInterval(interval);
  }
};

