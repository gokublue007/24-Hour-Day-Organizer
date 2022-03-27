// Select everything
var timeDisplayEl = document.querySelector('#currentDay');
var saveElements = document.querySelector('.saveBtn');
var textArea = document.querySelectorAll('.description');
var bussinessHours = [$("#9am"), $("#10am"), $("#11am"), $("#12pm"), $("#1pm"), $("#2pm"), $("#3pm"), $("#4pm"), $("#5pm")]

//set time for top of the page and time for blocks
function displayTime() {
    var rightNow = moment().format("MMM Do YYYY, h:mm:ss a");
    timeDisplayEl.textContent = rightNow
};

setInterval(displayTime, 1000);

presentTime = moment().hour();

//Added function to change block colors if past present or future. I couldnt figure what I was doing wrong to get the loop going correctly

function changeColor() {
    for (i = 0; i < bussinessHours.length; i++) {
        var timeEl = bussinessHours[i].attr("id");
        bussinessHours[i].children("textarea").val(JSON.parse(localStorage.getItem(timeEl)))
        if (timeEl < presentTime) {
            bussinessHours[i].children("textarea").addClass("past");
        }
        else if (bussinessHours > presentTime) {
            bussinessHours[i].children("textarea").addClass("future");
        } else {
            bussinessHours[i].children("textarea").addClass("present");
        }
    }
}

changeColor();

//called the save button to log data that gets loaded on textarea

saveElements.addEventListener("click", function() {
    var savedData = $(this).siblings("textarea");
    localStorage.setItem(savedData.parent().attr("id"), JSON.stringify(savedData.val()));
    console.log("Does it work?");
})

