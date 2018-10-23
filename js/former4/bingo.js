
window.onload = initBingo;
var bingoarr =new Array(76);

function initBingo(){
	if(document.getElementById){
		document.getElementById("click1").onclick = getCard;
		newCard();
	}else{
		alert("buzhichi");
	}
		
}

function getNum(){
   return	Math.floor(Math.random() * 15) + 1;
} 

function newCard(){
	var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	for(var i=0 ;i<24; i++){
		var gotNum = 0;
		var newNum = colPlace[i]*15; 
		do{
			gotNum =newNum +  getNum() ;
		}while(bingoarr[gotNum]);
		var currSquare   = "square"+i;
		bingoarr[gotNum] = true;
		 document.getElementById(currSquare).className = ""; 
         document.getElementById(currSquare).onmousedown = toggleColor; 
		 document.getElementById(currSquare).innerHTML = gotNum;
	}
}

function getCard(){
	
	for(var i=0; i<bingoarr.length;i++){
		bingoarr[i]=false;
	}
	newCard();
	
	return false;
}

function toggleColor(evt) { 
     if (evt) { 
        var thisSquare = evt.target; 
     } 
     else { 
        var thisSquare = window.event.srcElement; 
     } 
     if (thisSquare.className == "") { 
        thisSquare.className = "pickedBG"; 
     } 
     else { 
        thisSquare.className = ""; 
     } 
     
     
     var thisS = null;
     if(evt) {
     	thisS = evt.target;
     }else{
     	thisS = window.event.srcElement;
     }
     if(thisS.className == ""){
     	thisS.className = "pickedBG";
     }else{
     	thisS.className = "";
     }
}