let timerId, inputTime;

function startTimer() {
  inputTime = document.getElementById('inputTime').value;
  let startTime = new Date().getTime();
  let endTime = startTime + inputTime * 1000;
  timerId = setInterval(updateTimer, 1000);

  function updateTimer() {
    let now = new Date().getTime();
    let distance = endTime - now;
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(timerId);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }
}

function stopTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  document.getElementById("countdown").innerHTML = "00:00:00";
  document.getElementById('inputTime').value = '';
}
