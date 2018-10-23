window.onload = initForm;

function initForm(){
	/*第一版本
	 * var nochange = document.getElementById("nochange");
	nochange.onfocus = function (){
		nochange.blur();
	}*/
	var allElements = document.getElementsByTagName("*");
	for(var i=0; i<allElements.length ; i++){
        if(allElements[i].readOnly){
        	allElements[i].focus = function(){
        	    this.blur();
        	}
        }
	}
}
