// function shows details about Identity Number
function show() {
    // Read value of identity number from the input field
   

    //Check gender
    // Get the second last character with charAt() method 
    // Convert digit text to number with parseInt() function
    // Check gender with modulo (%) operation (even number-> female, odd number-> male)
    

    // Parse birth day information
    // Take certain characters (dd, mm, yy and separator character)) from the string with substring() method 
    // Calculate the year with four digits
    // Concatenate birth day text

    // Write the answer on the page, to the answer div, as content of the div
      // Read value of identity number from the input field
      var identityNumber = document.getElementById('identityNumber').value;

      // Check gender
      // Get the second last character with charAt() method 
      // Convert digit text to number with parseInt() function
      // Check gender with modulo (%) operation (even number-> female, odd number-> male)
      var genderDigit = parseInt(identityNumber.charAt(9));
      var gender = (genderDigit % 2 === 0) ? "Female" : "Male";
  
      // Parse birth day information
      // Take certain characters (dd, mm, yy and separator character) from the string with substring() method 
      // Calculate the year with four digits
      // Concatenate birth day text
      var day = identityNumber.substring(0, 2);
      var month = identityNumber.substring(4, 2);
      var year = identityNumber.substring(6, 4);
      /* var separator = identityNumber.charAt(6); */
      /* var century = getCentury(separator); */
      /* var fullYear = century + year; */
      var birthDate = day + "." + month + "." + year;
  
      // Write the answer on the page, to the answer div, as content of the div
      var answerDiv = document.getElementById('answer');
      answerDiv.innerHTML = "<p>" + gender + ", born " + birthDate + ".</p>";
}
/* function getCentury(separator) {
    switch (separator) {
        case '-':
            return 1900;
        case '+':
            return 1800;
        case 'A':
            return 2000;
        default:
            return 0;
    }
} */