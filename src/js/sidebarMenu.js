$(document).ready(function() {
    $(".hamburger-btn").click(function() {
        $(".mobile-sidebar-navigation").addClass("sidebar-open");
        $("body").css("overflow", "hidden");
    });
    $(".close-navigation").click(function() {
        $(".mobile-sidebar-navigation").removeClass("sidebar-open");
        $("body").css("overflow", "unset");
    });
    $(".nav_mobile").click(function() {
        $(".mobile-sidebar-navigation").removeClass("sidebar-open");
        $("body").css("overflow", "unset");
    });
    $(".floating-button").click(function() {
        $(".mobile-sidebar-navigation").removeClass("sidebar-open");
        $("body").css("overflow", "unset");
    });
});
$(function(){
    createSticky(jQuery("#mobile__header"));
});
function createSticky(sticky) {
    if (typeof sticky !== "undefined") {
        let	pos = sticky.offset().top,
            win = jQuery(window);
        win.on("scroll", function() {
            win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");
        });
    }
}