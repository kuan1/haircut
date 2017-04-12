$(".where-menu>p").click(function(){
	$(".sort").stop(true).hide();
	$(".submenu").stop(true).slideToggle();
});

$(".where-menu").on("touchstart",".place",function(){
	$(".grandmenu").hide();
	$(this).next().show();
	$(".place").removeClass("active");
	$(this).addClass("active");
});

$(".where-menu").on("touchstart",".grandmenu>li",function(){
	$(".grandmenu>li").removeClass("active");
	$(this).addClass("active");
})

$(".hairdresser").on("touchstart",".sort>li",function(){
	$(".sort>li").removeClass("active");
	$(this).addClass("active");
})

$(".auto-sort").click(function(){
	$(".where-menu .submenu").stop(true).hide();
	$(".sort").stop(true).slideToggle();
})


$(function(){
	getDresser();
})
//加载数据
function getDresser(){
	$.ajax({
		type:"get",
		url:"../data.json",
		dataType:"json",
		async:true,
		success:function(data){
			//console.log(data);
			var data = data.dresser;
			console.log(data);
			var _content = $("#content");
			$.each(data, function() {
				var html = template("MB",this);
				_content.append(html);			
			});
		}
	});
}
