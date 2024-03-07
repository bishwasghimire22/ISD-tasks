
function play() {
	var bet = Number(document.getElementById("bet").value);

	var pips = Math.round( (Math.random( ) * 5) + 1 );

	if(pips == 2 || pips == 4){
		document.getElementById("answer").innerHTML = "Pips was"+ " " + pips + " " + "- Paid back:" + " " + (bet*1.25).toFixed(2) + " " + "euros";
	}
	else if(pips == 6){
		document.getElementById("answer").innerHTML = "Pips was"+ " " + pips + " " + "- Paid back:" + " " + (bet*1.5).toFixed(2) + " " + "euros";
	}
	else{
		document.getElementById("answer").innerHTML = "Pips was"+ " " + pips + " " + "- no pay";
	}	// Read value from the input field
		
		// Randomize dice pips between 1-6

		// Calculate win base on pips
		
		// Write the answer on the page, to the answer div, as content of the div

}
