let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");
function countdown() {
    let newYear = new Date("1 jan 2022");
    let today = new Date();
    let totalSeconds = (newYear - today) / 1000;
    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;
    //console.log(days, hours, minutes, seconds);
    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
}
function format(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);