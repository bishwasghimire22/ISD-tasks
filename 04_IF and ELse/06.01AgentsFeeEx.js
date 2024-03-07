function calculateFee() {
		

	var sellingPrice = Number(document.getElementById("price").value);

	var agentFee = sellingPrice * 0.0344;
  
	if (agentFee < 2400) {
	  agentFee = 2400;
	}
	document.getElementById("fee").innerHTML = "Real state agent's fee is" + " " + agentFee.toFixed(2) + " " + "euros";
  
}
	
  // Call the function to calculate the agent's fee
 
  
	// Read value from the input field
		

	// Calculate fee, save the result to a variable
		
		
	// if the fee is under minimum, update it
		

	// Write the answer on the page, to the fee div, as content of the div
				