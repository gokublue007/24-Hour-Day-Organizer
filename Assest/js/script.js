// Select everything
var timeDisplayEl = document.querySelector('#currentDay');
var saveElements = document.querySelector('.saveBtn');
var textArea = document.querySelectorAll('.description');
var presentTime;
var allHours = {
    morning: ["12:00AM, 1:00AM, 2:00AM, 3:00AM, 4:00AM, 5:00AM, 6:00AM, 7:00AM, 8:00AM"],
    work: ["9:00AM, 10:00AM, 11:00AM, 12:00PM, 1:00PM, 2:00PM, 3:00PM, 4:00PM, 5:00PM"],
    night: ["9:00AM, 10:00AM, 11:00AM, 12:00PM, 1:00PM, 2:00PM, 3:00PM, 4:00PM, 5:00PM"]
};

function displayTime() {
    var rightNow = moment().format("MMM Do YYYY, h:mm:ss a");
    timeDisplayEl.textContent = rightNow
};

setInterval(displayTime, 1000);
changeColor();

function changeColor() {
    presentTime = moment().format("hhA")
    console.log(presentTime)
    if (allHours.morning.indexOf(presentTime) === -1 || allHours.night.indexOf(presentTime) !== - 1) {
        $("#").css("background-color", "#d3d3d3");
    } 
    for (var i = 0; i < allHours.work.indexOf(presentTime); i++){
        $("#" + allHours.work[i]).css("background-color", "#ACA1A1");
    } for (var i = 0; i < allHours.work.indexOf(presentTime); i++){
        $("#" + allHours.work[i]).css("background-color", "#77dd77"); i--;
        }
};

// select all content fields
// var nineAM = document.getElementById("9am");
// var tenAM = document.getElementById('10am');
// var elevenAM = document.getElementById('11am');
// var twelvePM = document.getElementById('12pm');
// var onePM = document.getElementById('1pm');
// var twoPM = document.getElementById('2pm');
// var threePM = document.getElementById('3pm');
// var fourPM = document.getElementById('4pm');
// var fivePM = document.getElementById('5pm');



