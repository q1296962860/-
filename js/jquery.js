// JavaScript Document
$(function(){
	var banner_offset = 0;
	var banner_timer;
	var banner_num = 0;
	function banner_roll(offset, num){
			banner_timer = setInterval(function(){
			offset += -1070;
			num++;
			if(offset <= -7490){
				offset = 0;
			}
//			console.log(offset);
//			console.log(num);
			if(num%7 == 0){
				$("#main_banner").css("marginLeft",offset);
			}
			else{
			$("#main_banner").stop().animate({marginLeft:offset}, 1000);
			};
			
			if(num%7 == 6){
				$("#main_nav>button").eq(0).addClass("current");
				$("#main_nav>button").eq(0).siblings().removeClass("current");
			}
			else{
				$("#main_nav>button").eq(num%7).addClass("current");
				$("#main_nav>button").eq(num%7).siblings().removeClass("current");
			}
		}, 4000);
	}
	
	banner_roll(banner_offset, banner_num);
	
	$("#main_banner>li").hover(function(){
			clearInterval(banner_timer);
			$(this).stop().siblings().fadeTo(100, 0.5);
			$(this).stop().fadeTo(100, 1);
		},function(){
			var index = $(this).index();
			var photo_offset = index*-1070;
			banner_roll(photo_offset, index);
			$("#main_banner>li").stop().fadeTo(100, 1);
		});
	
	
	
	$("#main_nav>button").hover(function(){
			clearInterval(banner_timer);
			var index = $(this).index();
			var photo_offset = index*-1070;
			$("#main_banner").stop().animate({marginLeft:photo_offset}, 1000);
			$("#main_nav>button").eq(index).addClass("current");
			$("#main_nav>button").eq(index).siblings().removeClass("current");
		},function(){
			var index = $(this).index();
			var photo_offset = index*-1070;
			banner_roll(photo_offset, index);
	})
	
})
