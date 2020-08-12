$(document).ready(function(){
 
    
    // For category       
    $('#a-one').click(function(){
        $('#a-two #aa-two').addClass('fa-circle');
        $('#a-one #aa-one').addClass('fa-check-circle');
        $('#a-three #aa-three').addClass('fa-circle');
        $('#a-four #aa-four').addClass('fa-circle');
        $('#a-five #aa-five').addClass('fa-circle');
        $('#a-six #aa-six').addClass('fa-circle');
        $('.c-motherboard').fadeIn(300);
        $('.c-processor').fadeIn(300);
        $('.c-rsh').fadeIn(300);
        $('.c-other').fadeIn(300);
        $('.c-all').fadeIn(300);
    });
    $('#a-two').click(function(){
        $('#a-two #aa-two').addClass('fa-check-circle');
        $('#a-one #aa-one').addClass('fa-circle');
        $('#a-three #aa-three').addClass('fa-circle');
        $('#a-four #aa-four').addClass('fa-circle');
        $('#a-five #aa-five').addClass('fa-circle');
        $('#a-six #aa-six').addClass('fa-circle');
        $('.c-processor').fadeOut(111);
        $('.c-rsh').fadeOut(111);
        $('.c-other').fadeOut(111); 
        $('.c-motherboard').fadeIn(300);
    });
    $('#a-three').click(function(){
        $('#a-two #aa-two').addClass('fa-circle');
        $('#a-one #aa-one').addClass('fa-circle');
        $('#a-three #aa-three').addClass('fa-check-circle');
        $('#a-four #aa-four').addClass('fa-circle');
        $('#a-five #aa-five').addClass('fa-circle');
        $('#a-six #aa-six').addClass('fa-circle');
        $('.c-motherboard').fadeOut(111);
        $('.c-rsh').fadeOut(111);
        $('.c-other').fadeOut(111); 
        $('.c-processor').fadeIn(300);
    });    
    $('#a-four').click(function(){
        $('#a-two #aa-two').addClass('fa-circle');
        $('#a-one #aa-one').addClass('fa-circle');
        $('#a-three #aa-three').addClass('fa-circle');
        $('#a-four #aa-four').addClass('fa-check-circle');
        $('#a-five #aa-five').addClass('fa-circle');
        $('#a-six #aa-six').addClass('fa-circle');
        $('.c-processor').fadeOut(111);
        $('.c-motherboard').fadeOut(111);
        $('.c-other').fadeOut(111);         
        $('.c-rsh').fadeIn(300);
    });
    $('#a-five').click(function(){
        $('#a-two #aa-two').addClass('fa-circle');
        $('#a-one #aa-one').addClass('fa-circle');
        $('#a-three #aa-three').addClass('fa-circle');
        $('#a-four #aa-four').addClass('fa-circle');
        $('#a-five #aa-five').addClass('fa-check-circle');
        $('#a-six #aa-six').addClass('fa-circle');
        $('.c-processor').fadeOut(111);
        $('.c-rsh').fadeOut(111);
        $('.c-motherboard').fadeOut(111); 
        $('.c-other').fadeIn(300);
    }); 

    $('#product #pro-cat #cat-remove').click(function(){
        $('#product #pro-cat').css({
            'transform':'scaleX(0)',
        });
        $('#fa-c').fadeIn(500);
    });

    $('#category-show #fa-c').click(function(){
        $('#product #pro-cat').css({
            'transform':'scaleX(1)',
        });
        $('#fa-c').fadeOut(200);
    });
 
});