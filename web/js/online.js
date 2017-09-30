$(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('.header').addClass('onScroll');
        }else if (scrollTop < 100) {
            $('.header').removeClass('onScroll');
        }
    });
    $('.online-headings').on('click', '.inform-headings-list>div', function() {
        $(this).addClass('active').siblings('div').removeClass('active');
        var dataClass = $(this).attr('data-class');
        console.log(dataClass);
        $('.'+dataClass).siblings('div').addClass('opacityDiv').removeClass('active');
        $('.'+dataClass).removeClass('opacityDiv').addClass('active');
    });
    $('.cont-title-lists').on('click','li>p',function(){
        $(this).next('div.detail-content').slideToggle(500);
    });
    $('.inform-cont-list').on('click','p.inform-cont-title',function(){
        $(this).find('i').toggleClass('closeIcon');
    });
});