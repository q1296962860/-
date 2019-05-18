// JavaScript Document
//player区域
$(function(){
	//初始化
	$(".player").find(".player_max").hide(0);
	//player区域的最大化
	$(".play").delegate(".player_small i","click",function(){
		$(".player").stop().animate({opacity:0},300,function(){
			$(".player_min").hide(0);
			$(".player_max").show(0);
			$(".player").addClass("player_big").removeClass("player_small");
		});
		$(".player").animate({opacity:1},700);
	})
	//player区域的最小化
	$(".play").delegate(".player_big i","click",function(){
		$(".player").stop().animate({opacity:0},400,function(){
			$(".player_max").hide(0);
			$(".player_min").show(0);
			$(".player").addClass("player_small").removeClass("player_big");
		}).animate({opacity:0.5},600);
	})
	//最小化后的透明度变化
	$(".player_min").hover(function(){
		$(".player_small").stop().animate({opacity:1},500)
	},function(){
		$(".player_small").stop().animate({opacity:0.5},500)
	})
	//最大化的背景变换
	var s1 = 1;
	function bgChange1(){
		var change = setInterval(function(){
			s1++;
			if(s1 == 7){s1 = 1};
//			console.log(s1);
			$(".backg1").animate({opacity:0.7},1000,function(){
				$(".backg1").attr({style:"background: url( 'img/banner"+s1+".jpg') no-repeat"});
			});
		},5000)
	}
	bgChange1();
	//最小化的背景变换
	function bgChange2(){
		var change = setInterval(function(){
			s1++;
			if(s1 == 7){s1 = 1};
			$(".backg3").animate({opacity:0.7},1000,function(){
				$(".backg3").attr({style:"background: url( 'img/banner"+s1+".jpg') no-repeat"});
			});
		},5000)
	}
	bgChange2();
	//按钮的切换
	var clickNum = 1
	$(".player_footer_pause").click(function(){
		if(clickNum == 1){
			$(this).attr({style:"background: url('img/暂停.png') no-repeat;"});
			clickNum = 2;
		}else{
			$(this).attr({style:"background: url('img/播放.png') no-repeat;"});
			clickNum = 1;
		}
	})
	//控制主进度条
		//点击事件
	$(".music_progress_bar").click(function(e){
		var nowX = e.pageX - 608;
		if(nowX<6){
			nowX = 6
		}
//		console.log(nowX);
		$(".music_progress_line").stop().animate({width:nowX},500);
		$(".music_progress_dot").stop().animate({left:nowX-7},500);

	})
		//拖动事件
	$(".music_progress_bar").mousedown(function(){
		$(document).mousemove(function(e){
			var nowX = e.pageX - 608;
			if(nowX<6){
				nowX = 6
			}
			if(nowX>700){
				nowX = 700
			}
			$(".music_progress_line").css({width:nowX},500);
			$(".music_progress_dot").css({left:nowX-7},500);
//			console.log(nowX);
		});
	});
	$(document).mouseup(function(){
		$(document).off("mousemove");
	});
	//控制次进度条
		//点击事件
	$(".music_voice_bar").click(function(e){
		var nowX1 = e.pageX - 1375;
		if(nowX1<6){
			nowX1 = 6
		}
//		console.log(nowX1);
		$(".music_voice_line").stop().animate({width:nowX1},500);
		$(".music_voice_dot").stop().animate({left:nowX1-7},500);

	})
		//拖动事件1375-1512
	$(".music_voice_bar").mousedown(function(){
		$(document).mousemove(function(e){
			var nowX1 = e.pageX - 1375;
			if(nowX1<6){
				nowX1 = 6
			}
			if(nowX1>137){
				nowX1 = 137;
			}			
			$(".music_voice_line").css({width:nowX1},500);
			$(".music_voice_dot").css({left:nowX1-7},500);

		});
	});
	$(document).mouseup(function(){
		$(document).off("mousemove");
	});
})