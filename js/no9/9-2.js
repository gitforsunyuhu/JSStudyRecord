window.onload = nameFieldInit;

function nameFieldInit() { 
     
     var expireDate = new Date();
     expireDate.setMonth(expireDate.getMonth()+6);
     
     var time = parseInt(cookieVal("su"));
     time++;
    
     
     document.cookie = "su=" +time+";expires="+expireDate.toGMTString();
     // alert(document.cookie);
     document.getElementById("cishu").innerHTML = "You have visited this page " + time + " times.";
} 
function cookieVal(name){
	var cookies = document.cookie.split("; ");
    
    for(var i= 0; i< cookies.length ;i++){
		if(name == cookies[i].split("=")[0]){
			return cookies[i].split("=")[1];
		}
    }
    return 0;
}
