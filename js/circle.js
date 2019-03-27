var countdownNumberEl = document.getElementById('countdown-number');
var countdownInitial = 15;
var countdown = countdownInitial;

var play = document.querySelector('#buttonStart');
var reset = document.querySelector('#buttonReset');
var circle = document.querySelector('#circle');
circle.style.animation = `countdown ${countdownInitial}s linear`;
var interval;
var min, sec;

circle.style.webkitAnimationPlayState = "paused";

function pushText(time) {
	min = Math.floor(time/60);
    sec = time%60;
    countdownNumberEl.textContent = `${min}:${sec}`;
}

play.onclick = ()=>{
  circle = document.querySelector('#circle');
  if(circle.style.webkitAnimationPlayState === "paused") {
    clearInterval(interval);
    countdown = countdownInitial;
    circle.style.webkitAnimationPlayState = "running";

    pushText(countdown);

    interval = setInterval(function() {
      if(countdown <= 1) {
	      clearInterval(interval);
	      var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
              audio.play();
      }

      countdown = --countdown <= 0 ? countdownInitial : countdown;
	  
	  pushText(countdown);
      
    }, 1000);
  }
};

reset.onclick = ()=>{
  if(circle.style.webkitAnimationPlayState === "running") {
    circle.style.webkitAnimationPlayState = "paused";
	
    clearInterval(interval);
	countdown = countdownInitial;
	pushText(countdown);
	
	var newone = circle.cloneNode(true);
	circle.parentNode.replaceChild(newone, circle);
  }
};

