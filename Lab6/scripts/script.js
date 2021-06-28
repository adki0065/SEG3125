function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}

function validateCredit(txtCredit) {
    var a = document.getElementById(txtCredit).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^[0-9]{4}[\s][0-9]{4}[\s][0-9]{4}[\s][0-9]{4}$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}

var unavailableDates = ["06/29/2021", "07/07/2021", "07/10/2021"];
const setDateFormat = "mm/dd/yy";


function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    var a = document.getElementById('veterinarians').value;
    if (a === "Finlay") {
        if (date.getDay() === 0 || date.getDay() === 6)
            return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [unavailableDates.indexOf(string) === -1]
    } else if (a === "Johnson") {
        if (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6)
            return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [unavailableDates.indexOf(string) === -1]
    } else if (a === "Ellison") {
        if (date.getDay() === 3 || date.getDay() === 4)
            return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
        return [unavailableDates.indexOf(string) === -1]
    } else {

        return [false];
        var string = jQuery.datepicker.formatDate(setDateFormat, date);
    }
}
/*
function disableDates(date) {
    // Sunday is Day 0, disable all Sundays


    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) === -1]

}*/

$(document).ready(function() {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function() {
        if (!validatePhone("phone")) {
            alert("Wrong format for phone");
            $("#phone").val("(xxx) xxx-xxxx");
            $("#phone").addClass("error");
        } else {
            $("#phone").removeClass("error");
        }
    });

    $("#dateInput").datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2021'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    $("#ui-datepicker-div").css("z-index", "9999");


    $("#debit").on("mouseenter", function() {
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function() {
        $("#debit").removeClass("showInput");
    });
    $("#debit").on("change", function() {
        if (!validateCredit("debit")) {
            alert("Wrong format for credit card");
            $("#debit").val("xxxx xxxx xxxx xxxx");
            $("#debit").addClass("error");
        } else {
            $("#debit").removeClass("error");
        }
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});