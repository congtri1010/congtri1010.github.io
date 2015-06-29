/**
 * Created by PhongVu on 6/27/2015.
 */
$(document).ready(function () {
    $(".readmore").click(function(e){
        $(".showmore").slideToggle("10000");
        e.preventDefault();
        return false;
    });
    $(".readmore").click(function(e){
        $(".readmore").hide();

    });
    $(".fa").click(function(e){
        $(".showmore").slideUp("10000");

    });
    $(".fa").click(function(e){
        $(".readmore").show();

    });
});
$(document).ready(function () {
    $(".readmore-e").click(function(e){
        $(".showmore-e").slideToggle("10000");
        e.preventDefault();
        return false;
    });
    $(".readmore-e").click(function(e){
        $(".readmore-e").hide();

    });
    $(".fa-e").click(function(e){
        $(".showmore-e").slideUp("10000");

    });
    $(".fa-e").click(function(e){
        $(".readmore-e").show();

    });
});
$(window).ready(function () {
    $(".wrapper").show("slow");

});
$(document).load(function(){
    $("#avatar").load(function(e){
        $(".avatar-1").fadeOut("slow");
    });
    $("#avatar").load(function(e){
        $(".avatar-2").fadeIn("slow");
    });
});
$(document).scroll(function (e) {
    if ($(this).scrollTop() > 100 ) {
        $(".skills-down").animate({opacity: 1}, "500");
        return;
    }
    $(".skills-down").animate({opacity: 0}, "100");

});
