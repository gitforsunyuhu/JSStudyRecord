document.onkeydown = hitKey;
var firstPic = 0;  //一定要将这个作为全局变量，不然的话只可以执行一次hitKey,就不行了

function hitKey(evt){
	var lkey = 37;
	var rkey = 39;
	var Pictures = Array("img/callisto.jpg","img/europa.jpg");
	
	if(evt){
		var keyValue = evt.which;
	}else{
		var keyValue = window.event.keyCode;
	}
	
	if(keyValue == lkey){
		newPic(-1);
	}else if(keyValue == rkey){
		newPic(1);
	}
	 return false; 
	function newPic(changeIndex){
		if(firstPic + changeIndex >= Pictures.length){
			firstPic = 0;
		}else if(firstPic + changeIndex < 0){
			firstPic = Pictures.length -1;
		}else {
			firstPic +=changeIndex; 
		}
		document.getElementById("sunyuhu").src = Pictures[firstPic];
	}
}