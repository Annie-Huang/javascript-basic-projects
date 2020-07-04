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

// Mon May 25 2020 11:30:00 GMT+1000 (Australian Eastern Standard Time)
// month start from 0, other fields are matching the number.
let futureDate = new Date(2020, 4, 25, 11,30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours  = futureDate.getHours();
const minutes  = futureDate.getMinutes();
const month  = months[futureDate.getMonth()];
const date  = futureDate.getDate();
const weekday  = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`









































