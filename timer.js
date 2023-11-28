let countDown, totalSeconds,breakSeconds;

const minutesInput = document.querySelector('#minutes');
const breakInput = document.querySelector('#break-time');
//const stopsInput = document.querySelector('#stops');
let mySound = new Audio('timerSound.mp3');

function startBreak() {
  breakSeconds = parseInt(breakInput.value * 60)
  countDown = setInterval(updateTimer, 1000);

  function updateTimer() {
    breakSeconds--
    let seconds = Math.floor((breakSeconds % 60 ));
    let hours = Math.floor((breakSeconds / 3600));
    let minutes = Math.floor((breakSeconds / 60)) - (hours * 60);
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    console.log(breakSeconds)
    if (breakSeconds < 0) {
      clearInterval(countDown);
      document.getElementById("countdown").innerHTML = "EXPIRED";
      mySound.play();
      alert('Break is Over!')
    }
  }

}




function startTimer() {
  totalSeconds = (parseInt(minutesInput.value) * 60);
  countDown = setInterval(updateTimer, 1000);

  function updateTimer() {
    totalSeconds--
    let seconds = Math.floor((totalSeconds % 60 ));
    let hours = Math.floor((totalSeconds / 3600));
    let minutes = Math.floor((totalSeconds / 60)) - (hours * 60);
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
    console.log(totalSeconds)
    if (totalSeconds < 0) {
      clearInterval(countDown);
      document.getElementById("countdown").innerHTML = "EXPIRED";
      mySound.play();
      alert("Time is Over")
    }
  }
}

/*function displayTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs}`;
}
*/
function stopTimer() {
  clearInterval(countDown);
}

function resetTimer() {
  clearInterval(countDown);
  document.getElementById("countdown").innerHTML = "00:00:00";
  totalSeconds = 0;
}
