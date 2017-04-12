$(function(){
	var $wrap = $(".wrap");
	$wrap.on("touchstart",function(){
		console.log(0)
		$wrap.removeClass("bottom-border");
		$(this).addClass("bottom-border");
	})
	
	document.addEventListener("plusready",plusready,false);
	function plusready(){
		console.log("硬件准备完毕")
		loadOrder()
	}
	
	var $con = $(".order-container");
	$con.on("touchstart",".cancel-btn",function(){
		cancelOrder(this)
	})
})


function loadOrder(){
	//console.log(plus.storage.getItem("myorder"))
	if(plus.storage.getItem("myorder")){
		var myorder = JSON.parse(plus.storage.getItem("myorder"));
		console.log(myorder);
		$.ajax({
			type:"get",
			url:"../data.json",
			dataType:"josn",
			async:true,
			success:function(data){
				var data = JSON.parse(data);
				console.log(typeof(data))
				for(i in myorder){
					var id = myorder[i];
					$.each(data.projects,function(){
						if(id == this.id){
							console.log(id)
							var html = template("MB",this);
							$(".order-container").append(html);
						}
					})
				}
			}
		});
	};
}


function cancelOrder(that){
	var dataID = $(that).attr("dataID");
	console.log(dataID);
	var myorder = JSON.parse(plus.storage.getItem("myorder"));
	delete myorder[dataID];
	plus.storage.setItem("myorder",JSON.stringify(myorder));
	$(that).parent().remove();
}
