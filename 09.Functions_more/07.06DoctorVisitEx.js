const doctorFee = 15.90;


// Defne a function (1.)
function maximumKelaReimbursement(visitLength) {
	visitLength = parseInt(visitLength);
	if (visitLength <= 10) {
		return 8.00;
	} else if (visitLength <= 20) {
		return 11.00
	} else if (visitLength <= 30) {
		return 13.50
	} else if (visitLength <= 45) {
		return 16.50
	} else
		return 21.00
}
// Defne a function (2.)
function customerPayment(totalDoctorsFee, kelaReimbursement){
	totalDoctorsFee = parseFloat(totalDoctorsFee);
	kelaReimbursement = parseFloat(kelaReimbursement);

	return totalDoctorsFee + doctorFee - kelaReimbursement;
}


function calculate() {
// Read values from the input fields
let lengthOfVisit = Number(document.getElementById("length").value);
let totalDoctorsFeePaid = Number(document.getElementById("doctorsFee").value);

// Call the function (1.) which calculates Kela reimbursement
reimburementFromKela = maximumKelaReimbursement(lengthOfVisit);


// Call the function (2.) which calculates amount left for the customer to pay

customerToPay = customerPayment(totalDoctorsFeePaid, reimburementFromKela);

// Write the answer on the page, to the answer div, as content of the div
let outPutTxt = `Doctor's fee is ${totalDoctorsFeePaid.toFixed(2)} euros.<br> Kela reimbursement is ${reimburementFromKela.toFixed(2)} euros.<br> Office Fee is ${doctorFee.toFixed(2)} euros.<br> customer needs to pay ${customerToPay.toFixed(2)} euros.`

document.getElementById("answer").innerHTML = outPutTxt;

}








/* // Defne a function (1.) 
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

// Defne a function (2.) 
function doctorFeePaid(price) {
	return price + 15.90
	
}


// Define a function (3.) 
function calculate() {
	// Read values from the input fields
	let visitLength = Number(document.getElementById("length").value);
	let doctorFee = Number(document.getElementById("doctorsFee").value);

	// Call the function (1.) which calculates Kela reimbursement 
	let kelaReimbursement = doctorVisitLength(visitLength);


	// Call the function (2.) which calculates amount left for the customer to pay
	let totalPayment = doctorFeePaid(doctorFee);

	let customerPayment = totalPayment - kelaReimbursement;

	// Write the answer on the page, to the answer div, as content of the div
	document.getElementById("answer").innerHTML = `Doctor's Fee is ${doctorFee.toFixed(2)} euros.<br>Kela reimbursement is ${kelaReimbursement.toFixed(2)} euros.<br>Office Fee is 15.90 euros.<br>Customer needs to pay ${customerPayment.toFixed(2)} euros.`
}*/
