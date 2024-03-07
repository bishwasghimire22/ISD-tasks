

function tellAge() {
    // Read value of yearOfBirth from the input field 
    var givenYear = Number(document.getElementById("yearOfBirth").value);
    // Figure out the current date into today variable 
     const today = new Date();
  

    // Use getFullYear() method to get the current year out from the today variable
    currentYear = today.getFullYear();

    // Calculate the (rough estimate of the) age
    var estimateAge = currentYear - givenYear;
    

    // If age is less than zero
 
        //  Show an error message
        
    // otherwise tell the age
    if(estimateAge <= 0){
        outPutTxt = "Please enter a valid year";
    }else {
        outPutTxt = `You are now ${estimateAge} years old.<br> (Current year is ${currentYear})`;
    }
   document.getElementById("answer").innerHTML = outPutTxt;
}
