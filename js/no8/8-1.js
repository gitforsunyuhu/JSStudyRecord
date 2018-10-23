/*addOnload(initOne); 
addOnload(initTwo); 
addOnload(initThree);  
 
function addOnload(newFunction) { 
     var oldOnload = window.onload; 
 
     if (typeof oldOnload == "function") { 
        window.onload = function() { 
           if (oldOnload) { 
              oldOnload(); 
           } 
           newFunction(); 
        } 
     } 
     else { 
        window.onload = newFunction; 
     } 
} 
 
function initOne() { 
     document.getElementById("pageBody").style.backgroundColor = "darkgoldenrod"; 
} 
 
function initTwo() { 
     document.getElementById("pageBody").style.color = "#F00"; 
} 
 
function initThree() { 
     var allTags = document.getElementsByTagName("*"); 
 
     for (var i=0; i<allTags.length; i++) { 
        if (allTags[i].nodeName == "H1") { 
           allTags[i].style.border = "5px green solid"; 
           allTags[i].style.padding = "25px"; 
           allTags[i].style.backgroundColor = "#FFF"; 
        } 
     } 
} */


addInit(oneInit);
addInit(twoInit);
addInit(threeInit);

function addInit(newFunction) {
	var oldFunction = window.onload;
	
	if(typeof oldFunction == "function") {
		window.onload = function (){
			if(oldFunction){
				oldFunction();
			}
			newFunction();
		}
	}else {
		window.onload = newFunction;
	}
}

function oneInit(){
	document.getElementById("pageBody").style.background = "#FF6666";
}

function twoInit(){
	document.getElementById("pageBody").className = "invalid";
}

function threeInit(){
	var allTags = document.getElementsByTagName("*");
	for(var i=0 ; i< allTags.length ; i++) {
		if(allTags[i].nodeName =="H1"){
			allTags[i].style.border = "5px red solid";
		}
	}
}
