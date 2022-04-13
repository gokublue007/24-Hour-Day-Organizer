// Select everything
var timeDisplayEl = document.querySelector('#currentDay');
var saveElements = document.querySelector('.saveBtn');
var textArea = document.querySelectorAll('.description');
var bussinessHours = [$("#9"), $("#10"), $("#11"), $("#12"), $("#13"), $("#14"), $("#15"), $("#16"), $("#17")]
var militryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//set time for top of the page and time for blocks
function displayTime() {
    var rightNow = moment().format("MMM Do YYYY, h:mm:ss a");
    timeDisplayEl.textContent = rightNow
};

setInterval(displayTime, 1000);

presentTime = moment().hour();
// console.log(presentTime)

//Added function to change block colors if past present or future. I couldnt figure what I was doing wrong to get the loop going correctly

function changeColor() {
    for (i = 0; i < bussinessHours.length; i++) {
        var timeEl = bussinessHours[i].attr("id");
        bussinessHours[i].children("textarea").val(JSON.parse(localStorage.getItem(timeEl)))
        console.log(militryTime[i], presentTime)
        if (militryTime[i] > presentTime) {
            bussinessHours[i].children("textarea").addClass("future");
            console.log("past")
        }
        if (militryTime[i] < presentTime) {
            bussinessHours[i].children("textarea").addClass("past");
            console.log("futrue")
        } else {
            bussinessHours[i].children("textarea").addClass("present");
            console.log("present")
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

