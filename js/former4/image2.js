window.onload = initRollover;

function initRollover(){
	for(var i=0 ; i<document.links.length ; i++){
		if(document.links[i]){
			var tupian = document.getElementById(document.links[i].id +"Img");
			if(tupian){
				setRollover(tupian, document.links[i]);
			}
		}
	}
}

function setRollover(thisImage , thisLink){
	
	thisLink.onmouseover = function(){
		thisImage.src = thisImage.overImage.src;
	}
	
	
	thisLink.onmouseout = function(){
		thisImage.src = thisImage.outImage.src;
	}
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	
	thisImage.overImage = new Image();
	thisImage.overImage.src ="img/" + thisImage.id + "_on.jpg";
}
