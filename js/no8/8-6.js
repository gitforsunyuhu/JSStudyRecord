window.onload = initFun;

function initFun(){
	for(var i=0;i<document.images.length; i++){
		document.images[i].ondblclick = getBigPic;
	}
}

function getBigPic(){
	var picName = this.id;
	//scrollbars=no 是表示新窗口中没有滚动栏
	var windowOpen = window.open("img/"+picName+".jpg","PicWin","width:600px;height:400px;scrollbars=no");
}
