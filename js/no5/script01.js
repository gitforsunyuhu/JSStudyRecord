window.onload = initFrame;

function initIframe(){
	if(top.location !=self.location){
		top.location.replace(self.location);		
	}
}
