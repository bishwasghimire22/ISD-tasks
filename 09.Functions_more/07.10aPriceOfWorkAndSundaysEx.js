

function calculate() {

    // Read date text from the input field
    let dateText = document.getElementById("date").value;

    // If it is not Sunday  (Call isSunday() function with a date text as a parameter)
    if(!isSunday(dateText)){
        outputText = `<p>Date ${dateText}(workday). <br> The price of this repair work is  48 euros per hour.</p>`
    }else {
        outputText = `<p>Date ${dateText}(Sunday). <br> The price of this repair work is 72 euros per hour.</p>`
    }
        //Show price of the repair work per hour during the workdays
    //otherwise			
        //Show price of the repair work per hour on Sundays
        document.getElementById("answer").innerHTML = outputText;

}

 // The function gets the date text in the format "dd.MM.yyyy". 
 // The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {
	
	// Split the given dateText into day, month and year parts using the substr() method
    var day = parseInt(dateText.substr(0, 2));
    var month = parseInt(dateText.substr(3, 2)) - 1; // Months are zero-based
    var year = parseInt(dateText.substr(6, 4));
   
	

	// Create a new Date object to a variable 
    const asDate = new Date();

   /*  asDate.setDate(day);
    asDate.setMonth(month); */
    asDate.setFullYear(year, month, day);
	

	// Get the day of the week with its getDay() method. Sunday is number 0 .
    let dateOfTheWeek = asDate.getDay();
	

	// If day of the week is Sunday 
    if(dateOfTheWeek === 0){
        return true;
    }else{
        return false;
    }
	
		// return Boolean value true
		
	// otherwise	
	
       // return Boolean value false		
	
}


