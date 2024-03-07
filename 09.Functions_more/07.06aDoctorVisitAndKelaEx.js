// Define a function (1.) which gets the length of the doctor's visit as a parameter and returns the maximum Kela reimbursement.
function doctorVisitLength(length) {
	if (length <= 10) {
		return 8.00;
	} else if (length <= 20) {
		return 11.00
	} else if (length <= 30) {
		return 13.50
	} else if (length <= 45) {
		return 16.50
	} else
		return 21.00
}
// Define a function  
function calculate() {
	// Read values from the input fields
	let visitLength = Number(document.getElementById("length").value);
	let doctorFee =  Number(document.getElementById("doctorsFee").value);

	// Call the function (1.) which calculates and returns Kela reimbursement 
	let kelaReimbursement = doctorVisitLength(visitLength);

	document.getElementById("answer").innerHTML = `Length of visit is ${visitLength} minutes.<br>Kela reimbursement is ${kelaReimbursement.toFixed(2)} euros.`


	// Write the answer on the page, to the answer div, as content of the div

}