
function showWeightGoals() {
		// TODO
			var originalWeight = parseFloat(document.getElementById("weight").value);
		    var weeklyWeightLoss = (originalWeight * 0.10) / 7;
			
		for (var week = 1; week <= 7; week++) {

			var currentWeight = originalWeight - (weeklyWeightLoss * week);

		document.getElementById("answer").innerText += "After " + week + "." +  "week " + currentWeight.toFixed(1) + " kg\n ";
			}
		
		
		
	}