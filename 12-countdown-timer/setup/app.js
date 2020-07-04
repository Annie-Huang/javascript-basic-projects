const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

// let futureDate = new Date();

// Tue Aug 25 2020 11:30:00 GMT+1000 (Australian Eastern Standard Time)
// month start from 0, other fields are matching the number.
let futureDate = new Date(2020, 7, 25, 11,30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours  = futureDate.getHours();
const minutes  = futureDate.getMinutes();
const month  = months[futureDate.getMonth()];
const date  = futureDate.getDate();
const weekday  = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainingTime() {
    const today = new Date().getTime();
    // console.log(today);

    const t = futureTime - today;
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000;
    // console.log(oneDay);
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    // calculate all values:
    let days = Math.floor(t/oneDay);
    // console.log(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    // console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    // console.log(minutes);
    let seconds = Math.floor((t % oneMinute) / 1000);
    // console.log(seconds);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`;
        }
        return item
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    });
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();



































