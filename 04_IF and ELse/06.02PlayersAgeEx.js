function checkAge() {
	var age = Number(document.getElementById("age").value);

	if( age< 18){
		document.getElementById("answer").innerHTML = "Adolescents are not allowed to play.";
	}
	else{
		document.getElementById("answer").innerHTML = "Old enough to play.";
	}
}
	
		// assign the age input field value into a variable
		
		//if age smaller than 18
		
			// assign text "Adolescents are not allowed to play." to a variable
			
			
		// otherwise 
		
			// assign text "Old enough to play." to a variable  
			
	
		
		// Write the answer to the web page DOM, in the answer div, as the content
		
