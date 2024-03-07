function calculateRent() {
		var rent = Number(document.getElementById("rent").value);

		var person = Number(document.getElementById("participants").value);

		var rentPerPerson = (rent/person);

		document.getElementById("answerDiv").innerHTML = "Rent per participants is" + " " + rentPerPerson.toFixed(2) + " " + "euros.";

		 // TODO
		
}