window.onload = initForms;

function initForms() {
	var allFormsLen = document.forms;
	for(var i=0; i<allFormsLen.length ; i++){
		allFormsLen[i].onsubmit = validForm;
	}
}

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");
	
	for(var i=0 ;i<allTags.length ;i++) {
		if(!validTags(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;
	
	function validTags(thisTag) {
		var newClasses = "";
		var allClasses = thisTag.className.split(" ");
		for(var j = 0 ; j<allClasses.length ;j++){
			newClasses += validClass(allClasses[j]) +" ";
		}
		thisTag.className  = newClasses;  //第一次少了关键的部分
		
		if(newClasses.indexOf("invalid") > -1) {
			validLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName =="INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validClass(thisClass){
			var newClass = "";
			switch(thisClass){
				case "":
				case "invalid":
					break;
				case "reqd":
					if(allGood && thisTag.value == ""){
						newClass = "invalid ";
					}
					newClass += thisClass;
					//alert(thisClass)
					break;
				case "radio": 
                case "isNum": 
                case "isZip": 
                case "email": 
                  newClass += thisClass; 
                  break; 
				default:
					if(allGood && !crossValid(thisTag,thisClass)) {
						newClass = "invalid ";
					}
				   newClass += thisClass;
			}
			return newClass;
		}
		
		function crossValid(thisTag,otherId){
			if(!document.getElementById(otherId)){
				return false;
			}
			return (thisTag.value != "" || document.getElementById(otherId).value != ""); 
			
		}
		function validLabel(thisLabel){
			thisLabel.className = "invalid " +thisLabel.className;
		}
	}
}
