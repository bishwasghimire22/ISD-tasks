function comparePackages() {
	// assign input field values into a variables
	var textMessage = Number(document.getElementById("textMessages").value);

	var callTime = Number(document.getElementById("callTime").value);
	
		// calculate the costs of the Special Package
	var specialPackage = (19.90+(callTime*0.069)+(textMessage*0.069));
	var allInclusivePackage = 29.90;
		
        // If the Special package is cheaper than the All-inclusive package 
		
			// assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
			// to a variable
			if(specialPackage<allInclusivePackage){
				document.getElementById("answer").innerHTML = "The Special package (" + specialPackage.toFixed(2) + ") is cheaper than the All-inclusive package (29.90)";
			}
				else {
					document.getElementById("answer").innerHTML = "The All-inclusive package (29.90) is cheaper than the Special package(" + specialPackage.toFixed(2)+")";
				}	
		// otherwise
			// assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
			// to a variable
		
		// write the answer to the web page DOM, in the answer div, as the content
			}
