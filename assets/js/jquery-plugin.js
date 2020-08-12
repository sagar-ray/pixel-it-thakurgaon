$(document).ready(function(){
   // For WOW JS
   new WOW().init();

   // For Counter UP
   $('h1.cups').counterUp({
       delay: 10,
       time: 3000
   });

   //Circle Progress 
   $('.circle-one').circleProgress({
       value: 0.65,
       size: 100,
       fill: {
           gradient: [ "red", "green" ]
       }
   });

   // For Light Box Magnific
   $('a.viewsmooth').magnificPopup({type: "image"});

   // For SmoothScroll
   $('html').smoothScroll(600);

   // For Material ScrollTop
   $('body').materialScrollTop();

});