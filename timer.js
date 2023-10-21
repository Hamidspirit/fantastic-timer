let countDown, totalSeconds;

const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

function startTimer() {
  totalSeconds = (parseInt(minutesInput.value) * 60) + parseInt(secondsInput.value);
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
  document.getElementById('totalSeconds').value = 0;
}
