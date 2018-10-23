/*window.onload = initDay;

function initDay(){
	document.getElementById("month").selectedIndex = 0;
	document.getElementById("month").onchange = getDay;
}

function getDay(){
	var month = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
	
	var mon =document.getElementById("month");
	
	var theMon = mon.options[mon.selectedIndex].value;
	
	if(theMon != ""){
		var count = parseInt(theMon);
		
		 document.getElementById("day").options.length = 0; 
		 
		for(var i=0;i< month[count] ; i++){
			document.getElementById("day").options[i] = new Option(i+1);
		}
	}
}

*/

window.onload = initDate;

function initDate(){
	document.getElementById("month").selectedIndex = 0;
	document.getElementById("day").selectedIndex = 0;
	document.getElementById("month").onchange = getDay;
}

function getDay(){
	var month = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
	var newIndex = document.getElementById("month").options[document.getElementById("month").selectedIndex].value;
	var newDay = document.getElementById("day");
	if(newIndex != ""){
		for(var i=0;i<month[newIndex] ; i++){
			newDay.options[i] = new Option(i+1);
		}
	}

}
