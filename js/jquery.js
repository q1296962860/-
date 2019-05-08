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
			$(this).stop().siblings().fadeTo(100, 0.5);
			$(this).stop().fadeTo(100, 1);
			$(this).children(".banner_a").css({width:1070, height:400});

		},function(){
			$("#main_banner>li").stop().fadeTo(100, 1);
			$(this).children(".banner_a").css({width:0, height:0});
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
	});
	//banner的滚动
	
	$(".main3_box>ul>li").mouseenter(function(){
			$(this).addClass("main3_current");
			$(this).siblings().removeClass("main3_current");
		})
	//折叠菜单
	
	$(".main3_tab_nav>li").mouseenter(function(){
			$(this).addClass("main3_tab_current");
			$(this).siblings().removeClass("main3_tab_current");
			var index = $(this).index();
			var $li = $(".main3_tab_content>li").eq(index);
			$li.addClass("main3_tab_show");
			$li.siblings().removeClass("main3_tab_show");
		})
	//TAB面板
	
	$(".beside4").mouseenter(function(){
			$(".beside4_1_1").stop().animate({top:-20},500,function(){
				$(".beside4_1_1").stop().animate({top:10},500,function(){
					$(".beside4_1_1").stop().animate({top:0},500)});
			});
		});
	
	$(".beside4").click(function(){
			$(".beside4_1_1").stop().animate({top:-60},500,function(){
				$(".beside4_1_1").css("top","80px");
				$(".beside4_1_1").stop().animate({top:-10},400,function(){
					$(".beside4_1_1").stop().animate({top:0},200)});
			});
		});
	//top键
	
	$(window).scroll(function(){
			var offset = ($("html").scrollTop()+$("body").scrollTop());
			if(offset >= 400){
				$(".back_top").stop().animate({top:0},500);
			}
			else{
				$(".back_top").stop().animate({top:-900},500);
			}
		})
	//scroll-to-top
	
	$(function(){
	$(".beside4_1, .back_top").click(function(){
		if(($("html").scrollTop()+$("body").scrollTop()) != 0){
		$("html, body").stop().animate({scrollTop:0},500).animate({marginTop:10},200).animate({marginTop:0},200);
		}
		else{
			$("html, body").stop().animate({marginTop:10},200).animate({marginTop:0},200);
		}
		})
	});
	//top与back_top按钮
})
