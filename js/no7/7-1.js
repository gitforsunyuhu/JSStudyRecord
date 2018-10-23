window.onload = initForms;

function initForms() { 
     for (var i=0; i< document.forms.length;i++) { 
        document.forms[i].onsubmit = validForm; 
     } 
} 

function validForm(){
	var allGood = true;
	var allTags = documen.getElementsByTagName("*");
	for(var j=0; j<allTags.length; j++){
		if(!validTag(allTags[j])) {
			allGood = false;
		}
	}
	return allGood;
	
	function validTag(thisTag) {
		var allClasses = thisTag.className.split(" ");
		var newClass = ""
		for(var k =0 ;k<allClasses.length ; k++)  {
			newClass += validClass(allClasses[k]) + " ";
		}
		
		thisTag.className = newClass;
		if(newClass.indexOf("invalid")> -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if(thisTag.nodeName == "INPUT"){
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validClass(thisClass) {
			var newClass ="";
			switch(thisClass) {
				case "" :
				case "invalid":
				    break;
				case "email":
					if(!valid(thisTag.value)) {
						newClass = "invalid ";
				    }
				    newClass += thisClass;
				    break;
				default :
				    newClass += thisClass;
			}
			return newClass;
		}
	}
	
	function invalidLabel(inTag){
		if(inTag.nodeName == "LABEL"){
			inTag.className += " invalid"; 
		}
	}
	function validEmail(thisEmail) {
		if(thisEmail == "") {
			return false;
		}
		return true;
	}
	
}
