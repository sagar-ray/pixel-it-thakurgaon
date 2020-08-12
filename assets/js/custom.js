$(document).ready(function(){   

    // Fixed Navbar Background Change
    $(function () {
        $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    // Paralaxx      
    $('.slider-bottom').parallaxie({
        speed: 0.7
    });  

    //For Search
    $('#show-srch').click(function(){
        $('#hide-srch').fadeIn(300);
        $('#search').fadeIn(300);
        $('#show-srch').fadeOut(100);
    });
    $('#hide-srch').click(function(){
        $('#show-srch').fadeIn(300);
        $('#search').fadeOut(100);
        $('#hide-srch').fadeOut(100);
    });

    // For Navbar Toggler
    $('#showNav').click(function(){
        $('#showNav').hide(0);
        $('#hideNav').show(700);
    });
    $('#hideNav').click(function(){
        $('#hideNav').hide(0);
        $('#showNav').show(700);
    });

    // For Position Fixed Contact Section
    $('#live-phone').click(function(){
        $('#live-phone-text').fadeIn(500);
        $('#live-phone-text').css({
            'transform':'scaleY(1)',
        });
    });
    
    $('#live-phone-remove').click(function(){ 
        $('#live-phone-text').css({
            'transform':'scaleY(0)',
        });
    }); 

    // For Proffesion
    var typed = new Typed('.home-intro', {
        strings: ["ল্যাপটপ ও পিসির মেরামত করা হয়  <i class='fad fa-check-circle'></i>"],
        typeSpeed: 40,
        loop: true,
        backSpeed: 44,
        backDelay: 1500
    });

    
});