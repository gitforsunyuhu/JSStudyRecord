window.onload = nameFieldInit; 
 
function nameFieldInit() {  
     var userName = ""; 
     if (document.cookie != "") { 
        userName = document.cookie.split("=")[1]; 
     } 
 
     document.getElementById("username").value = userName; 
     document.getElementById("username").onblur = setCookie; 
     document.getElementById("myForm").onsubmit = setCookie; 
} 
 
 
function setCookie() { 
     var expireDate = new Date(); 
     expireDate.setMonth(expireDate.getMonth()+6); 
 
     var userName = document.getElementById ("username").value; 
     document.cookie = "userName=" + userName + ";expires=" + expireDate.toGMTString(); 
 
     document.getElementById("username").blur(); 
     return false; 
} 
