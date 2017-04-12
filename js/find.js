// 扩展API加载完毕后调用onPlusReady回调函数 
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API 
function onPlusReady() {
	console.log("plusready");
}
// 拍照
function captureImage(){
	var cmr = plus.camera.getCamera();
	var res = cmr.supportedImageResolutions[0];
	var fmt = cmr.supportedImageFormats[0];
	console.log("Resolution: "+res+", Format: "+fmt);
	cmr.captureImage( function( path ){
			alert("图片路径" + path)
		},
		function( error ) {
			alert( "图片路径: " + error.message );
		},
		{resolution:res,format:fmt}
	);
}

$('.find-container').on('touchstart',function(){
	captureImage()
})
