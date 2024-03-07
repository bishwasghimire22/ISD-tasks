function modifyTitle() {

	// Read value of title from the input field
	let title = document.getElementById("title").value;

	let modifiedTitle = allCapsTitleTrimmed(title);

	// Call allCapsTitleTrimmed() function 
	document.getElementById("title").value = modifiedTitle;


}

function allCapsTitleTrimmed(text) {
	// Removes any empty white space from the beginning or the end of the text

	// Changes the text given to it to be ALL CAPS
	return text.trim().toUpperCase();

	// Return the changed text

}

function calculate() {

	// Calculate length of the work as minutes.
	var dateText = document.getElementById('date').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

	var workLength = calculateWorkLength(startTime, endTime);
	if (!isSunday(dateText)) {
        // Calculate and show price of the repair work during the workdays
        var price = calculatePrice(workLength, 48);
        outputText = `Length of the work was ${workLength} minutes.<br>The hourly price is during the workdays 48.00 euros.<br>The price of this repair work is ${price.toFixed(2)} euros.`;
    } else {
        // Calculate and show price of the repair work on Sundays
        var price = calculatePrice(workLength, 72);
        outputText = `Length of the work was ${workLength} minutes.<br>The hourly price is during the sundays 72.00 euros.<br>The price of this repair work is ${price.toFixed(2)} euros.`;
    }
	document.getElementById('answer').innerHTML = outputText
	// If it is not Sunday  (Call isSunday() function)
	//Calculate and show price of the repair work during the workdays
	//otherwise			
	//Calculate and showprice of the repair work on Sundays

}

// The function gets the date text in the format "dd.MM.yyyy". 
// The function returns Boolean value true if the date is for a Sunday, otherwise false.
function isSunday(dateText) {

	// Split the given date text into day, month and year parts using the subStr() method
	let day = dateText.substr(0, 2);
	let month = dateText.substr(3, 2) - 1;
	let year = dateText.substr(6, 4);

	// Create a new Date object to a variable asDate
	const asDate = new Date();

	asDate.setFullYear(year, month, day);


	// Get the day of the week with its getDay() method. Sunday is number 0 .
	let dayOfTheWeek = asDate.getDay();

	if (dayOfTheWeek === 0) {
		return true;
	} else {
		return false;
	}
	// If day of the week is Sunday 

	// return Boolean value true

	// otherwise	

	// return Boolean value false		

}
function calculateWorkLength(startTime, endTime) {

    var start = new Date("2000-01-01T" + startTime + ":00");
    var end = new Date("2000-01-01T" + endTime + ":00");

   
    var timeDiff = end - start;

   
    var workLength = Math.floor(timeDiff / (1000 * 60));

    return workLength;
}
function calculatePrice(workLength, hourlyRate) {
    // Calculate the total price based on work length and hourly rate
    return (workLength / 60) * hourlyRate;
}

