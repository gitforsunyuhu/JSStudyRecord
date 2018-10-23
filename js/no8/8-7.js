window.onload = initA;

function initA(){
	var allEles = document.getElementsByTagName("*");
	 alert("asdf");
	for(var i=0; i<allEles.length ;i++){
		if(allEles[i].className =="requ"){
			allEles[i].onblur = checkInput;
		}
	}
}

function checkInput(){
	if(this.value ==""){
	   this.className = "lighthigh";
	   this.focus(); 
	}else{
	   this.className = "requ";
	}
}
