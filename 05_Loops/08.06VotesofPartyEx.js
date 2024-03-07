function showComparisonScores() {
	let totalVotes = Number(document.getElementById("votes").value);
	let numberOfCandidates = Number(document.getElementById("candidates").value);

	for( let i = 1; i <=numberOfCandidates; i++ ){
		let comparisonScore = (totalVotes/i).toFixed(0);
		document.getElementById("answer").innerHTML += i + ". candidate: " + comparisonScore + "<br>";
	}

		
		// For each candidates
			// Calculate comparison score for candidate
			
		// Show scores
		
}

