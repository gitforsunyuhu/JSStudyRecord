document.onmousemove = changeEyesDeraction;

function changeEyesDeraction(evt){
	if(!evt){
		 evt = window.event;
	}
	animateEye(evt.clientX,evt.clientY);
}

function animateEye(xPos,yPos){
	var rightEye = document.getElementById("rEye"); 
     var leftEye = document.getElementById("lEye"); 
     var rightEyeball = document.getElementById("rDot").style; 
     var leftEyeball = document.getElementById("lDot").style; 
 
     leftEyeball.left = newEyeballPos (xPos, leftEye.offsetLeft); 
     leftEyeball.top = newEyeballPos (yPos, leftEye.offsetTop); 
     rightEyeball.left = newEyeballPos (xPos, rightEye.offsetLeft); 
     rightEyeball.top = newEyeballPos (yPos, rightEye.offsetTop); 
 
     function newEyeballPos(currPos,eyePos) { 
     	
     	if(currPos<eyePos+3){
     		return eyePos +3+"px";
     	}else if(currPos<= eyePos+17){
     		return currPos+"px";
     	}else{
     		return eyePos+17+"px";
     	}
     	//下面这个有点迷，一直看的不太懂
        return Math.min(Math.max(currPos,eyePos+3), eyePos+17) + "px"; 
     } 
}
