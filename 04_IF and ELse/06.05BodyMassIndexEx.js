function calculateBMI() {
  var weight = Number(document.getElementById("weight").value);

  var height = Number(document.getElementById("height").value);
  
  var BMI = weight/(height/100*height/100);

  if(BMI<= 18.4){
    document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is" +" " + BMI.toFixed(2) + " " + "(Weight less than normal weight)";
  }
 else if(BMI>= 25.0){
    document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is" +" " + BMI.toFixed(2) + " " + "(Overweight)";

  }
 else{
  document.getElementById("answer").innerHTML = "Body Mass Index (BMI) is" +" " + BMI.toFixed(2) + " " + "(Normal weight)";
 }

  //TODO
		
}
