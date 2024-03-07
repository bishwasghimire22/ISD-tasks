function calculateUnitFine() {

	var netIncome = Number(document.getElementById("txtNetIncome").value);

	var unitFine = (netIncome - 255)/60;

	document.getElementById("answerDiv").innerHTML = "Unit fine is" + " " + unitFine.toFixed(2) + " " + "euros.";

       
}