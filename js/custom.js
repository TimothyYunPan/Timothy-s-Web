$(document).ready(function(){

	// header color change 
	$(window).on("scroll",function(){
		var scrolldistance = $(window).scrollTop();
		var $header = $(".js-header"); 
		if(scrolldistance > 80){
			$header.addClass("header--colored")
		} 
		else{
			$header.removeClass("header--colored")
		}
	})

	//wow plugin initialize//
	if (screen.width > 768) {
		new WOW().init();
	}

	//fancybox plugin options
	// $('[data-fancybox]').fancybox({
	// 	loop：true
	// });

	//stellar plugin initialize
	if (screen.width > 768) {
		$(window).stellar();
	}
})