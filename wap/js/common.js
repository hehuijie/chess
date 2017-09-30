$(function(){
	$(window).scroll(function() {
       var scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            console.log('00');
            $('.navbar').addClass('navbar-fixed-top');
        }else if (scrollTop < 100) {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });
    $('#myCarousel').carousel({
        interval: 2000,
    });
    $('#athlecitsScroll').carousel({
        interval: 2000,
    });
    $('.footer-menu').on('click','.wap-footer-menu',function(){
       $(this).find('i').toggleClass('closeRotat');
       $(this).next('div').slideToggle(500);
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
    
    //资讯
    $('.inform-headings').on('click', '.inform-headings-list>div', function() {
		$(this).addClass('active').siblings('div').removeClass('active');
		var dataClass = $(this).attr('data-class');
		$('.'+dataClass).siblings('div').addClass('opacityDiv').removeClass('active');
		$('.'+dataClass).removeClass('opacityDiv').addClass('active');
	});
	$('.inform-cont-list').on('click','p.inform-cont-title',function(){
        $(this).find('i').toggleClass('closeIcon');
        $(this).next('ul').slideToggle(1000);
    }); 
    
    //游戏下载页面
    $('.always-question').on('click','p.inform-cont-title',function(){
    	$(this).find('i').toggleClass('closeIcon');
        $(this).next('ul').slideToggle(1000);
    });
    
    //直播
    $('.online-category').on('click', '.inform-headings-list li', function() {
		$(this).addClass('active').siblings('li').removeClass('active');
		var dataClass = $(this).attr('data-class');
		$('.'+dataClass).siblings('div').addClass('opacityDiv').removeClass('active');
		$('.'+dataClass).removeClass('opacityDiv').addClass('active');
	});
});