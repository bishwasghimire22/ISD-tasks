function processName() {

    // read value of name from the input field
    let input = " ";
    input = document.getElementById("name").value;


    // show it with "ALL CAPS" using toUpperCase()

    let forUpperCase = input.toUpperCase();


    // show it with  "all small letters" using toLowerCase()
    let forLowerCase = input.toLowerCase();


    //tell how many characters are there (length, includes also all spaces) 

    let characterLength = input.length;


    document.getElementById("upperCase").innerHTML = `With upper case letters: ${forUpperCase}`
    document.getElementById("lowerCase").innerHTML = `With lower case letters: ${forLowerCase}`
    document.getElementById("length").innerHTML = `Character count: ${characterLength}`



}