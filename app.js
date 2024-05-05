var monthsOutput = document.querySelector(".remainingMonths");
var weeksOutput = document.querySelector(".remainingWeeks");
var daysOutput = document.querySelector(".remainingDays");
var hoursOutput = document.querySelector(".remainingHours");
var minutesOutput = document.querySelector(".remainingMinutes");
var secondsOutput = document.querySelector(".remainingSeconds");
var millisecondsOutput = document.querySelector(".remainingMilliseconds");
function calculateTime() {
  var eid = new Date("17 June 2024");
  var now = new Date();
  var diff = eid - now;
  var months = diff / (1000 * 60 * 60 * 24 * 30);
  var weeks = diff / (1000 * 60 * 60 * 24 * 7);
  var days = diff / (1000 * 60 * 60 * 24);
  var hours = diff / (1000 * 60 * 60);
  var minutes = diff / (1000 * 60);
  var seconds = diff / 1000;
  var milliseconds = diff;

  monthsOutput.innerHTML = Math.floor(months);
  weeksOutput.innerHTML = Math.floor(weeks);
  daysOutput.innerHTML = Math.floor(days);
  hoursOutput.innerHTML = Math.floor(hours);
  minutesOutput.innerHTML = Math.floor(minutes);
  secondsOutput.innerHTML = Math.floor(seconds);
  millisecondsOutput.innerHTML = Math.floor(milliseconds);
}
setInterval(calculateTime, 100);
