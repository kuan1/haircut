$(function(){
	//百度地图
	document.addEventListener( "plusready", onPlusReady, false );
	function onPlusReady() {
		plus.geolocation.getCurrentPosition( function ( p ) {
			getPos(p.coords.latitude,p.coords.longitude)
			} );
	};
	$("#myPos").click(function(){
		$("#allmap").slideToggle();
	})
	
	$("#product").on("click",".person",function(){
		var dataID = $(this).attr("dataID");
		//console.log(dataID);
		window.location = "html/detail.html?dataID=" + dataID
	})
})

	// 百度地图API功能
	function getPos(x,y){
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(x,y);
		map.centerAndZoom(point,15);
	
		function myFun(result){
			var cityName = result.name;
			map.setCenter(cityName);
			$("#myPos").text(cityName)
		}
		var myCity = new BMap.LocalCity();
		myCity.get(myFun);
	}

//轮播图
$.ajax({
	type:"get",
	url:"data.json",
	dataType:"json",
	async:true,
	success:function(data){
		//console.log(data);
		//加载购物车
		var swiperWra = $("#swiper-wrapper");
		//console.log(swiperWra);
		var html = template("MB",data);
		swiperWra.append(html);
		setTimeout(function(){
			loadSwiper()
		},500);
		
		//加载图片
		//console.log(data.projects);
		var product = $("#product");
		$.each(data.projects,function(){
			//console.log(this);
			var html = template("itemMB",this);
			product.append(html);
		})
	}
});
function loadSwiper(){
	var swiper = new Swiper("#swiper-container",{
		autoplay:2500,
		loop:true,
		autoplayDisableOnInteraction:false,
		pagination:".swiper-pagination",
		paginationClickable:true
	})
}

