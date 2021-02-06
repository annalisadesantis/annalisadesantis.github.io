$(document).ready(function() {

    // Hamburger-menu appare al click
    $(".fa-bars").click(function(){
        $(".hamburger-menu").slideToggle("slow");
    });

    // Hamburger-menu scompare al click
    $(".times").click(function(){
        $(".hamburger-menu").slideToggle();
    });

    $(".link").click(function(){
        $(".hamburger-menu").slideToggle();
    });

});
