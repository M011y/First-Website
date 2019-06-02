//JQuery to make video bigger when play is first clicked
$(document).ready(function () {
    $("#play").click(function () {
        $("#Video").animate({
            width: '800px'
        });
    });
});