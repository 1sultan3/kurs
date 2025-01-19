const countdownDays = document.querySelector('.days');
const countdownHours = document.querySelector('.hours');
const countdownMinutes = document.querySelector('.minutes');
const countdownSeconds = document.querySelector('.seconds');
const deadLine = 'January 20 2025 23:59:59 GMT+05:00';

function timerJS() {
    t = Date.parse(deadLine) - Date.now()
    seconds = Math.floor(t / 1000) % 60
    minutes = Math.floor(t / 1000 / 60) % 60 
    hours = Math.floor(t / 1000 / 60 / 60) % 24
    days = Math.floor(t / 1000 / 60 / 60 / 24)


    countdownDays.innerHTML = days
    countdownHours.innerHTML = hours
    countdownMinutes.innerHTML = minutes
    countdownSeconds.innerHTML = seconds
}   
 

setInterval(timerJS, 1000)