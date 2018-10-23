/*window.onload = initSelect;
window.onunload = function(){};

function initSelect(){
	document.getElementById("newLocation").options[0].selected = "selected";
	//或者是document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = tiaozhuan;
}

function tiaozhuan(){
	var newSelect = document.getElementById("newLocation");
	var newPage = newSelect.options[newSelect.selectedIndex].value;
	if(newPage !=""){
		window.location = newPage;
	}
}*/

window.onload = initForm;
window.onunload = function() {};

function initForm(){
	//第一步将选项更改为第一项
	document.getElementById("newLocation").selectedIndex = 0;
	//第二步如果选项改变则调用函数 SubmitForm
	document.getElementById("newLocation").onchange = submitForm;
}

function submitForm(){
	var newIndex = document.getElementById("newLocation").selectedIndex;
	var newLoc = document.getElementById("newLocation").options[newIndex].value;
	if(newLoc != ""){
		window.location = newLoc;
	}
}
