function processName() {

    // read value of name from the input field
    let input = " ";
    input = document.getElementById("name").value;
   

    // show it with "ALL CAPS" using toUpperCase()
   let forUpperCase = input.toUpperCase();

    // show it with  "all small letters" using toLowerCase()
    let forLowerCase = input.toLowerCase();
 
    //tell how many characters are there (length, includes also all spaces) 
   let length = input.length;

    // tell, whether the input string contains the word 'muumi'
   /* let containsMumi = input.indexOf("muumi") !== -1; */
    
    // tell the first character using charAt()
    let firstCharacter = input.charAt(0); 
    

    // tell which ones are the first three characters using substring().
    let firstThree = input.substring(0, 3);

   document.getElementById("upperCase").innerHTML = `With upper case letters: ${forUpperCase}`;
   document.getElementById("lowerCase").innerHTML = `With lower case letters: ${forLowerCase}`;
   document.getElementById("length").innerHTML = `Character count: ${length}`;
   document.getElementById("contains").innerHTML = `Doesn't contain the text muumi.`
   document.getElementById("firstCharacter").innerHTML = `First character: ${firstCharacter}`;
   document.getElementById("manyCharacters").innerHTML = `First three characters: ${firstThree}`;
}