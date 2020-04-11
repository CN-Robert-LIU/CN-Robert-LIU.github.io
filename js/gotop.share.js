document.getElementById("#qq_share").addEventListener.('click',function(){
var curUrl0 = window.location.href
var curTitle0 = document.title
if (document.images.length >1){

}
});
document.getElementById("#wx_share").addEventListener.('click',function(){
	var curUrl0 = window.location.href
	var content = document.getElementById('qrcode');
	var qrcode = QRCode(content, {
	  width: 200,
	  height: 200
	})
	var defaultContent = curUrl0;
	qrcode.makeCode(defaultContent);
});
document.getElementById("#qzone_share").addEventListener.('click',function(){});
document.getElementById("#wzone_share").addEventListener.('click',function(){});
function hideWeiXin() {
  var werxinDiv =document.getElementById("weixinDiv")
  weixinDiv.style.display = "none";
}
hideWeiXin();