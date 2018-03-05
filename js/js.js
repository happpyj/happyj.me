

// http跳转https
var url=window.location.href;
if (url.indexOf("http:")>=0) {			//判断是否为http
	url=url.replace("http:","https:")  	//https替换
    window.location.replace(url);		//地址加载
};
// console.log(url.indexOf("http:"));


var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5e3819462976e5231fa55b9c6d2d7c67";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();




