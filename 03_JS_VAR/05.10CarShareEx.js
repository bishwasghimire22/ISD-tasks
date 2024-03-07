function calculateCosts() {
	var kilometereDriven = Number(document.getElementById("kilometers").value);

	var fuelConsumpstion = Number(document.getElementById("consumption").value);

	var fuelPrice = Number(document.getElementById("price").value);

	var numberOfParticipnats = Number(document.getElementById("participants").value);

	var costPerParticipant = ((fuelConsumpstion/100)*fuelPrice*(kilometereDriven/numberOfParticipnats));

	document.getElementById("answerId").innerHTML = "Fuel costs per participant is" + " " + costPerParticipant.toFixed(2) + " " + "euros.";


		//TODO
}