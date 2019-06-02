
//JQuery to hide text to see image better, and change text for clicking on
$(document).ready(function () {
    $("#Click").click(function () {
        $("#About").hide();
        $("#Click").hide();
        $("#Click2").show();
    });

    //JQuery to show text again, and change text for clicking on
    $("#Click2").click(function () {
        $("#About").show();
    $("#Click").show();
    $("#Click2").hide();
});
});