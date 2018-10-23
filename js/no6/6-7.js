window.onload = initForms;

function initForms() {
	var allFormsLen = document.forms;
	for(var i=0; i<allFormsLen.length ; i++){
		allFormsLen[i].onsubmit = validForm;
	}
	document.getElementById("sunroof").onclick = doorSet; 
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
				/*case "radio":
				if (allGood && !radioPicked (thisTag.name)) { 
                    classBack = "invalid "; 
                 } 
                  classBack += thisClass; 
                 break; 
                case "isNum": 
                case "isZip": */
                case "email": 
                 if (allGood && !validEmail(thisTag.value)) { 
                   classBack = "invalid "; 
                }
                  newClass += thisClass; 
                  break; 
				default:
					/*if(allGood && !crossValid(thisTag,thisClass)) {
						newClass = "invalid ";
					}*/
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
		function radioPicked(radioName) { 
           var radioSet = ""; 
 
           for (var k=0; k<document.forms. length; k++) { 
              if (!radioSet) { 
                 radioSet = document.forms[k][radioName]; 
              } 
           } 
           if (!radioSet) { 
              return false; 
           } 
           for (k=0; k<radioSet.length; k++) { 
              if (radioSet[k].checked) { 
                 return true; 
              } 
           } 
           return false; 
        }
		
		function validEmail(email) { 
           var invalidChars = " /:,;"; 
 
           if (email == "") { 
              return false; 
           } 
           for (var k=0; k<invalidChars.length; k++) { 
              var badChar = invalidChars.charAt(k); 
              if (email.indexOf(badChar) > -1) { 
                 return false; 
              } 
           } 
           var atPos = email.indexOf("@",1); 
           if (atPos == -1) { 
              return false; 
           } 
           if (email.indexOf("@",atPos+1) != -1) { 
              return false; 
           } 
           var periodPos = email.indexOf (".",atPos); 
           if (periodPos == -1) { 
              return false; 
           } 
           if (periodPos+3 > email.length) { 
              return false; 
           } 
           return true; 
        } 
		
		function validLabel(thisLabel){
			thisLabel.className = "invalid " +thisLabel.className;
		}
	}
}
function doorSet() { 
     if (this.checked) { 
        document.getElementById("twoDoor").checked = true; 
     } else{
     	document.getElementById("twoDoor").checked = false; 
     }
} 
