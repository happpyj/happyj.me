;(function(){
'use strict';

console.log('\n 卧\n 槽\n ！\n\n 你\n 还\n 懂\n 的\n 不\n 少\n 啊\n ！');


var navTrigger = $('#nav-trigger');
var navbarNav = $('#navbar-nav');
$(document).ready(function(){
	navTrigger.click(function(){
		navbarNav.slideToggle();
	});
});



var navbar = $('.navbar');
var windowTop=0;//初始话可视区域距离页面顶端的距离
$(window).scroll(function() {
	var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
		if(scrolls>=windowTop){//当B>A时，表示页面在向下滑动
		//需要执行的操作
		navbar.fadeOut();
		if ($(window).width()<=767) {
			navbarNav.fadeOut();
		};
		windowTop=scrolls;
		}else{//当B<A时，表示页面在向下上滑动
		//需要执行的操作
		if ($(window).width()>767) {
			var pageTop= $(window).scrollTop() - $('body').offset().top;
			//导航栏上边距
			if (pageTop>915) {
				navbar.css({
	  			'position':'fixed',
	  			'margin-top': 0
	  			})
			} else {
	  			navbar.css({
	  		    'position':'absolute',
	  		    'margin-top':'30px'
	  			})
	  		  };
  		} 
  	// 	else {
  	// 		var pageTop= $(window).scrollTop() - $('body').offset().top;
			// //导航栏上边距
			// if (pageTop>591) {
			// 	navbar.css({
	  // 			'position':'fixed',
	  // 			'margin-top': 0
	  // 			})
			// } else {
	  // 			navbar.css({
	  // 		    'position':'absolute',
	  // 		    'margin-top': 0
	  // 			})
	  // 		  };
  	// 	  }
		navbar.fadeIn();
		windowTop=scrolls;
		}
	});

$('.faded').smoove({
    offset: '30%'
});


var screenWideh = $(document).width();//浏览器当前窗口文档对象宽度
// console.log(screenWideh);
if (screenWideh>812) {
	$('.main-body').css({
	'min-height':screenWideh+'px'
	})
} else {
	$('.main-body').css({
	'min-height':'812'+'px'
	})
  }



})();