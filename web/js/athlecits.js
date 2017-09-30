$(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('.header').addClass('onScroll');
        }else if (scrollTop < 100) {
            $('.header').removeClass('onScroll');
        }
    });
    // 循环轮播到某个特定的帧 
    $(".slide-one").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function() {
        $("#myCarousel").carousel(2);
    });
    $('.downLoad-icon').on('mouseover','span.click-download',function(){
        $(this).addClass('hoverBut')
    });
    $('.downLoad-icon').on('mouseout','span.click-download',function(){
        $(this).removeClass('hoverBut');
    });
    $('.cont-title-lists').on('click','li>p',function(){
        $(this).next('div.detail-content').slideToggle(500);
    });
    $('.always-question').on('click','p.inform-cont-title',function(){
        $(this).find('i').toggleClass('closeIcon');
        $(this).next('ul').slideToggle(1000);
    });
});