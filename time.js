// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    var dNow = new Date();
    var localdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    $('#currentDate').text(localdate);

    $("body").on('click', "#timeList", function (event) {

        var target = event.target;
        var targetId = target.id;
        if (targetId === "next_day" || targetId === "next_day_a") {

            ShowLocalDate();
        }
        else if (targetId === "next_week" || targetId === "next_week_a") {
            console.log("next_week");

        }
        else if (targetId === "next_month" || targetId === "next_month_a") {
            next_month();
        }
        else if (targetId === "next_threeMonth" || targetId === "next_threeMonth_a") {
            next_threeMonth();
        }
    })
});

function ShowLocalDate() {
    var dNow = new Date();
    var localdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    $('#currentDate').text(localdate)
}

function next_threeMonth() {
    var x = 3; //or whatever offset
    var CurrentDate = new Date();
    CurrentDate.setMonth(CurrentDate.getMonth() + x);
    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $('#currentDate').text(localdate);
}

function next_month() {
    var x = 1; //or whatever offset
    var CurrentDate = new Date();
    console.log("Current date:", CurrentDate);
    CurrentDate.setMonth(CurrentDate.getMonth() + x);

    var localdate = (CurrentDate.getMonth() + 1) + '/' + CurrentDate.getDate() + '/' + CurrentDate.getFullYear() + ' ' + CurrentDate.getHours() + ':' + CurrentDate.getMinutes();
    $('#currentDate').text(localdate);
} 