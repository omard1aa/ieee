$(document).ready(function(){
    $("#myCarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function() {
        if($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#myCarousel').carousel('pause');
            $("#carouselButton").children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else {
            $('#myCarousel').carousel('cycle');
            $("#carouselButton").children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#resButton').click(function() {
        $('#resModal').modal('toggle');
    });
    $('#exitButton').click(function () {
        $('#resModal').modal('hide');
    });
    $('#loginLink').click(function() {
        $('#loginModal').modal('show');
    });
    $('#loginExiteButton').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#cancel').click(function(){
        $('#loginModal').modal('hide');
    });
});
