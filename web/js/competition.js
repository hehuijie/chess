$(function(){
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('.header').addClass('onScroll');
        }else if (scrollTop < 100) {
            $('.header').removeClass('onScroll');
        }
    });
	//活动列表
	$('.activity-list').on('click','li.activity-title',function(){
		$(this).find('span.close i').toggleClass('closeIcon');
	});
	
	$('.cont-title-lists').on('click','li>p',function(){
        $(this).next('div.detail-content').slideToggle(500);
    });
    $('.activity-list').on('click','p.inform-cont-title',function(){
        $(this).find('i').toggleClass('closeIcon');
        $(this).next('ul').slideToggle(1000);
    });
});