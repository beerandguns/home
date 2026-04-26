$(document).ready(function() {  
    $("#nav-home").click(function() {
        $("html, body").animate({
            scrollTop: $("#hero").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-fe").click(function() {
        $("html, body").animate({
            scrollTop: $("#features").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-dis").click(function() {
        $("html, body").animate({
            scrollTop: $("#discord").offset().top - 100
        }, 1000);
        return false;
    });
    $("#cta").click(function() {
        $("html, body").animate({
            scrollTop: $("#discord").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-about").click(function() {
        $("html, body").animate({
            scrollTop: $("#About").offset().top - 100
        }, 1000);
        return false;
    });
});
