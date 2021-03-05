$(document).ready(function() {

    //Set current date in the header
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY"));
    console.log(today)

    //Use moment library to get the current hour
    var now = parseInt(moment().format('HH'));
    console.log(now)

    //Variables that reference each timeblock
    var time9 = $("#time-9");
    var time10 = $("#time-10");
    var time11 = $("#time-11");
    var time12 = $("#time-12");
    var time13 = $("#time-13");
    var time14 = $("#time-14");
    var time15 = $("#time-15");
    var time16 = $("#time-16");
    var time17 = $("#time-17");

    //Use the .each jquery method to loop through all textarea elements and add a class depending on if the name description given to each textarea element is <, > or = to the current time
    $("textarea").each(function () {
        var name = parseInt($(this).attr("name"));
        if (name < now) {
            $(this).addClass("past");
        }

        if (name > now) {
            $(this).addClass("future");
        }

        if (name === now) {
            $(this).addClass("present");
        }
    })

    //Add a click handler to each of the saveBtns using .on() method
    $(".saveBtn").on("click", function(e) {
        e.preventDefault()
        //setItems in localStorage using the key value pair where the value is the variable set to each textarea corresponding to an hour
        localStorage.setItem("9am", (time9.val()))
        localStorage.setItem("10am", (time10.val()))
        localStorage.setItem("11am", (time11.val()))
        localStorage.setItem("12pm", (time12.val()))
        localStorage.setItem("1pm", (time13.val()))
        localStorage.setItem("2pm", (time14.val()))
        localStorage.setItem("3pm", (time15.val()))
        localStorage.setItem("4pm", (time16.val()))
        localStorage.setItem("5pm", (time17.val()))
    })

    //getItem from localStorage and append it to the textarea using the id corresponding to each hour of time
    $("#time-9").append(localStorage.getItem("9am"));
    $("#time-10").append(localStorage.getItem("10am"));
    $("#time-11").append(localStorage.getItem("11am"));
    $("#time-12").append(localStorage.getItem("12pm"));
    $("#time-13").append(localStorage.getItem("1pm"));
    $("#time-14").append(localStorage.getItem("2pm"));
    $("#time-15").append(localStorage.getItem("3pm"));
    $("#time-16").append(localStorage.getItem("4pm"));
    $("#time-17").append(localStorage.getItem("5pm"));

})