window.onload = initAd;

var i=0;
function initAd(){
	var ads = new Array("img/img1.jpg","img/flyer.png", "img/helicopter.png");
	
	document.getElementById("ad").src = ads[i++%3];
	
	setTimeout(initAd,1000);
}
