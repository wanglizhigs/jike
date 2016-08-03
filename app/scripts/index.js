$(function(){
	 /*输入框效果*/
	$(".jk-input-box .jk-ipt").on("focus",function(){
		$(this).parents(".jk-input-box").find(".jk-layar").hide();
		$(this).parents(".jk-input-box").find(".jk-btn ").addClass("active");
	});
	$(".jk-input-box .jk-ipt").on("blur",function(){
		$(this).parents(".jk-input-box").find(".jk-layar").show();
		$(this).parents(".jk-input-box").find(".jk-btn ").removeClass("active");
	});
	/*主菜单效果*/
	$(".jk-main-nav").on("mouseover",function(){
		window.clearInterval(int);
		$(".jk-wrap-top .jk-layar-box").show();
	});
	var int;
	$(".jk-main-nav").on("mouseleave",function(){
		int=self.setInterval(function(){
			$(".jk-wrap-top .jk-layar-box").hide();
		},100);
	});
	$(".jk-wrap-top .jk-layar-box").on("mouseover",function(){
		window.clearInterval(int);
	});
	$(".jk-wrap-top .jk-layar-box").on("mouseleave",function(){
		$(".jk-wrap-top .jk-layar-box").hide();
	});
	
	$(".jk-main-nav li").on("mouseover",function(){
		$(".jk-layar-nav .item-box").removeClass("active");
		if($(this).index() > 0){
			var _index = $(this).index()-1;
			$(".jk-layar-nav .item-box:eq("+_index+")").addClass("active");
		}
	});
	/*侧栏菜单效果*/
	$(".jk-container .item1 .list-group-item").on("mouseover",function(){
		$(".jk-container .item1 .jk-layar-box").show();
		$(".jk-container .item1 .jk-layar-box .jk-nav-box:eq("+$(this).index()+")").show();
		
	});
	$(".jk-container .item1 .list-group-item").on("mouseleave",function(){
		$(".jk-container .item1 .jk-layar-box").hide();
		$(".jk-container .item1 .jk-layar-box .jk-nav-box:eq("+$(this).index()+")").hide();
		
	});
	
	/*教师效果*/
	$(".jk-teacher-box").on("mouseover",function(){
		$(this).find(".jk-course-desc").fadeIn(500);
	});
	$(".jk-teacher-box").on("mouseleave",function(){
		$(this).find(".jk-course-desc").fadeOut(500);
	});
	/*课程效果*/
	$(".item6 .jk-box").on("mouseover",function(){
		$(this).find(".jk-course-desc").fadeIn(500);
		$(this).css({
			"border-color":"#35b558"
		});
	});
	$(".item6 .jk-box").on("mouseleave",function(){
		$(this).find(".jk-course-desc").fadeOut(500);
		$(this).css({
			"border-color":"#e4e4e4"
		});
	});
	/*table效果*/
	$(".item3 .jk-slide-nav li").on("mouseover",function(){
		$(".item3 .jk-slide-nav li").removeClass("active");
		$(this).addClass("active");
		$(".item3 .jk-slide-cont .jk-slide-item").hide();
		$(".item3 .jk-slide-cont .jk-slide-item:eq("+$(this).index()+")").show();
	});
	
	$(".jk-slide-cont .jk-slide-item li").on("mouseover",function(){
		$(this).find(".jk-slide-shuoming").slideDown(500);
	});
	
	$(".jk-slide-cont .jk-slide-item li").on("mouseleave",function(){
		$(this).find(".jk-slide-shuoming").slideUp(500);
	});
	
	$(".item5 .jk-item").on("mouseover",function(){
		$(this).find(".jk-3d-box").addClass("active");
	});
	
	$(".item5 .jk-item").on("mouseleave",function(){
		$(this).find(".jk-3d-box").removeClass("active");
	});
});