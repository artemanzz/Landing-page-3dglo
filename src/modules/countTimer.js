/* --- Timer --- */
function countTimer (deadline) {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  const dateStop = new Date(deadline).getTime();

  function getTimeRemaining () {
    const dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor((timeRemaining / 60 / 60));
    return {
      timeRemaining,
      hours,
      minutes,
      seconds
    };
  } //getTimeRemaining()

  const idInterval = setInterval(updateClock, 1000);

  function updateClock () {
    const timer = getTimeRemaining();

    String(timer.hours).length < 2 ? timer.hours = '0' + timer.hours : '';
    String(timer.minutes).length < 2 ? timer.minutes = '0' + timer.minutes : '';
    String(timer.seconds).length < 2 ? timer.seconds = '0' + timer.seconds : '';

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

    if (timer.timeRemaining === 0 || timer.timeRemaining < 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(idInterval);
    }
  } // updateClock()

  updateClock(); // чтобы сбросить значения в верстке сразу
} // countTimer()

export default countTimer;