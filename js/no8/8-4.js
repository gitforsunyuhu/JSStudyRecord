
/*
 * 第一个if是针对火狐浏览器的
 */
if (typeof document.oncontextmenu == "object") {
     if (document.all) { 
        document.onmousedown = captureMousedown; 
     } 
     else { 
        document.oncontextmenu = captureMousedown; 
     } 
} 
else { 
     window.oncontextmenu = captureMousedown; 
} 
 
function captureMousedown(evt) { 
     if (evt) { 
        var mouseClick = evt.which; 
     } 
     else { 
        var mouseClick = window.event.button; 
     } 
 
     if (mouseClick==1 || mouseClick==2 || mouseClick==3) { 
        alert("Menu Disabled"); 
        return false; 
     } 
} 