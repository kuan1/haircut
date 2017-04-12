$(function(){
	loadSwiper();
	loadDetail();
	
	document.addEventListener( "plusready", onPlusReady, false );
	function onPlusReady() {
		console.log("plusready");
	}
	$("#yuyue").on('touchstart',function(){
		var id = getID("dataID");
		var myorder;
		if(plus.storage.myorder){
			myorder = JSON.parse(plus.storage.myorder);
		}else{
			myorder = {};
		}
		myorder[id] = id;
		plus.storage.setItem('myorder',JSON.stringify(myorder));
		console.log(plus.storage.getItem("myorder"))
	})
	
})

function loadSwiper(){
	var swiper = new　Swiper(".swiper-container",{
		autoplay:2500,
		loop:true,
		autoplayDisableOnInteraction:false,
		pagination:'.swiper-pagination'
	})
}

function loadDetail(){
	var id = getID("dataID");
	$.ajax({
		type:"get",
		url:"../data.json",
		dataType:"josn",
		async:true,
		success:function(data){
			$.each(data.projects,function(){
				//console.log(this)
				if(this.id == id){
					$("#teacherName").text(this.nickname);
					$(".first-slide img").attr("src","../" + this.img)
					console.log($(".first-slide img"))
				}
			})
		}
	});
}

function getID(id){
	var reg = new RegExp("(^|&)"+id+"=([^&]*)(&|$)")
	//console.log(reg)
    var r = window.location.search.substr(1).match(reg);
    //console.log(r[2])
    return r[2];
}