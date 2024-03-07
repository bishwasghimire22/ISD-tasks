function showStudyGrant(age, withParent) {

	var age = Number(document.getElementById("age").value);
	var withParent = document.getElementById("withParents").value;


	if(age >= 20) { 
		if (withParent === 'n'){
		document.getElementById("answer").innerHTML = "The study grant is 268.23 euros.";}

	else if(withParent === 'y'){
		document.getElementById("answer").innerHTML = "The study grant is 87.23 - 196.27 euros.";}

	}
	else{
		document.getElementById("answer").innerHTML = "Ask Kela."
	}
    
        // Read values from the input fields
		
		// if student is living with parents and his/her age is greater than 20 or equal
		
		      //assign text "The study grant is 335.20 euros." to a variable
			
		//otherwise if ....
		
		
		// Write the answer on the page, to the answer div, as content of the div
}
	