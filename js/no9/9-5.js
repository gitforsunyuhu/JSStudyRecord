window.onload = initNew;

function initNew(){
	//获取所有的a
    var allaa = document.getElementsByTagName("a");
	//获取cookie的值
	var lastDate = new Date(cookieVal("pageTime"));
	var now = new Date();
	var newDate = new Date();
	newDate = newDate.setMonth(newDate.getMonth()+6);
	
	document.cookie = "pageTime="+now +";expires="+ newDate;
	
	for(var i=0; i<allaa.length ;i++){
		if(allaa[i].id.indexOf("new-")!= -1){
			checkNew(allaa[i].id.substring(4),allaa[i]);
		}
	}
	
	
	function checkNew(thisDate,thisEle){
		var yyyy = parseInt(thisDate.substring(0,4),10);
		var mm = parseInt(thisDate.substring(4,6),10);
		var dd = parseInt(thisDate.substring(6,8),10);
		var date1= new Date(yyyy,mm-1,dd);
		if(date1.getTime() > lastDate.getTime()){
			thisEle.className +=" new1";
		}
	}
	
}

function cookieVal(thisCookie){
	var cookies = document.cookie.split("; ");
	for(var i=0; i< cookies.length; i++){
		if(thisCookie == cookies[i].split("=")[0]){
			return cookies[i].split()[1];
		}
	}
	return "1 January 1970";
}
