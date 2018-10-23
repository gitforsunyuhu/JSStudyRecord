

//script04 内容如下
//alert("welcome to my page!!")


//script2-7 内容如下

/*if (confirm("Are you sure you want to do that?")) { 
	//confirm 函数表示的是弹出的会话框中，你选择的是什么？如果为确定则返回的值为true，反之为false
     alert("You said yes"); 
} 
else { 
     alert("You said no"); 
}  */

//script2-8 内容如下

/*var ans = prompt("Are you sure you want to do that?",""); */
//prompt函数的意义是返回用户输入的内容，如果没有输入则第二个参数即为默认的输入内容

/*if (ans) { 
     alert("You said " + ans); 
} 
else { 
     alert("You refused to answer"); 
}  */

//脚本2-10 内容如下
window.onload = initAll;
function initAll(){
	document.getElementById("myMessage").onclick = initRedect;
}

function initRedect(){
	alert("aaa");
	window.location = this;
	return false;
}
