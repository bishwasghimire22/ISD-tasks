function tellInfractionFine() {
	var speed = Number(document.getElementById("drivingSpeed").value);

	var limit = Number(document.getElementById("speedLimit").value);

	var speedCrossedBy = speed - limit;


	if (limit >= 10 && limit <= 60) {
        if (speedCrossedBy <= 15) {
            document.getElementById("answer").innerHTML = "Infraction fine is 85 euros.";
        }
        else if (speedCrossedBy <= 20) {
            document.getElementById("answer").innerHTML = "Infraction fine is 115 euros.";
        }
    } if (limit >= 70 && limit <=120){
        if(speedCrossedBy <= 15){
        document.getElementById("answer").innerHTML = "Infraction fine is 70 euros.";
        } else if(speedCrossedBy <= 20){
            document.getElementById("answer").innerHTML = "Infraction fine is 100 euros.";  
        }
    } 
    if( speedCrossedBy > 20 ){
        document.getElementById("answer").innerHTML = "Income-based unit fine.";

    }
     if(speedCrossedBy == 0){
        document.getElementById("answer").innerHTML = "No speeding, no fine.";
    }
}