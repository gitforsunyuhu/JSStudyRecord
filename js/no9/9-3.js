window.onload = nameFieldInit;

function nameFieldInit() { 
     var expireDate = new Date();	
     expireDate.setMonth(expireDate.getMonth()-1);
     
     //只需要更改下面中cookie的名称就可以设置其过期时间为上个月，也就相当于过期需要删除
     /* document.cookie = "pageHit=" +1+";expires="+expireDate.toGMTString();
      alert(document.cookie);
     document.getElementById("cishu").innerHTML = "You have visited this page " + time + " times.";*/
    
    
    if(document.cookie!=""&&confirm("you que ding shan chu ?")){
    	var cookies = document.cookie.split("; ");
    	for(var i =0; i<document.cookie.length;i++){
            var cookiename = cookies[i].split("=")[0];
            document.cookie = cookiename+"=1;"+"expires="+expireDate;
    	}
    }
    alert(document.cookie);
} 
