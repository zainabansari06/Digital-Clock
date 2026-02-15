function updatingClock()
{
    let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    let date = new Date();
let h = String(date.getHours());
let m = String(date.getMinutes());
let s = String(date.getSeconds());
let session = document.getElementById('session');
if (h < 10) {
  h = "0" + h;
}
if (m < 10) {
  m = "0" + m;
}
if (s < 10) {
  s = "0" + s;
}
if (h > 12)
{
    h = h - 12;
    session.innerText = 'PM';
}
let hour = document.querySelector(".hour");
hour.innerText = h;
let minutes = document.querySelector(".minute");
minutes.innerText = m;
let seconds = document.querySelector(".seconds");
seconds.innerText = s;
let dates = document.querySelector('.date');
dates.innerText = date.getDate();
let week = document.querySelector('.day');
week.innerText = days[date.getDay()];
let year = document.querySelector('.year');
year.innerText = date.getFullYear();
}
setInterval(updatingClock,1000)