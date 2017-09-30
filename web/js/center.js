$(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('.header').addClass('onScroll');
        }else if (scrollTop < 100) {
            $('.header').removeClass('onScroll');
        }
    });
    $('.service-center-menu').on('click','li.center-categry>p',function(){
        $('.service-center-menu ul li.center-categry>p').removeClass('active');
        $(this).addClass('active');
        var dataClass = $(this).attr('data-class');
        $('.'+dataClass).removeClass('hide').siblings('div').addClass('hide');
    });
});