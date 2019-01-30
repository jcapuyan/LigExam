jQuery(document).ready(function ($) {
  
    var slideCount = $('.banner ul li').length;
    var slideWidth = $('.banner ul li').width();
    var slideHeight = $('.banner ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    var slideNum = $(".banner__slides li").length;
  
    $('.banner').css({ width: slideWidth, height: slideHeight });
  
    $('.banner ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('.banner ul li:last-child').prependTo('.banner ul');

    function moveLeft() {
        $('.banner ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.banner ul li:last-child').prependTo('.banner ul');
            $('.banner ul').css('left', '');
        });
    };

    function moveRight() {      
        $('.banner ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.banner ul li:first-child').appendTo('.banner ul');
            $('.banner ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        var currentP = $(".navigation div.active").index();      
        
        if (currentP != 0) {
            moveLeft();
            $(this).removeClass('disabled');
            $('a.control_next').removeClass('disabled');
            $('.navigation div.active').prev().addClass("active").siblings().removeClass('active');
        } else {
            $(this).addClass('disabled');
        }
      
        if (currentP == 1) {
            $(this).addClass('disabled');
        }
    });

    $('a.control_next').click(function () {
        var currentP = $(".navigation div.active").index();      
        if (currentP != 2) {
            moveRight();
            $(this).removeClass('disabled');
            $('a.control_prev').removeClass('disabled');
            $('.navigation div.active').next().addClass("active").siblings().removeClass('active');
        } else {
            $(this).addClass('disabled');
        }
        
        //get number slides
        var slideLast = slideNum - 2;
        if (currentP == slideLast) {
            $(this).addClass('disabled');
        }
    });
  
    //Pagination
  
    //Generate Number of Pagination
    $(".navigation").html('');
  
    var i;
    for (i = 0; i < slideNum; i++) {
        if(i == 0){
            $(".navigation").append('<div class="active"><a href="#" class=""></a></div>');
        } else {
            $(".navigation").append('<div><a href="#" class=""></a></div>');
        }
    }
  
    //traverse slide
    function slideLeft(moveCount){
        var i;
        for (i = 0; i < moveCount; i++) {
            moveLeft();
        }
    }
  
    function slideRight(moveCount){
        var i;
        for (i = 0; i < moveCount; i++) {
            moveRight();
        }
    }
  
    //Click Pagination  
    $(".navigation").on("click", "div", function() {
        var current = $(".navigation div.active").index();
        var index = $(this).index();
    
        $(this).addClass("active").siblings().removeClass('active');
    
        if(current < index){
            var slideDiff = index - current;
            slideRight(slideDiff);
        }else{
            var slideDiff = current - index;
            slideLeft(slideDiff);
        }
    });

    // Back to top button
    $("#backtotop-btn").click(function () {
       $("html, body").animate({scrollTop: 0}, 1000);
    });
});