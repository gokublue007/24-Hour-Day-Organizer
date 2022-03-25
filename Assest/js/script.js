// Select everything
var timeDisplayEl = document.querySelector('#currentDay');
var saveElements = document.querySelector('.saveBtn');

// select all content fields
// var nineAM = document.querySelector('#9am');
// var tenAM = document.querySelector('#10am');
// var elevenAM = document.querySelector('#11am');
// var twelvePM = document.querySelector('#12pm');
// var onePM = document.querySelector('#1pm');
// var twoPM = document.querySelector('#2pm');
// var threePM = document.querySelector('#3pm');
// var fourPM = document.querySelector('#4pm');
// var fivePM = document.querySelector('#5pm');

function displayTime() {
    var rightNow = moment().format("MMM Do YYY, h:mm:ss a");
    timeDisplayEl.textContent = rightNow
};

setInterval(displayTime, 1000);

