

var nameArray = [];


function addName() {

	nameArray.push(document.getElementById("name").value);

	document.getElementById("name").value = " ";

	showNames();
}

function showNames() {
	
	document.getElementById("nameList").innerHTML = "Inserted names:" + nameArray.join(" ");


}

function makeDraw() {
	let winningNumber = Math.floor(Math.random() *nameArray.length);

	let winnerName = nameArray[winningNumber];

	showNames();

	document.getElementById("answer").innerHTML = `<br> Winner is ${winnerName}`;


}














/* 
	let names = [];

		function addName() {
			// Assign name from the input field to the array (use push())
			names.push(document.getElementById("name").value);

			// Empty the input field of name as that name was just put in the array
			document.getElementById("name").value = "";

			showNames();
		}

		function showNames() {
			// Write the names on the page, to the nameList div, as content of the div
			document.getElementById("nameList").innerHTML = "Inserted names: " + names.join(" ");
		}

		function makeDraw() {
			// Randomize the index of the winner
			let winningIndex = Math.floor(Math.random() * names.length);
			let winnerName = names[winningIndex];

			showNames(); // Display the final list of names
			// Write the answer on the page, to the answer div, as content of the div
			document.getElementById("answer").innerHTML = `<br> Winner is ${winnerName}`;
		}
 */