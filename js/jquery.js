// JavaScript Document
$(function(){
	$(".left1_main").hover(function(){
		$("#qiehuan1").stop().slideDown(500).css({border:"1px solid #2AB9E7"});
		$("#local1_1").attr("src","img/local-after.png");
		$("#local_title,.left1_tab").fadeIn().css("color","#00A1E9");
	},function(){
		$("#qiehuan1").stop().slideUp(500);
		$("#local1_1").attr("src","img/local.png");
		$("#local_title,.left1_tab").fadeIn().css("color","#6c6c6c");
	})
	//local下拉菜单
	
	$(".list").hover(function(){
		$("#list_cur").stop().slideDown(500).css({border:"1px solid #eee",borderTop:"none",background:"#fff",border:"1px solid #eee",borderBottom:"none"})
	},function(){
		$("#list_cur").stop().slideUp(500);
	})
	//驴妈妈下拉菜单
	
	$(".wechat1").hover(function(){
		$("#qr1").stop().slideDown(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#qr1").stop().slideUp(500);
	})
	
	$(".webo1").hover(function(){
		$("#qr2").stop().slideDown(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#qr2").stop().slideUp(500);
	})
	
	$(".mobiphone1").hover(function(){
		$("#qr3").stop().slideDown(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#qr3").stop().slideUp(500);
	})
	
	$(".phone1").hover(function(){
		$("#qr4").stop().slideDown(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#qr4").stop().slideUp(500);
	})
	//二维码下拉菜单
	
	$(".search2_2").hover(function(){
		$("#qiehuan2").stop().slideDown(500).css({border:"1px solid #2AB9E7"});
		$("#local1_1").attr("src","img/local-after.png");
		$("#local_title").fadeIn().css("color","#00A1E9");
	},function(){
		$("#qiehuan2").stop().slideUp(500);
		$("#local1_1").attr("src","img/local.png");
		$("#local_title").fadeIn().css("color","#6c6c6c");
	})
	//搜索栏下拉菜单
	
	$(".daohang1_0>li").hover(function(){
		$(this).find("div").stop().slideDown(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$(this).find("div").stop().slideUp(500);
	})
	//导航栏下拉菜单
	
	$(".beside1").hover(function(){
		$("#beside_photo1").stop().fadeIn(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#beside_photo1").stop().fadeOut(500);
	})
	
	$(".beside2").hover(function(){
		$("#beside_photo2").stop().fadeIn(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#beside_photo2").stop().fadeOut(500);
	})
	
	$(".beside3").hover(function(){
		$("#beside_photo3").stop().fadeIn(500).css({border:"1px solid #2AB9E7",borderTop:"none"})
	},function(){
		$("#beside_photo3").stop().fadeOut(500);
	})
	//侧边栏图片菜单
	
	$("#qiehuan1").find("a").click(function(){
		var $text = $(this).text();
		$("#local_title").text($text);
		$("#local_title1").text($text);
	})
	
	$("#qiehuan2").find("a").click(function(){
		var $text = $(this).text();
		$("#local_title1").text($text);
	})
	//local地点的切换功能

	
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
			}
			
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
			$(this).children(".banner_a").css({width:1070, height:400});

		},function(){
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
			$(this).find("a").css({color:"#f08333"});
			$(this).siblings().find("a").css({color:"#fff"});
			$(this).addClass("main3_tab_current");
			$(this).siblings().removeClass("main3_tab_current");
			var index = $(this).index();
			var $li = $(".main3_tab_content>li").eq(index);
			$li.animate({opacity:1},300,function(){
				$li.addClass("main3_tab_show");
			})
			$li.siblings().animate({opacity:0},300,function(){
				$li.siblings().removeClass("main3_tab_show");
			})
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
			if(($("html").scrollTop()+$("body").scrollTop()) != 0){
			$("html, body").stop().animate({scrollTop:0},500).animate({marginTop:10},200).animate({marginTop:0},200);
			}
			else{
				$("html, body").stop().animate({marginTop:10},200).animate({marginTop:0},200);
		}
		});

	//top键
	
	$(".back_top").mouseenter(function(){
			$(this).stop().animate({top:-30},500,function(){
				$(this).stop().animate({top:0},500,function(){
					$(this).stop().animate({top:-10},500)});
			});
		});
	
	$(window).scroll(function(){
			var offset = ($("html").scrollTop()+$("body").scrollTop());
			if(offset >= 400){
				$(".back_top").stop().animate({top:0},500,function(){
					$(".back_top").stop().animate({top:-30},500,function(){
						$(".back_top").stop().animate({top:-10},500)});
				});
			}
			else{
				$(".back_top").stop().animate({top:-600},300);
			}
		})
	
	$(".back_top").click(function(){
		if(($("html").scrollTop()+$("body").scrollTop()) != 0){
		$("html, body").stop().animate({scrollTop:0},500).animate({marginTop:10},200).animate({marginTop:0},200);
		}
		else{
			$("html, body").stop().animate({marginTop:10},200).animate({marginTop:0},200);
		}
		})
	//scroll-to-top功能
	
	$(".beside3, .left1_login").click(function(){
		$("#login").stop().fadeIn().removeClass("login_slect");
		$(".back_top").stop().animate({top:-600},300);
	});
	$(".login_cancel").click(function(){
		$("#login").stop().fadeOut().addClass("login_slect");
	})
	
	//LOGIN功能
	
	
	var change = 0;
	$(".leftFloat ul li").hover(function(){
		if(change%2 == 0){
			$(this).addClass("leftFloatOn2");
			$(this).siblings().removeClass("leftFloatOn2");
		}else{
			$(this).addClass("leftFloatOn1");
			$(this).siblings().removeClass("leftFloatOn1");
		}
	},function(){
		if(change%2 == 0){
			$(this).removeClass("leftFloatOn2");
		}else{
			$(this).addClass("leftFloatOn1");
			$(this).siblings().removeClass("leftFloatOn1");
		}
	});
	
	$(".leftFloat ul li").click(function(){
		change++;
		if(change%2 != 0){
			$(this).addClass("leftFloatOn2");
			$(this).siblings().removeClass("leftFloatOn1").removeClass("leftFloatOn2");
		}else{
			$(this).addClass("leftFloatOn1");
			$(this).siblings().removeClass("leftFloatOn1").removeClass("leftFloatOn2");
		}
		var height = 500 * $(this).index();
		$("html, body").stop().animate({scrollTop:1350+height}, 1000);
	})
	
	$(window).scroll(function(){
			var offset = ($("html").scrollTop()+$("body").scrollTop());
			if(offset >= 1350){
				$(".leftFloat").stop().slideDown(1000);
			}
			else{
				$(".leftFloat").stop().slideUp(1000);
			}
			if(change %2 == 0){
				var leftChange1 = "leftFloatOn1";
				var leftChange2 = "";
			}else{
				var leftChange1 = "leftFloatOn2";
				var leftChange2 = "leftFloatOn1";
			}
			if(offset < 1650){
				$(".leftFloat ul li").eq(0).addClass(leftChange1);
				$(".leftFloat ul li").eq(0).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}else if(offset < 2150){
				$(".leftFloat ul li").eq(1).addClass(leftChange1);
				$(".leftFloat ul li").eq(1).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}else if(offset < 2650){
				$(".leftFloat ul li").eq(2).addClass(leftChange1);
				$(".leftFloat ul li").eq(2).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}else if(offset < 3150){
				$(".leftFloat ul li").eq(3).addClass(leftChange1);
				$(".leftFloat ul li").eq(3).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}else if(offset < 3450){
				$(".leftFloat ul li").eq(4).addClass(leftChange1);
				$(".leftFloat ul li").eq(4).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}else{
				$(".leftFloat ul li").eq(5).addClass(leftChange1);
				$(".leftFloat ul li").eq(5).siblings().removeClass(leftChange1).removeClass(leftChange2);
			}
		})
	//leftFloat
	

})
