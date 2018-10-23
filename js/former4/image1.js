window.onload = initRollover;

function initRollover(){
	for(var i=0 ; i<document.images.length ; i++){
		if(document.images[i].parentNode.tagName == "A"){
			setRollover(document.images[i]);
		}
	}
}

function setRollover(thisImage){
	thisImage.overImage = new Image();
	thisImage.overImage.src ="img/" + thisImage.id + "_on.jpg";
	thisImage.onmouseover = function(){
		thisImage.src = thisImage.overImage.src;
	}
	
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function(){
		thisImage.src = thisImage.outImage.src;
	}
	
	thisImage.downImage = new Image();
	thisImage.downImage.src ="img/" + thisImage.id + "_down.jpg";
	thisImage.onclick = function(){
		thisImage.src = thisImage.downImage.src;
	}
}
